import { createMutation } from "react-query-kit";
import { HTTPError } from "ky";
import { GetSMSCostResponse } from "@/types";
import { httpClient } from "@/lib/client";

export const GetBulkSMSCost = createMutation<
  GetSMSCostResponse,
  GetSMSCostParams,
  HTTPError
>({
  mutationFn: async (variables) => {
    const response = await httpClient
      .post("cost/estimate-cost", {
        json: variables,
      })
      .json<GetSMSCostResponse>();

    return response;
  },
});
