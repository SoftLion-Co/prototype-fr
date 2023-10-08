import { FC, useEffect, MouseEvent } from "react";
import { Portal } from "@/app/portal";
import s from "./DetailsModal.module.scss";
import classNames from "classnames";
import { RxCross2 } from "react-icons/rx";
import { BlogData } from '../components/blog/BlogInfoComponent';
import { formatDate } from "../utils/formatDate";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: BlogData | null;
}

export const DetailsModal: FC<ModalProps> = ({ isOpen, onClose, blog }) => {
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
            <p className={s.modal__text}>Рейтинг: <span className={s.modal__text_color}>{blog?.rating}</span></p>
            <p className={s.modal__text}>Дата опублікування: <span className={s.modal__text_color}>{formatDate(blog?.data)}</span></p>
            <p className={s.modal__text}>Дата оновлення:</p>
            <p className={s.modal__text}>Кількість переглядів:</p>
            <p className={s.modal__text}>Кількість реакцій:</p>
          </div>
        </div>
      </div>
    </Portal>
  );
};
