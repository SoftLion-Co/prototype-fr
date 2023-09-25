import { FC, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
}

export const Portal: FC<PortalProps> = ({ children }) => {
  const [modalRoot, setModalRoot] = useState<Element | null>(null);

  useEffect(() => {
    const el = document.getElementById("modalRoot") as Element | null;
    setModalRoot(el);
  }, []);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(<>{children}</>, modalRoot);
};
