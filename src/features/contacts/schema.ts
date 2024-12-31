import * as z from "zod";

const ContactSchema = z.object({
  date: z.string(),
  gender: z.string(),
  email: z.string().email(),
  anniversary: z.string().optional(),
  number: z.string(),
  name: z.string(),
});

export type ContactSchema = z.infer<typeof ContactSchema>;
