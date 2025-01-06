import CreateContactList from "@/components/forms/create-contact-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconMailPlus } from "@tabler/icons-react";

const CreateContactGroupDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="contact-group-button-light">
          <span>Create a List</span> <IconMailPlus size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="grid !gap-3 !w-[500px] bg-white ">
      <DialogHeader className="text-left font-bold text-[18px] leading-[24px] text-slate-500">
        Create A List
      </DialogHeader>
          <CreateContactList />
      </DialogContent>
    </Dialog>
  );
};

export default CreateContactGroupDialog;
