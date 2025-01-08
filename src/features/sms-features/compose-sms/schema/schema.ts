import * as z from "zod"

export const SMSFormSchema = z.object({
    country: z.string({
      required_error: "Please Your Country should be specified!",
    }).optional(),
    sender: z.string().min(3, {
      message: "The Name of the Sender must be greater than three characters",
    }),
    recipient: z.array(z.string().min(1).max(15)).min(1),
    message_sms: z
      .string()
      .min(3, { message: "The Message must be greater than three characters" })
      .max(160, { message: "The Message is less than 160 characters" }),
    message_type: z.string({
      required_error: "Please Your Message Type should be specified!",
    }),
    type: z.enum(["corporate_route", "refund_route"],{
      required_error: "Please select a delivery type"
    }),
    part: z.number().min(0).max(6),

  });


export type SMSFormType = z.infer<typeof SMSFormSchema>  

