import { httpClient } from "@/lib/client";
import { createMutation } from "react-query-kit";
import { HTTPError } from "ky";
import { CreateContactGroupResponse } from "@/types";

export const useCreateContactGroupMutation = createMutation<
  CreateContactGroupResponse,
  CreateContactGroupParams,
  HTTPError
>({
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("contact/create-list", { json: variables })
      .json<CreateContactGroupResponse>();

    return response;
  },
});
