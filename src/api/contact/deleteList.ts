import { HTTPError } from "ky";
import { createMutation } from "react-query-kit";
import { DeleteListResponse } from "@/types";
import { httpClient } from "@/lib/client";

export const useDeleteMutation = createMutation<
  DeleteListResponse,
  DeleteContactsListParams,
  HTTPError
>({
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("contact/delete-user-list", { json: variables })
      .json<DeleteListResponse>();

    return response;
  },
});
