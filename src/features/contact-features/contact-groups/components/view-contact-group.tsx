import { GetContactsByListTokenMutation } from "@/api/contact/getContactByToken";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconEye } from "@tabler/icons-react";
import React from "react";
import { BarLoader } from "react-spinners";

interface Props {
  list_name: string;
  list_token: number;
  totalNumbers: number;
  dateCreated: string;
}

const ViewContactGroupDialog = ({ list_name, list_token }: Props) => {
  const { mutate, isPending, data } = GetContactsByListTokenMutation();

  React.useEffect(() => {
    mutate({
      list_token: list_token,
    });
  }, [mutate, list_token]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconEye className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="h-[300px] w-fit flex flex-col !gap-5 bg-white text-primary-900 items-center">
        <DialogHeader className="text-left font-bold text-[18px] leading-[24px] text-slate-500">
          View {list_name}'s List
        </DialogHeader>
        {isPending ? (
          <>
            <BarLoader className="w-full justify-center mx-auto" />
          </>
        ) : (
          <div className="w-full justify-center items-center">
            <div className="flex flex-col gap-1 w-full">
              <h2 className="text-lg font-semibold">Contact Numbers</h2>
            </div>
            <div
              className={`grid gap-2 items-center justify-center ${(data?.data.contact_numbers.length ?? 0) > 5 ? "grid-cols-2" : "grid-cols-1"}`}
            >
              {data?.data.contact_numbers.map(
                (contact_number: string, index: number) => (
                  <Badge
                    key={`${contact_number}-${index}-${list_token}`}
                    className="text-primary-100 bg-purple-500 px-2 py-1 text-center hover:bg-purple-600 cursor-pointer w-fit"
                  >
                    {contact_number}
                  </Badge>
                )
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ViewContactGroupDialog;
