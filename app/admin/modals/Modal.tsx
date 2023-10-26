import { FC, useEffect, ReactNode, MouseEvent } from "react";
import { Portal } from "@/app/portal";
import s from "./Modal.module.scss";
import classNames from "classnames";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {

  const handleBackDropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    if (!isOpen) return;

    const handleEscBtnClick = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscBtnClick);

    return () => {
      document.removeEventListener("keydown", handleEscBtnClick);
    };
  }, [isOpen]);

  return (
    <Portal>
      <div id="backDrop"
        onClick={handleBackDropClick}
        className={classNames(s.backdrop, isOpen ? s.active : "")}>
        <div className={s.modal}>
          <div className={s.modal__head}>
            <button onClick={() => onClose()} type="button">
              <RxCross2 />
            </button>
          </div>
          <div className={s.modal__content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
