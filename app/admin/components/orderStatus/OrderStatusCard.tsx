import { FC, useState } from "react";
import s from "./OrderStatusCard.module.scss";
import { Button } from "../../buttons/Button";
import { ProjectData } from "../../dashboard/projects/page";
import classNames from "classnames";
import { FaRegHandPointDown } from "react-icons/fa";

interface ProjectCardProps {
  project: any;
}

export const OrderCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={s.order}>
      <input className={classNames(s.input__title, s.input)} type="text" placeholder="Для заголовку" />

        <p className={classNames(s.status__text, s.status__info)}>
          Статус
          <FaRegHandPointDown />
        </p>
      

      <div className={s.status}>
        <p className={s.status__text}>В процесі:</p>
        <p className={s.status__text}>Призупинений:</p>
        <p className={s.status__text}>Скасований:</p>
        <p className={s.status__text}>Завершиний:</p>
      </div>

      <div className={s.progress}>
        <div className={s.input__container}>
          <label className={s.input__label}>Дизайн:</label>
          <input className={classNames(s.input, s.input__progress)} type="text" placeholder="%" />
        </div>

        <div className={s.input__container}>
          <label className={s.input__label}>Розробка:</label>
          <input className={classNames(s.input, s.input__progress)} type="text" placeholder="%" />
        </div>

        <div className={s.input__container}>
          <label className={s.input__label}>Захист:</label>
          <input className={classNames(s.input, s.input__progress)} type="text" placeholder="%" />
        </div>
      </div>

      <div className={s.buttons_container}>
        <Button fnc={() => {}} text="Опублікувати" />
        <Button fnc={() => {}} text="Видалити" theme="delete" />
      </div>
    </div>
  );
};
