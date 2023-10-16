import { FC, useState } from "react";
import s from "./ContactCard.module.scss";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsCalendar3 } from "react-icons/bs";
import { useDateFormat } from "@/hooks/useDateFormat";
import { ConfirmDeleteModal } from "../../modals/ConfirmDeleteModal";
import classNames from "classnames";
import { Button } from "../../buttons/Button";
import { ContactData } from "../../dashboard/types";

interface Props {
  contact: ContactData;
}

export const ContactCard: FC<Props> = ({ contact }) => {
  const { formatDMYT } = useDateFormat();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <div className={s.card}>
        <div className={classNames(s.card__info, s.card__first_info)}>
          <div>
            <BsFillTelephoneFill />
            <p>
              Номер телефону: <span>{contact.tell}</span>
            </p>
          </div>
          <div>
            <MdEmail />
            <p>
              E-mail: <span>{contact.email}</span>
            </p>
          </div>
          <div>
            ################
            <p>
              Короткий опис: <span>{contact.description}</span>
            </p>
          </div>
          <div>
            <BsCalendar3 />
            <p>
              Дата відправлення: <span>{formatDMYT(contact.sendData)}</span>
            </p>
          </div>
        </div>

        <button onClick={() => {}} className={s.card__view_projects_btn} type="button">
          Переглянути проекти
        </button>
      </div>

      <div className={s.buttons_container}>
        <Button fnc={() => {}} text="Редагувати" />
        <Button fnc={() => {}} text="Відхилити" />
        <Button fnc={() => setIsDeleteModalOpen(true)} text="Видалити" theme="delete" />
      </div>

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        fnc={() => {}}
      />
    </>
  );
};
