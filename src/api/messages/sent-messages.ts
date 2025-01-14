import { createMutation } from "react-query-kit";
import { HTTPError } from "ky";
import { httpClient } from "@/lib/client";
import { GetSentMessagesResponse } from "@/types";

export const useSentMessagesMutation = createMutation<
  GetSentMessagesResponse,
  GetSentMessagesParams,
  HTTPError
>({
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("messages/get-sent-messages", {
        json: variables,
      })
      .json<GetSentMessagesResponse>();

    return response;
  },
});
