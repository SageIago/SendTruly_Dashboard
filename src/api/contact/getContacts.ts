import { httpClient } from "@/lib/client";
import { GetAllContactsResponse } from "@/types";
import { HTTPError } from "ky";
import { createQuery } from "react-query-kit";

type GetAllContactsParams = void;

export const GetAllContacts = createQuery<
  GetAllContactsResponse,
  GetAllContactsParams,
  HTTPError
>({
  queryKey: ["get-all-contacts"],

  fetcher: async () => {
    const response = await httpClient
      .get("contact/get-all-contacts")
      .json<GetAllContactsResponse>();

    return response;
  },
});
