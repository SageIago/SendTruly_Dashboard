import { httpClient } from "@/lib/client";
import { createMutation } from "react-query-kit";
import { VerifyOTPResponse } from "@/types";
import { HTTPError } from "ky";

export const useVerifyOtpMutation = createMutation<
  VerifyOTPResponse,
  VerifyEmailParams,
  HTTPError
>({
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("auth/verify-user-otp", {
        json: {
          mail: variables.email,
          otp: variables.otp,
        },
      })
      .json<VerifyOTPResponse>();

    return response;
  },
});
