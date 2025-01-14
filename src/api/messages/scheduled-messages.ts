import { createMutation } from "react-query-kit";
import { HTTPError } from "ky";
import { httpClient } from "@/lib/client";
import { GetScheduledMessagesResponse } from "@/types";

export const useScheduledSMSMutation = createMutation<
  GetScheduledMessagesResponse,
  GetScheduledMessagesParams,
  HTTPError
>({
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("/messages/get-scheduled-messages", { json: variables })
      .json<GetScheduledMessagesResponse>();

    return response;
  },
});
