import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger
} from "@/components/ui/dialog";
import { IconEdit } from "@tabler/icons-react";
import EditContactForm from "../forms/edit-contact-form";

interface Props {
  contact_name: string;
  list_token: number;
}

const EditContactsDialog = ({ contact_name, list_token }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconEdit className="cursor-pointer"/>
      </DialogTrigger>
        <DialogContent className="h-fit w-[350px] grid gap-2 bg-white text-primary-900">
          <DialogHeader className="text-left font-bold text-[18px] leading-[24px] text-slate-500">
            Edit {contact_name}
          </DialogHeader>
            <EditContactForm list_id={list_token} />
        </DialogContent>
    </Dialog>
  );
};

export default EditContactsDialog;
