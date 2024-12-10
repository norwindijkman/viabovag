import type { ComponentPropsWithRef, ReactNode } from 'react'
import { MouseEvent, useEffect, useRef } from 'react';
import usePreventBodyscroll from '@/util/hooks/usePreventBodyscroll';

export default function SidePanel({ 
  handleClose,
  children,
  ...dialogProps
}: { 
    handleClose: () => void 
    children: ReactNode,
} &  ComponentPropsWithRef<'dialog'>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  let mouseDownOutside = false
  usePreventBodyscroll()

  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])
  return (
    <dialog
      {...dialogProps}
      ref={dialogRef}
      onClose={handleClose}
      onMouseDown={(event: MouseEvent) => {
        // onMouseDown and onMouseUp are used instead of onClick to ensure the dialog remains open 
        // if the user clicks inside the dialog and releases outside (e.g., when selecting text).
        // This prevents the dialog from closing unintentionally when the mouse is released outside.
        mouseDownOutside = (event.target instanceof HTMLDialogElement);
      }}
      onMouseUp={(event: MouseEvent) => {
        if (event.target instanceof HTMLDialogElement && mouseDownOutside) handleClose();
      }}
    >
      {children}
    </dialog>
  );
}
