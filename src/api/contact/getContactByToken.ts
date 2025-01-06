import { httpClient } from "@/lib/client";
import { createMutation } from "react-query-kit";
import { HTTPError } from "ky";
import { GetContactsByListTokenResponse } from "@/types";

export const GetContactsByListTokenMutation = createMutation<
  GetContactsByListTokenResponse,
  GetContactsByListToken,
  HTTPError
>({
  mutationKey: ["get-lists-by-token"],
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("contact/get-list-by-token", { json: variables })
      .json<GetContactsByListTokenResponse>();

    return response;
  },
});
