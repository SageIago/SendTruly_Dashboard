import { useVerifyOtpMutation } from "@/api/verification/verify-otp";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useAuth from "@/hooks/useAuth";
import { RenderToasts } from "@/lib/utils";
import UserDataStore from "@/store/dataStore";
import TokenStore from "@/store/tokenStore";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useState } from "react";

export const Route = createFileRoute("/verify-otp")({
  component: VerifyOTP,
});

function VerifyOTP() {
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { user: data, updateUser } = UserDataStore();
  const { setToken } = TokenStore();

  const { mutate, isPending } = useVerifyOtpMutation({
    onSuccess({ data, bearer_token }) {
      RenderToasts({
        type: "success",
        title: "Welcome To SendTruly",
        description: "It's good to have you here!",
      });

      signIn(bearer_token ?? "");

      if (data) {
        updateUser(data);
      }
      setToken(bearer_token ?? "");

      console.log("Has the Code Reached Here!");

      navigate({ to: "/dashboard" });
    },
    onError(error) {
      console.log("🚀 ~ onError ~ error:", error);

      RenderToasts({
        type: "error",
        title: error.message ?? "The OTP You Supplied is Incorrect",
      });
    },
  });

  function handleSubmitOTP() {
    mutate({
      email: data.mail,
      otp: Number(password),
    });
  }

  return (
    <section className="flex items-center justify-center min-h-screen flex-col gap-4 px-4 sm:px-8 lg:px-16 bg-slate-200">
      <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-bold">
        Verify Your One Time Password
      </h2>
      <p>Please Input the OTP sent to {data.mail}</p>
      <div className="flex flex-col w-full sm:w-fit gap-2 overflow-hidden">
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          value={password}
          onChange={setPassword}
        >
          <InputOTPGroup className="w-full gap-2">
            <InputOTPSlot index={0} className="input-otp" />
            <InputOTPSlot index={1} className="input-otp" />
            <InputOTPSlot index={2} className="input-otp" />
            <InputOTPSlot index={3} className="input-otp" />
            <InputOTPSlot index={4} className="input-otp" />
            <InputOTPSlot index={5} className="input-otp" />
          </InputOTPGroup>
        </InputOTP>

        <Button
          className="btn-primary rounded-md px-4 py-6 mt-2 w-full sm:w-auto"
          onClick={handleSubmitOTP}
          disabled={isPending}
        >
          {isPending ? <LoadingSpinner /> : "Verify Your One-Time Password"}
        </Button>
      </div>
    </section>
  );
}
