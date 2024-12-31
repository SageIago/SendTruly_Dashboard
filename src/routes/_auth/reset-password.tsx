import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_auth/reset-password")({
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function signInMagically() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 30000);

    navigate({to: "/signin" });
  }
  return (
    <>
      <div className="flex flex-col  text-center gap-[32px]">
        <h1 className="text-primary-900 text-[30px] leading-[38px] sm:text-[24px] sm:leading-[32px] font-[800] font-Manrope">
          Password Resetted.
        </h1>
        <p className="text-[16px] leading-[24px] text-tertiary-100">
          Your password has been successfully reset. Click below to redirect
          back to the Login Page
        </p>

        <Button
          className="btn-primary"
          disabled={isLoading}
          type="button"
          onClick={signInMagically}
        >
          {isLoading ? <LoadingSpinner /> : "Continue"}
        </Button>
      </div>
    </>
  );
}
