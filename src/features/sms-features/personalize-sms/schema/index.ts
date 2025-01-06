import * as z from "zod"

export const PersonalizeSchema = z.object({
    sender: z.string().min(1, {message: "The Sender Name Must be Greater than One Character"}),
    uploadFile: z.custom<File[]>()
})