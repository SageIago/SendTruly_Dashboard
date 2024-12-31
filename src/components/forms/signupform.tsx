import { useSignUpMutation } from "@/api/user/signup";
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
import { cn, RenderToasts } from "@/lib/utils";
import UserDataStore from "@/store/dataStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoadingSpinner } from "../shared/LoadingSpinner";

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;

export function UserSignUpForm({ className, ...props }: UserAuthFormProps) {
  const navigate = useNavigate();
  const { updateUser } = UserDataStore();

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

  const { mutate, isPending } = useSignUpMutation({
    onSuccess({ message, data }) {
      RenderToasts({
        type: "success",
        title: "Welcome To SendTruly",
        description: message,
      });

      console.warn(
        "Don't Paste Any Info on This Console. Hackers would try and get your info to use"
      );

      if (data) {
        updateUser(data);
      }

      navigate({ to: "/verify-otp" });
    },
    onError(error) {
      console.log("🚀 ~ onError ~ error:", error);

      RenderToasts({
        type: "error",
        title: error.message ?? "The Data Has Not Been Submitted!",
      });
    },
  });

  async function onSubmit(data: z.infer<typeof SignUpFormSchema>) {
    mutate({
      fname: data.lname,
      lname: data.lname,
      mail: data.email,
      pword: data.password,
      confirm_password: data.password,
      country: data.country ?? "Nigeria",
    });
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
                disabled={isPending}
                type="submit"
              >
                {isPending ? <LoadingSpinner /> : "Create An Account"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
