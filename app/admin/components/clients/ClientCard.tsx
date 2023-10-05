import { FC, useState } from "react";
import s from "./ClientCard.module.scss";

import { BiSolidIdCard, BiSolidKey, BiTimeFive } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsCalendar3 } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { useDateFormat } from "@/hooks/useDateFormat";
import { ConfirmDeleteModal } from "../../modals/ConfirmDeleteModal";

import { ClientData } from "../../dashboard/types";
import classNames from "classnames";
import { Button } from "../../buttons/Button";

interface Props {
  client: ClientData;
}

export const ClientCard: FC<Props> = ({ client }) => {
  const { formatDMYT } = useDateFormat();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <div className={s.card}>
        <div className={classNames(s.card__info, s.card__first_info)}>
          <div>
            <BiSolidIdCard />
            <p>
              Ім’я: <span>{client.name}</span>
            </p>
          </div>
          <div>
            <BsFillTelephoneFill />
            <p>
              Номер телефону: <span>{client.tell}</span>
            </p>
          </div>
          <div>
            <MdEmail />
            <p>
              E-mail: <span>{client.email}</span>
            </p>
          </div>
          <div>
            <BiSolidKey />
            <p>
              Пароль: <span>{client.password}</span>
            </p>
          </div>
        </div>

        <div className={classNames(s.card__info, s.card__second_info)}>
          <div>
            <FaListAlt />
            <p>
              Кількість проектів: <span>{client.projectsCount}</span>
            </p>
          </div>
          <div>
            <BsCalendar3 />
            <p>
              Дата реєстрації: <span>{formatDMYT(client.registerDate)}</span>
            </p>
          </div>
          <div>
            <BiTimeFive />
            <p>
              Був в мережі: <span>{formatDMYT(client.wasOnline)}</span>
            </p>
          </div>
        </div>

        <button onClick={() => {}} className={s.card__view_projects_btn} type="button">
          Переглянути проекти
        </button>
      </div>

      <div className={s.buttons_container}>
        <Button fnc={() => {}} text="Редагувати" />
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
