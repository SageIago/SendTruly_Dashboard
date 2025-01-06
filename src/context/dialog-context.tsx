import React, { createContext, useContext } from "react";
import useDialogState from "@/hooks/use-dialog-state";


type DialogStateType = {
  open: string | boolean | null;
  setOpen: (value: string | boolean | null) => void;
};

interface Props {
    children: React.ReactNode
}

const DialogContext = createContext<DialogStateType | undefined>(undefined);

export const DialogProvider =  ({children}: Props)=> {
  const [open, setOpen] = useDialogState<string | boolean>(null);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
