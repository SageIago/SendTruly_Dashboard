import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoadingSpinner } from "../shared/LoadingSpinner";

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, {
      message: "Please enter your password",
    })
    .min(8, {
      message: "Password must be at least 8 characters long",
    }),
});

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
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
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="name@example.com"
                        {...field}
                        className="input"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600 font-Urbanist text-[14px] leading-[20px]" />
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
                    <FormMessage className="text-red-600 font-Urbanist text-[14px] leading-[20px]" />
                  </FormItem>
                )}
              />

              <Button
                className="mt-2 btn-primary"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? <LoadingSpinner /> : "Login Your Account"}
              </Button>
            </div>
          </div>

          <div className="w-full mt-5 text-center">
            <Link
              to="/forgot-password"
              className="text-[15px] leading-[24px] font-semibold hover:opacity-75 text-tertiary-400"
            >
              Forgot password?
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
