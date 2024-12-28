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
import { ForgetPasswordFormSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoadingSpinner } from "../shared/LoadingSpinner";

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;



export default function ForgetPasswordForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof ForgetPasswordFormSchema>>({
    resolver: zodResolver(ForgetPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof ForgetPasswordFormSchema>) {
    setIsLoading(true);

    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form>
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
                        placeholder="Enter Your Email Address"
                        {...field}
                        className="input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="mt-2 btn-primary w-full"
                disabled={isLoading}
                type="submit"
                onSubmit={()=> onSubmit}
              >
                {isLoading ? <LoadingSpinner /> : "Reset Password"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
