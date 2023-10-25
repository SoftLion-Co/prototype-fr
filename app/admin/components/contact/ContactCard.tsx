import { FC, useState } from "react";
import s from "./ContactCard.module.scss";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsCalendar3 } from "react-icons/bs";
import { useDateFormat } from "@/hooks/useDateFormat";
import { ConfirmDeleteModal } from "../../modals/ConfirmDeleteModal";
import classNames from "classnames";
import { Button } from "../Button";
import { ContactData } from "../../dashboard/types";
import orderProjectService from '../../../../services/order-project-service';
import { ContactBlogData } from "../../dashboard/contactBlog/page";

interface Props {
  contact: ContactData | ContactBlogData;
}

export const ContactCard: FC<Props> = ({ contact }) => {
  const { formatDMYT } = useDateFormat();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const approveContact = (): void => {
    orderProjectService.changeTypeOrder(contact.id, true);
  }

  const rejectContact = (): void => {
    orderProjectService.changeTypeOrder(contact.id, false);
  }

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
      </div>

      <div className={s.buttons_container}>
        <Button  text="Прийняти" onClick={approveContact}/>
        <Button  text="Відхилити" onClick={rejectContact}/>
        <Button text="Видалити" theme="delete" /> 
        {/* fnc={() => setIsDeleteModalOpen(true)}  */}
      </div>

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        fnc={() => {}}
      />
    </>
  );
};
