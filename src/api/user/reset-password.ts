import { httpClient } from "@/lib/client";
import { ForgotPasswordResponse } from "@/types";
import { HTTPError } from "ky";
import { createMutation } from "react-query-kit";

export const useForgotPasswordMutation = createMutation<
  ForgotPasswordResponse,
  ResetPasswordParams,
  HTTPError
>({
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("auth/forget-password", { json: {
        mail: variables.email_address,
      } })
      .json<ForgotPasswordResponse>();
    return response;
  },
});
