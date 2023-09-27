import { FC, useEffect, MouseEvent } from "react";
import { Portal } from "@/app/portal";
import s from "./ConfirmDeleteModal.module.scss";
import classNames from "classnames";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  fnc: () => void;
}

export const ConfirmDeleteModal: FC<ModalProps> = ({ isOpen, onClose, fnc }) => {
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
      <div
        id="backDrop"
        onClick={handleBackDropClick}
        className={classNames(s.backdrop, isOpen ? s.active : "")}
      >
        <div className={s.modal}>
          <div className={s.modal__head}>
            <button onClick={() => onClose()} type="button">
              <RxCross2 />
            </button>
          </div>

          <div className={s.modal__content}>
            <p className={s.modal__content__text}>Ви підтверджуєте видалення?</p>

            <div className={s.modal__content__buttons}>
              <button onClick={() => onClose()} type="button">
                Повернутись
              </button>
              <button onClick={() => fnc()} type="button">
                Видалити
              </button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
