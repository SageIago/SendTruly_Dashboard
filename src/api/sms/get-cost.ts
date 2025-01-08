import { createMutation } from "react-query-kit";
import { HTTPError } from "ky";
import { GetSMSCostResponse } from "@/types"
import { httpClient } from "@/lib/client"

type GetCost = unknown;

export const GetSMSCost = createMutation<GetCost, GetSMSCostResponse, HTTPError>({
    mutationKey: ["GetSMSCost"],
    mutationFn: async (variables)=> {
        const response = await httpClient.post("cost/get-cost", {
            json: variables
        }).json<GetSMSCostResponse>()

        return response
    }
})