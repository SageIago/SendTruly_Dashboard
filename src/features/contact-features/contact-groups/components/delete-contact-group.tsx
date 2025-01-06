import { useDeleteMutation } from "@/api/contact/deleteList";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RenderToasts } from "@/lib/utils";
import { IconAlertTriangle } from "@tabler/icons-react";
import { Trash } from "lucide-react";
import { useState } from "react";

interface Props {
  destructive: boolean;
  list_name: string;
  total_numbers: number;
  list_token: number;
}

const DeleteContactDialog = ({
  destructive,
  list_name,
  list_token,
  total_numbers,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const { mutate, isPending } = useDeleteMutation({
    onSuccess() {
      RenderToasts({
        type: "success",
        title: `${list_name} List's has been Deleted!`,
      });
    },
    onError() {
      RenderToasts({
        type: "error",
        title: `${list_name} List's has Not Been Deleted!`,
      });
    },
  });

  function handleConfirm() {
    console.log(list_token);

    mutate({
      list_token: String(list_token),
    });

    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Trash className="text-red-600 cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent className="!bg-white !text-primary-900 px-3 py-3 w-full h-[200px]">
        <AlertDialogHeader className="text-left">
          <AlertDialogTitle>
            {" "}
            <span className="text-destructive">
              <IconAlertTriangle
                className="mr-1 inline-block stroke-destructive"
                size={18}
              />{" "}
              Delete List
            </span>
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              {" "}
              <div className="space-y-4 !text-primary-900">
                <p className="mb-2">
                  Are you sure you want to delete{" "}
                  <span className="font-bold">{list_name}</span>?
                  <br />
                  This action will permanently remove this Contact list with{" "}
                  <span className="font-bold">
                    {total_numbers} Numbers
                  </span>{" "}
                  from the system. This cannot be undone.
                </p>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending} className="btn-primary">
            {isPending ? <LoadingSpinner /> : "Cancel"}
          </AlertDialogCancel>
          <Button
            variant={destructive ? "destructive" : "default"}
            onClick={handleConfirm}
            disabled={isPending}
          >
            {isPending ? <LoadingSpinner /> : "Delete"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteContactDialog;
