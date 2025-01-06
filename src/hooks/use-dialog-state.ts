import { useState } from "react";

export default function useDialogState<T extends string | boolean>(
  initialState: T | null = null
) {
  const [open, _setOpen] = useState<T | null>(initialState);

  const setOpen = (value: T | null) => {
    _setOpen((previousValue) => (previousValue === value ? null : value));
  };

  return [open, setOpen] as const;
}
