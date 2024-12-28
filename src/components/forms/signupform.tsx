import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpFormSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoadingSpinner } from "../shared/LoadingSpinner";

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;

export function UserSignUpForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: "",
      lname: "",
      email: "",
      password: "",
      country: "Nigeria",
    },
  });

  function onSubmit(data: z.infer<typeof SignUpFormSchema>) {
    setIsLoading(true);

    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <div className="grid gap-2">
              <div className="w-full flex gap-2 justify-between">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your  First Name"
                          {...field}
                          className="input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lname"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Last Name"
                          {...field}
                          className="input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                      Email
                    </FormLabel>
                    <FormControl>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Email"
                          {...field}
                          className="input"
                        />
                      </FormControl>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                      Password
                    </FormLabel>
                    <FormControl>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Password"
                          {...field}
                          className="input"
                        />
                      </FormControl>
                    </FormControl>
                    <FormDescription className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                      Password must be at least 8 characters
                    </FormDescription>
                    <FormMessage className="" />
                  </FormItem>
                )}
              />

              <Button
                className="mt-2 btn-primary"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? <LoadingSpinner /> : "Create An Account"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
