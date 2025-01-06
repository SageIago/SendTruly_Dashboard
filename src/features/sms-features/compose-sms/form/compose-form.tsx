import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import assets from "@/assets/index";
import { Textarea } from "@/components/ui/textarea";
import CardsForm from "../cards/cards-form";
import { SMSFormSchema, SMSFormType } from "../schema/schema";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ComposeForm = () => {
  const [isLoading, setisLoading] = React.useState<boolean>(false);
  const [charCount, setCharCount] = useState(0);
  const form = useForm<SMSFormType>({
    resolver: zodResolver(SMSFormSchema),
    defaultValues: {
      sender: "",
      recipient: [],
      message_sms: "",
      message_type: "",
      country: "Nigeria",
      corporate_route: true,
      refund_route: false,
      part: 0,
    },
  });

  const { setValue, watch } = form;

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const message = event.target.value;
    setCharCount(message.length);

    // Update the form value for message_sms
    setValue("message_sms", message);

    // Increment the part value if character count reaches 120
    if (message.length >= 120) {
      setValue("part", Math.ceil(message.length / 120));
    } else {
      setValue("part", 0);
    }
  };

  // Watch the part value to disable the Textarea if it reaches 2
  const part = watch("part");

  function onSubmit(values: SMSFormType) {
    console.log(values);

    setisLoading(false);
  }

  async function saveAsDraft(values: SMSFormType) {
    console.log(values);
  }

  return (
    <div className="w-full flex justify-between !gap-2">
      <div className="w-[70%] grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="sender"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                      Sender
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Sender ID"
                        {...field}
                        className="input"
                      />
                    </FormControl>
                    data <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="recipient"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                      Recipient Numbers
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please Enter the Recipient's Numbers"
                        {...field}
                        className="font-Manrope text-[14px] leading-[24px] sm:text-[16px] sm:leading-[22px] outline-none shad-no-focus !bg-white rounded-[10px] border-purple-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message_sms"
                render={({ field }) => (
                  <FormItem className="text-tertiary-400 text-[14px] leading-[20px] font-bold border-[1px] border-purple-500">
                    <div className="flex justify-between items-center">
                      <FormLabel className="font-Manrope text-[18px] leading-[30px] font-normal justify-start">
                        SMS Message
                      </FormLabel>
                      <div className="flex justify-between items-center gap-4">
                        <img
                          src={assets.AttachEmails}
                          alt="AttachEmails"
                          width={20}
                          height={20}
                          className="cursor-pointer"
                        />
                        <img
                          src={assets.Clipboard}
                          alt="Clipboard"
                          width={20}
                          height={20}
                          className="cursor-pointer"
                        />
                        <img
                          src={assets.AddAI}
                          alt="ComposeAI"
                          width={20}
                          height={20}
                          className="cursor-pointer"
                        />
                        <img
                          src={assets.Rounded}
                          alt="RoundedIcon"
                          width={20}
                          height={20}
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="Enter the Message Here!"
                        className="text-[14px] leading-[24px] sm:text-[16px] sm:leading-[22px] outline-none shad-no-focus rounded-[10px] !bg-white !text-primary-900"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleTextareaChange(e);
                        }}
                        disabled={part >= 6}
                      />
                    </FormControl>

                    <FormMessage />
                    <div className="text-right text-sm text-primary-900 font-bold">
                      Characters Left:{" "}
                      <span className="font-bold text-purple-500">
                        {charCount} / 240
                      </span>{" "}
                      | Part: {part}/6
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex flex-col !gap-5">
                <p className="text-tertiary-400 text-[14px] leading-[20px] font-bold>Choose a Delivery Route">Choose A Delivery Route </p>
                <FormField
                  control={form.control}
                  name="corporate_route"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-[10px] border-[1px] border-green-500 p-4 shadow">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-secondary-100 border-[1px] data-[state=checked]:bg-secondary-100 rounded"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-bold text-[16px] leading-[20px] font-poppins">
                          Direct-Corporate Route: Auto-resend to All DND Numbers
                          via the Corporate Route
                        </FormLabel>
                        <FormDescription className="font-normal text-[14px] leading-[18px]">
                          Delivers to All DND Numbers.
                        </FormDescription>
                      </div>

                      <Badge className="p-2 text-primary-100 bg-secondary-100">
                        Recommended
                      </Badge>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="refund_route"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-[10px] border-[1px] border-secondary-100 p-4 shadow">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-purple-400 border-[1px] text-primary-900 data-[state=checked]:bg-secondary-100 r !rounded-lg"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-bold text-[16px] leading-[24px]">
                          Direct-Refund Route: Sends to Non DND Numbers
                        </FormLabel>
                        <FormDescription className="font-normal text-[14px] leading-[18px]">
                          Delivers to only non-DND Numbers.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="mt-3 bg-secondary-200 hover:bg-secondary-200 text-primary-200 px-10 py-4 rounded-[5px] font-bold text-[18px] leading-[24px]"
                disabled={isLoading}
                onClick={() => onSubmit}
              >
                {isLoading ? "Sending the SMS...." : "Proceed to SMS Analysis"}
              </Button>
              <Button
                type="submit"
                className="bg-white hover:bg-white text-purple-500 px-8 py-4 rounded-[5px] font-bold text-[18px] leading-[24px] border-[1px] border-purple-500"
                disabled={isLoading}
                onClick={() => saveAsDraft}
              >
                {isLoading ? "Saving as Drafts..." : "Save as Drafts"}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <CardsForm />
    </div>
  );
};

export default ComposeForm;
