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
  country: z.string().optional(),
});



export const PasswordFormSchema = z
  .object({
    password: z.string(),
    confirm_pword: z.string(),
  })
  .refine((data) => data.password === data.confirm_pword, {
    message: "Passwords don't match",
    path: ["confirm_pword"],
  });

export const ForgetPasswordFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Invalid email address" }),
});
