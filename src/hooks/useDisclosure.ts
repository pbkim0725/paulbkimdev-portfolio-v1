import { Dispatch, useCallback, useState } from 'react';

type useDisclosureReturnType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setOpen: Dispatch<boolean>;
};

export function useDisclosure(isOpenDefault = false): useDisclosureReturnType {
  const [isOpen, setOpen] = useState(isOpenDefault);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((state) => !state), []);

  return { isOpen, open, close, toggle, setOpen };
}
