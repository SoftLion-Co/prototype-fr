import { FC, useState } from "react";
import s from "./ClientCard.module.scss";

import { BiSolidIdCard, BiSolidKey, BiTimeFive } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsCalendar3 } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { useDateFormat } from "@/hooks/useDateFormat";

import { ClientData } from "../../dashboard/types";
import classNames from "classnames";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import customerService from "@/services/customer-service";
import { Modal } from "../../modals/Modal";

interface Props {
  client: ClientData;
  onDelete: () => void;
}

export const ClientCard: FC<Props> = ({ client, onDelete }) => {
  const { formatDMYT } = useDateFormat();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();

  const viewAuthorProjects = (): void => {
    router.push(`/admin/dashboard/orderStatus?author=${client.id}`);
  }

  const deleteCustomer = () => {
    // customerService.deleteCustomer(client.id);
    onDelete();

    setIsDeleteModalOpen(false);
  }

  return (
    <>
      <div className={s.card}>
        <div className={classNames(s.card__info, s.card__first_info)}>
          <div>
            <BiSolidIdCard />
            <p>
              Ім’я: <span>{client.firstName} {client.lastName}</span>
            </p>
          </div>
          <div>
            <BsFillTelephoneFill />
            <p>
              Номер телефону: <span>{client.phoneNumber}</span>
            </p>
          </div>
          <div>
            <MdEmail />
            <p>
              E-mail: <span>{client.email}</span>
            </p>
          </div>
        </div>

        <div className={classNames(s.card__info, s.card__second_info)}>
          <div>
            <FaListAlt />
            <p>
              Кількість проектів: <span>{client.projects?.length ?? 0}</span>
            </p>
          </div>
          <div>
            <BsCalendar3 />
            <p>
              Дата реєстрації: <span>{formatDMYT(new Date(client.createdDateTime))}</span>
            </p>
          </div>
          <div>
            <BiTimeFive />
            <p>
              Оновлено: <span>{formatDMYT(new Date(client.updatedDateTime))}</span>
            </p>
          </div>
        </div>

        <button onClick={viewAuthorProjects} className={s.card__view_projects_btn} disabled={!client.projects?.length} type="button">
          Переглянути проекти
        </button>
      </div>

      <div className={s.buttons_container}>
        <Button text="Редагувати" />
        <Button onClick={() => setIsDeleteModalOpen(true)} text="Видалити" theme="delete" />
      </div>

      <Modal isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}> 
            <p className={s.modal__content__text}>Ви підтверджуєте видалення?</p>

            <div className={s.modal__content__buttons}>
              <button className={s.button__modal} onClick={() => setIsDeleteModalOpen(false)} type="button">
                Повернутись
              </button>
              <button className={s.button__modal} onClick={deleteCustomer} type="button">
                Видалити
              </button>
          </div>
        </Modal>
    </>
  );
};
