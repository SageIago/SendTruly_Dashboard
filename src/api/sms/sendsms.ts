// import { httpClient } from "@/lib/client";
// import { HTTPError } from "ky";
import { createMutation } from "react-query-kit";

export const useSendSMSMutation = createMutation({
    mutationKey: ['send-sms'],
    mutationFn: async ()=> {
        console.log("Mutated Variables")
    }
})
