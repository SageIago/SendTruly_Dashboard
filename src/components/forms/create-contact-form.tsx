import { createContactGroupSchema, CreateContactGroupType } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { LoadingSpinner } from "../shared/LoadingSpinner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useCreateContactGroupMutation } from "@/api/contact/createContactGroup";
import { formatDate, RenderToasts } from "@/lib/utils";

const CreateContactList = () => {
  const form = useForm<CreateContactGroupType>({
    resolver: zodResolver(createContactGroupSchema),
    defaultValues: {
      list_name: "",
    },
  });

  const { mutate, isPending } = useCreateContactGroupMutation({
    onSuccess({ data }) {
      RenderToasts({
        type: "success",
        title: `${data.list.list_name} has been created SuccessFully!`,
        description: `Created List on ${formatDate(data.list.created_at)}`,
      });
    },
    onError(error) {
      RenderToasts({
        type: "error",
        title: `The List Has Not Been Created`,
        description: `${typeof error.name === "string" ? "The List Name Has Already Been Taken" : "The List Has not been Created!"}`,
      });
    },
  });

  async function handleOnSubmit(data: CreateContactGroupType) {
    mutate({
      list_name: data.list_name,
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <div>
          <div className="grid !gap-3">
            <FormField
              control={form.control}
              name="list_name"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                    List Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your ListName"
                      {...field}
                      className="input"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600 font-Urbanist text-[14px] leading-[20px]" />
                </FormItem>
              )}
            />

            <Button
              className="mt-2 contact-group-button-light"
              disabled={isPending}
              type="submit"
            >
              {isPending ? <LoadingSpinner /> : "Create Contact List"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default CreateContactList;
