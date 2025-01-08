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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import CardsForm from "../cards/cards-form";
import { SMSFormSchema, SMSFormType } from "../schema/schema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
      type: "corporate_route",
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
    <div className="w-full flex flex-row gap-5 !m-3">
      <div className="w-[70%] grid !gap-6 p-5 bg-white shadow-lg rounded-[10px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2 px-3 w-full">
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
                    <FormMessage />
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
                        className="input !h-[150px]"
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
                  <FormItem className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                    <div className="flex justify-between items-center !mt-3">
                      <FormLabel>SMS Message</FormLabel>
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
                        className="input !h-[150px]"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleTextareaChange(e);
                        }}
                        disabled={part >= 6}
                      />
                    </FormControl>

                    <FormMessage />
                    <div className="text-right text-sm">
                      Characters Left:{" "}
                      <span className="font-bold font-Manrope text-primary-900">
                        {charCount} / 240
                      </span>{" "}
                      | Part: {part}/6
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 items-start w-full">
                    <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                      Choose a Delivery Route
                    </FormLabel>

                    <FormControl>
                      <RadioGroup
                        onChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-2 flex-col w-full"
                      >
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-[10px] border-[1px] border-green-500 p-2 shadow w-full">
                          <FormControl>
                            <RadioGroupItem
                              value="corporate_route"
                              className="border-green-500 !border-[1px] data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white fill-current w-4 h-4"
                            />
                          </FormControl>

                          <div className="space-y-1 leading-none w-full">
                            <FormLabel className="font-bold text-[12px] leading-[14px] font-poppins">
                              Direct-Corporate Route: Auto-resend to All DND
                              Numbers via the Corporate Route
                            </FormLabel>
                            <FormDescription className="font-normal text-[12px] leading-[16px]">
                              Delivers to All DND Numbers.
                            </FormDescription>
                          </div>

                          <Badge className="!text-primary-100 bg-green-500 !hover:bg-inherit">
                            Recommended
                          </Badge>
                        </FormItem>

                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-[10px] !bg-slate-200 text-primary-900 p-2  border-primary-900 shadow-lg w-full">
                          <FormControl>
                            <RadioGroupItem
                              value="refund_route"
                              className="border-green-500 !border-[1px] data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white  w-4 h-4"
                            />
                          </FormControl>

                          <div className="space-y-1 leading-none w-full">
                            <FormLabel className="font-bold text-[14px] leading-[18px] font-poppins">
                              Direct-Refund Route: Sends to Non DND Numbers
                            </FormLabel>
                            <FormDescription className="font-normal text-[12px] leading-[16px]">
                              Delivers to only non-DND Numbers.
                            </FormDescription>
                          </div>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="mt-3 contact-group-button-light text-primary-900 px-10 py-4 font-bold text-[18px] leading-[24px] !rounded-[5px] "
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
