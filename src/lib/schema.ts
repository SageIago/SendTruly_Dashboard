import * as z from "zod";

export const SignUpFormSchema = z.object({
  name: z.string().min(1, { message: "Please enter your First Name" }),
  lname: z.string().min(1, { message: "Please Enter Your Last Name" }),
  email: z
    .string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(16, { message: "Password must be at most 16 characters long" }),
  phone_num: z.string().min(1, { message: "Please Enter Your Phone Num" }),
  country: z.string(),
});

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, {
      message: "Please enter your password",
    })
    .min(8, {
      message: "Password must be at least 8 characters long",
    }),
});
export const ForgetPasswordFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Invalid email address" }),
});

// This is for the Add & Create ContactForm

export const createContactGroupSchema = z.object({
  list_name: z.string(),
});

export const AddContactToGroupSchema = z.object({
  name: z.string(),
  number: z.string(),
  email: z.string().email({ message: "Invalid email address" }).optional(),
  anniversary: z.string().optional(),
  gender: z.string().optional(),
  date_of_birth: z.string().optional()
});

export type CreateContactGroupType = z.infer<typeof createContactGroupSchema>;
export type AddContactToGroupType = z.infer<typeof AddContactToGroupSchema>;
export type LoginType = z.infer<typeof LoginSchema>;
export type SignInType = z.infer<typeof SignUpFormSchema>;
export type ForgotPasswordType = z.infer<typeof ForgetPasswordFormSchema>;
