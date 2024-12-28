import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/(auth)/reset-password")({
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function signInMagically() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 30000);

    navigate({from: "/reset-password", to: "/signin"})
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
      <p className="px-5  text-tertiary-100 !m-6 font-bold flex items-center gap-1 justify-center">
        {" "}
        <ArrowLeft size={20} />
        <Link to="/signin" className="text-[#4D4D4D] hover:underline">
          Back to Login.
        </Link>
      </p>
    </>
  );
}
