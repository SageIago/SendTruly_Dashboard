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
    corporate_route: z.boolean().default(false).optional(),
    refund_route: z.boolean().default(false).optional(),
    part: z.number().min(0).max(6),
  });


export type SMSFormType = z.infer<typeof SMSFormSchema>  


/*
// <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className=""
//         >
//           <FormField
//             control={form.control}
//             name="country"
//             render={({ field }) => (
//               <FormItem className="">
//                 <FormLabel
//                   className={cn(
//                     "font-Manrope text-[18px] leading-[24px] w-full font-bold"
//                   )}
//                 >
//                   Country{" "}
//                   <span className="text-red-500 font-bold text-[20px] font-Manrope">
//                     *
//                   </span>
//                 </FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger
//                       className={
//                         "font-Manrope text-[16px] leading-[24px] outline-none shad-no-focus rounded-[10px] border-secondary-200"
//                       }
//                     >
//                       <SelectValue placeholder="Select a Country" />
//                     </SelectTrigger>
//                   </FormControl>

//                   {/* THE CONTENT FOR THE  ITEMS*/
//                   <SelectContent className="bg-purple-500 font-Manrope text-secondary-100">
//                     <SelectItem value="Nigeria">Nigeria 🇳🇬</SelectItem>
//                     <SelectItem value="South Africa">
//                       South Africa 🇿🇦
//                     </SelectItem>
//                     <SelectItem value="Angola">Angola 🇦🇴</SelectItem>
//                     <SelectItem value="United States">
//                       United States 🇺🇸{" "}
//                     </SelectItem>
//                     <SelectItem value="Ghana">Ghana 🇬🇭</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage className="text-red-600 font-Manrope mb-3" />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="sender"
//             render={({ field }) => (
//               <FormItem className="">
//                 <FormLabel
//                   className={cn(
//                     "font-Manrope text-[18px] leading-[24px] font-normal w-full"
//                   )}
//                 >
//                   Sender ID
//                 </FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="Enter the Sender Name"
//                     {...field}
//                     className={
//                       "font-Manrope text-[16px] leading-[20px] outline-none shad-no-focus rounded-[10px] border-secondary-200"
//                     }
//                   />
//                 </FormControl>
//                 <FormMessage className="text-red-600 font-Manrope mb-3" />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="recipient"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel
//                   className={cn(
//                     "font-Manrope text-[18px] leading-[30px] font-normal"
//                   )}
//                 >
//                   To
//                 </FormLabel>
//                 <FormControl>
//                   <Textarea
//                     placeholder="Please Enter the Recipient's Numbers"
//                     {...field}
//                     className={cn(
//                       "font-Manrope text-[14px] leading-[24px] sm:text-[16px] sm:leading-[22px] outline-none shad-no-focus  rounded-[10px] border-secondary-200"
//                     )}
//                   />
//                 </FormControl>
//                 <FormMessage className="text-red-600 font-Manrope  mb-3" />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="message_sms"
//             render={({ field }) => (
//               <FormItem className="border-secondary-100 border-[0.5px] flex flex-col gap-2 bg-primary-100 py-4 px-2 rounded-[10px]">
//                 <div className="flex justify-between items-center">
//                   <FormLabel className="font-Manrope text-[18px] leading-[30px] font-normal justify-start">
//                     SMS Message
//                   </FormLabel>
//                   <div className="flex justify-between items-center gap-4">
//                     <img
//                       src={assets.AttachEmails}
//                       alt="AttachEmails"
//                       width={20}
//                       height={20}
//                       className="cursor-pointer"
//                     />
//                     <img
//                       src={assets.Clipboard}
//                       alt="Clipboard"
//                       width={20}
//                       height={20}
//                       className="cursor-pointer"
//                     />
//                     <img
//                       src={assets.AddAI}
//                       alt="ComposeAI"
//                       width={20}
//                       height={20}
//                       className="cursor-pointer"
//                     />
//                     <img
//                       src={assets.Rounded}
//                       alt="RoundedIcon"
//                       width={20}
//                       height={20}
//                       className="cursor-pointer"
//                     />
//                   </div>
//                 </div>
//                 <FormControl>
//                   <Textarea
//                     placeholder="Enter the Message Here!"
//                     className="text-[14px] leading-[24px] sm:text-[16px] sm:leading-[22px] outline-none shad-no-focus rounded-[10px] border-secondary-200"
//                     {...field}
//                     onChange={(e) => {
//                       field.onChange(e);
//                       handleTextareaChange(e);
//                     }}
//                     disabled={part >= 6}
//                   />
//                 </FormControl>
//                 <div className="text-right text-sm text-secondary-100 font-bold">
//                   Characters: {charCount} / 240 {" "} (Part: {part}/6)
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="message_type"
//             render={({ field }) => (
//               <FormItem className="">
//                 <FormLabel
//                   className={cn(
//                     "font-Manrope text-[18px] leading-[24px] w-full font-bold"
//                   )}
//                 >
//                   Message Type
//                   <span className="text-red-500 font-bold text-[20px] font-Manrope">
//                     *
//                   </span>
//                 </FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger
//                       className={
//                         "font-Manrope text-[16px] leading-[20px] outline-none shad-no-focus rounded-[10px] border-secondary-200"
//                       }
//                     >
//                       <SelectValue placeholder="Select a Message Type" />
//                     </SelectTrigger>
//                   </FormControl>

//                   {/* THE CONTENT FOR THE  ITEMS*/}
//                   <SelectContent className="bg-primary-200 font-Manrope text-secondary-100">
//                     <SelectItem value="standard-sm">Standard SMS</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage className="text-red-600 font-poppins mb-3" />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="corporate_route"
//             render={({ field }) => (
//               <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-[10px] border-[1px] border-secondary-100 p-4 shadow">
//                 <FormControl>
//                   <Checkbox
//                     checked={field.value}
//                     onCheckedChange={field.onChange}
//                     className="border-secondary-100 border-[1px] data-[state=checked]:bg-secondary-100 rounded"
//                   />
//                 </FormControl>
//                 <div className="space-y-1 leading-none">
//                   <FormLabel className="font-bold text-[16px] leading-[20px] font-poppins">
//                     Direct-Corporate Route: Auto-resend to All DND Numbers via
//                     the Corporate Route
//                   </FormLabel>
//                   <FormDescription className="font-normal text-[14px] leading-[18px]">
//                     Delivers to All DND Numbers.
//                   </FormDescription>
//                 </div>

//                 <Badge className="p-2 text-primary-100 bg-secondary-100">
//                   Recommended
//                 </Badge>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="refund_route"
//             render={({ field }) => (
//               <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-[10px] border-[1px] border-secondary-100 p-4 shadow">
//                 <FormControl>
//                   <Checkbox
//                     checked={field.value}
//                     onCheckedChange={field.onChange}
//                     className="border-secondary-100 border-[1px] text-secondary-200 data-[state=checked]:bg-secondary-100 text-ellipsis"
//                   />
//                 </FormControl>
//                 <div className="space-y-1 leading-none">
//                   <FormLabel className="font-bold text-[16px] leading-[24px] font-poppins">
//                     Direct-Refund Route: Sends to Non DND Numbers
//                   </FormLabel>
//                   <FormDescription className="font-normal text-[14px] leading-[18px]">
//                     Delivers to only non-DND Numbers.
//                   </FormDescription>
//                 </div>
//               </FormItem>
//             )}
//           />

//           <Button
//             type="submit"
//             className={cn(
//               "mt-3 bg-secondary-200 hover:bg-secondary-200 text-primary-200 px-10 py-4 rounded-[5px] font-bold text-[18px] leading-[24px]"
//             )}
//             disabled={isLoading}
//             onClick={() => onSubmit}
//           >

//             {isLoading ? "Sending the SMS...." : "Proceed to SMS Analysis"}
//           </Button>

//           <Button
//             type="submit"
//             className={cn(
//               " bg-primary-200 hover:bg-primary-200 text-primary-100-200 px-10 py-4 rounded-[5px] font-bold text-[18px] leading-[24px] border-[1px] border-secondary-100"
//             )}
//             disabled={isLoading}
//             onClick={() => saveAsDraft}
//           >
//             {isLoading ? "Saving as Drafts..." : "Save as Drafts"}
//           </Button>
//         </form>
//       </Form>
