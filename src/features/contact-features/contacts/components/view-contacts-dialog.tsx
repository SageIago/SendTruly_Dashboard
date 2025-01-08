import AddContactToListForm from "@/components/forms/add-contact-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import { IconEdit } from "@tabler/icons-react";

interface Props {
  list_name: string;
  list_token: number;
}

const ViewContactDialog = ({ list_name, list_token }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconEdit className="cursor-pointer"/>
      </DialogTrigger>
        <DialogContent className="h-fit w-[350px] grid gap-2 bg-white text-primary-900">
          <DialogHeader className="text-left font-bold text-[18px] leading-[24px] text-slate-500">
            Add Contact To {list_name}'s List
          </DialogHeader>
          <AddContactToListForm list_token={list_token} />
        </DialogContent>
    </Dialog>
  );
};

export default ViewContactDialog;
