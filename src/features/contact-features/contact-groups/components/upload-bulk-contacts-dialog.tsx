import UploadBulkContacts from "@/components/forms/upload-bulk-contactform";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IconUpload } from "@tabler/icons-react";

const UploadBulkContactGroupDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="contact-group-button">
          <span>Upload Bulk Contacts</span> <IconUpload size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-left font-bold text-[18px] leading-[24px] text-slate-500 flex flex-col gap-2">
          <h2>Upload Bulk Contacts</h2>

          <p className="text-[14px] leading-[20px]">
            Upload Format (Select A CSV File, Each Line should contain (Phone
            Number and Name))
          </p>
        </DialogHeader>
        <ScrollArea className="h-fit w-[300px] grid gap-2">
          <UploadBulkContacts />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default UploadBulkContactGroupDialog;
