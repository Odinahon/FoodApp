// import { useEffect, useRef } from "react";
// import { createPortal } from "react-dom";

// export default function Modal({ children, open, onClose, className = "" }) {
//   const dialog = useRef();
//   useEffect(() => {
//     const modal = dialog.current;
//     if (open) {
//       //if dialog is open, how to check it, get access to dialog element through useRef() hook and use showModal method call
//       modal.showModal();
//     }
//     return () => modal.close();
//   }, [open]);
//   return createPortal(
//     <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
//       {children}
//     </dialog>,
//     document.getElementById("modal")
//   );
// }
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
