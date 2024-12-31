import { httpClient } from "@/lib/client";
import { CreateUserResponse } from "@/types";
import { HTTPError } from "ky";
import { createMutation } from "react-query-kit";

export const useSignUpMutation = createMutation<
  CreateUserResponse,
  CreateUserParams,
  HTTPError
>({
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("auth/sign-up", { json: variables })
      .json<CreateUserResponse>();
    return response;
  },
});
