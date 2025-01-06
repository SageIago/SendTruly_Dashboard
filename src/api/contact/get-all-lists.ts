import { httpClient } from "@/lib/client";
import { GetAllContactListsResponse } from "@/types";
import { HTTPError } from "ky";
import { createQuery } from "react-query-kit";

type GetAllContactListsParams = void;

export const GetAllListsMutation = createQuery<
  GetAllContactListsResponse,
  GetAllContactListsParams,
  HTTPError
>({
  queryKey: ["get-all-lists"],
  fetcher: async () => {
    const response = await httpClient
      .get("contact/get-all-lists")
      .json<GetAllContactListsResponse>();

    return response;
  },
});
