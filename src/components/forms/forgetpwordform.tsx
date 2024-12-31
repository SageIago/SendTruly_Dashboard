import { useForgotPasswordMutation } from "@/api/user/reset-password";
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
import { ForgetPasswordFormSchema, ForgotPasswordType } from "@/lib/schema";
import { cn, RenderToasts } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { LoadingSpinner } from "../shared/LoadingSpinner";

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;

export default function ForgetPasswordForm({
  className,
  ...props
}: UserAuthFormProps) {
  const navigate = useNavigate();

  const { mutate, isPending } = useForgotPasswordMutation({
    onSuccess({ message }) {
      RenderToasts({
        type: "success",
        title: "Password Reset",
        description: message,
      });
      console.log("Has the Code Reached Here!");

      navigate({ to: "/reset-password" });
    },
    onError(error) {
      console.log("🚀 ~ onError ~ error:", error);

      RenderToasts({
        type: "error",
        title: error.message ?? "The OTP You Supplied is Incorrect",
      });
    },
  });
  const form = useForm<ForgotPasswordType>({
    resolver: zodResolver(ForgetPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: ForgotPasswordType) {
    console.log(data);
    mutate({
      email_address: data.email,
    });
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
                    data <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="mt-2 btn-primary w-full"
                disabled={isPending}
                type="submit"
                onSubmit={() => onSubmit}
              >
                {isPending ? <LoadingSpinner /> : "Reset Password"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
