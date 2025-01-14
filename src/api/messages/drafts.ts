import { httpClient } from "@/lib/client";
import { GetDraftedMessagesResponse } from "@/types";
import { HTTPError } from "ky";
import { createMutation } from "react-query-kit";

export const useDraftsMessagesMutation = createMutation<
  GetDraftedMessagesResponse,
  GetDraftedMessagesParams,
  HTTPError
>({
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("messages/get-drafts-messages", {
        json: variables,
      })
      .json<GetDraftedMessagesResponse>();

    return response;
  },
});
