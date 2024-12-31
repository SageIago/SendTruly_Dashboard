import { httpClient } from "@/lib/client";
import { LoginUserResponse } from "@/types";
import { HTTPError } from "ky";
import { createMutation } from "react-query-kit";


export const useLoginMutation = createMutation<
  LoginUserResponse,
  LoginUserParams,
  HTTPError
>({
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("auth/login", { json: variables })
      .json<LoginUserResponse>()
    return response
  },
})




 
