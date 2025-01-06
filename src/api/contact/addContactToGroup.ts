import { httpClient } from "@/lib/client";
import { createMutation } from "react-query-kit";
import { HTTPError } from "ky";
import { AddContactToGroupResponse } from "@/types";


export const useAddGroupContactMutation = createMutation<
  AddContactToGroupResponse,
  AddContactToGroupParams,
  HTTPError
>({
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("contact/add-contact-to-list", { json: variables })
      .json<AddContactToGroupResponse>();

    return response;
  },
});
