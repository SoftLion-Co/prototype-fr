import { FC, useEffect, useState } from "react";
import s from "./ContactCard.module.scss";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsCalendar3 } from "react-icons/bs";
import { useDateFormat } from "@/hooks/useDateFormat";
import classNames from "classnames";
import { Button } from "../Button";
import { ContactData } from "../../dashboard/types";
import orderProjectService from '../../../../services/order-project-service';
import { ContactBlogData } from "../../dashboard/contactBlog/page";
import { Modal } from "../../modals/Modal";

interface Props {
  contact: ContactData | ContactBlogData;
  deleteCard: () => void;
}

export const ContactCard: FC<Props> = ({ contact, deleteCard }) => {
  const { formatDMYT } = useDateFormat();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(contact);

  useEffect(() => {
    setCurrentContact(contact);
  }, [contact])

  const approveContact = (): void => {
    orderProjectService.changeTypeOrder(contact.id, true);
    setCurrentContact({
      ...currentContact,
      orderType: true
    })
  };

  const rejectContact = (): void => {
    orderProjectService.changeTypeOrder(contact.id, false);
    setCurrentContact({
      ...currentContact,
      orderType: false
    })
  }

  const onDeleteCard = (): void => {
    deleteCard();
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div className={s.card}>
        <div className={classNames(s.card__info, s.card__first_info)}>
          {(contact as ContactData).numberPhone && <div>
            <BsFillTelephoneFill />
            <p>
              Номер телефону: <span>{(contact as ContactData).numberPhone}</span>
            </p>
          </div>}
          {(contact as ContactBlogData).username && <div>
            <BsFillTelephoneFill />
            <p>
              Ім'я: <span>{(contact as ContactBlogData).username}</span>
            </p>
          </div>}
          <div>
            <MdEmail />
            <p>
              E-mail: <span>{contact.email}</span>
            </p>
          </div>
          <div>
            <p>
              Короткий опис: <span>{contact.shortDescription}</span>
            </p>
          </div>
          <div>
            <BsCalendar3 />
            <p>
              Дата відправлення: <span>{formatDMYT(new Date(contact.createdDateTime))}</span>
            </p>
          </div>
        </div>

        <div className={s.buttons_container}>
          {currentContact.orderType !== true && <Button text="Прийняти" onClick={approveContact} />}
          {currentContact.orderType !== false && <Button text="Відхилити" onClick={rejectContact} />}
          <Button onClick={() => setIsDeleteModalOpen(true)} text="Видалити" theme="delete" />
        </div>
      </div>


      <Modal isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}> 
            <p className={s.modal__content__text}>Ви підтверджуєте видалення?</p>

            <div className={s.modal__content__buttons}>
              <button className={s.button__modal} onClick={() => setIsDeleteModalOpen(false)} type="button">
                Повернутись
              </button>
              <button className={s.button__modal} onClick={onDeleteCard} type="button">
                Видалити
              </button>
          </div>
        </Modal>
    </>
  );
};
