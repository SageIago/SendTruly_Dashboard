import { useAddGroupContactMutation } from "@/api/contact/addContactToGroup";
import { Button } from "@/components/ui/button";
import { AddContactToGroupSchema, AddContactToGroupType } from "@/lib/schema";
import { RenderToasts } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoadingSpinner } from "../shared/LoadingSpinner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type Props = {
  list_token: number;
};

const AddContactToListForm = ({ list_token }: Props) => {
  const form = useForm<AddContactToGroupType>({
    resolver: zodResolver(AddContactToGroupSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      anniversary: "",
      gender: "",
      date_of_birth: "",
    },
  });

  const { mutate, isPending } = useAddGroupContactMutation({
    onSuccess({ data }) {
      console.log(data, "Data Has been Added!")
      RenderToasts({
        type: "success",
        title: `Your Contact has been Added to ${data.list.list_name} SuccessFully`,
      });
    },
    
    onError() {
      RenderToasts({
        type: "error",
        title: `The Contact Has Not Been Added!!!`,
      });
    }
  });

  async function onSubmit(data: AddContactToGroupType) {
    mutate({
      list_token: list_token,
      contact: [data]
    })
  }
  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                        Name of Contact
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your  First Name"
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
                  name="number"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                        Enter Contact Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Contact Phone Number"
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
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Email Address"
                          {...field}
                          className="input"
                        />
                      </FormControl>
                    </FormControl>
                    <FormDescription className="text-tertiary-400 text-[14px] leading-[20px]">
                      This is an Optional Field
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="anniversary"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                      Enter Your Anniversary Date
                    </FormLabel>
                    <FormControl>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Anniversary Date"
                          {...field}
                          className="input"
                        />
                      </FormControl>
                    </FormControl>
                    <FormDescription className="text-tertiary-400 text-[14px] leading-[20px]">
                      This is an Optional Field
                    </FormDescription>
                    <FormMessage />
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date_of_birth"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-tertiary-400 text-[14px] leading-[20px] font-bold">
                      Date of Birth
                    </FormLabel>
                    <FormControl>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Date of Birth"
                          {...field}
                          className="input"
                        />
                      </FormControl>
                    </FormControl>
                    <FormDescription className="text-tertiary-400 text-[14px] leading-[20px]">
                      This is an Optional Field
                    </FormDescription>

                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <Button
                className="mt-2 contact-group-button-light"
                disabled={isPending}
                type="submit"
              >
                {isPending ? <LoadingSpinner /> : "Add Contact to List"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddContactToListForm;
