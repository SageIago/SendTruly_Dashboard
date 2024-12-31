import { httpClient } from "@/lib/client";
import { GetDashboardResponse } from "@/types";
import { HTTPError } from "ky";
import { createMutation } from "react-query-kit";


export const useDashboardMutation = createMutation<
  GetDashboardResponse,
  GetDashboardInfoParams,
  HTTPError
>({
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("dashboard", { json: variables })
      .json<GetDashboardResponse>();
    return response;
  },
});
