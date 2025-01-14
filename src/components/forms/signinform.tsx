import { useLoginMutation } from "@/api/user/login";
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
import useAuth from "@/hooks/useAuth";
import { LoginSchema, LoginType } from "@/lib/schema";
import { cn, RenderToasts } from "@/lib/utils";
import UserDataStore from "@/store/dataStore";
import TokenStore from "@/store/tokenStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useRouter } from "@tanstack/react-router";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { LoadingSpinner } from "../shared/LoadingSpinner";

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { navigate } = useRouter()
  const { signIn } = useAuth();
  const { updateUser } = UserDataStore();
  const { setToken } = TokenStore();

  const { mutate, isPending } = useLoginMutation({
    onSuccess({ data }) {
      RenderToasts({
        type: "success",
        title: "Welcome Back to SendTruly",
        description: "It's good to have you back",
      });

      updateUser(data.user);
      setToken(data.token);
      
      if (data.user.is_verified === false) {
        navigate({ to: "/verify-otp"})
      }

      console.log("Has the Code Reached Here!");

      signIn(data.token ?? ""); 
      navigate({ to: "/dashboard"})

      // redirect({to: "/dashboard"})
    },
    onError(error) {
      console.log("🚀 ~ onError ~ error:", error);

      RenderToasts({
        type: "error",
        title: "Password Credentials are not Correct",
        description: `${error.message}`,
      });
    },
  });

  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginType) {
    mutate({
      mail: data.email,
      pword: data.password,
    });
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
                disabled={isPending}
                type="submit"
              >
                {isPending ? <LoadingSpinner /> : "Login Your Account"}
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
