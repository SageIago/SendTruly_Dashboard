import { httpClient } from "@/lib/client";
import { GetUserStatsDataResponse } from "@/types";
import { HTTPError } from "ky";
import { createQuery } from "react-query-kit";

type UserData = void;

export const GetUserDataQuery = createQuery<
  GetUserStatsDataResponse,
  UserData,
  HTTPError
>({
  queryKey: ["get-stats-data"],
  fetcher: async () => {
    const response = await httpClient
      .get("dashboard")
      .json<GetUserStatsDataResponse>();

    return response;
  },
});
