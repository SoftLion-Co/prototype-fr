import { ChangeEvent, FC, useState } from "react";
import s from "./OrderStatusCard.module.scss";
import { Button } from "../Button";
import classNames from "classnames";
import { FaRegHandPointDown } from "react-icons/fa";

interface ProjectCardProps {
  project: any;
}

export const OrderCard: FC<ProjectCardProps> = ({ project }) => {
  const [isActiv, setIsActiv] = useState(false);
  const [status, setStatus] = useState('');
  const [showDetailsStatusModal, setShowDetailsStatusModal] = useState<boolean>(false);


  const handelClickButton = () => {
    setIsActiv(!isActiv);
  };

  const handelStatusChang = (event: ChangeEvent<HTMLInputElement> ): void => {
    setStatus(event.target.value)
  }

  const handleDetailsStatusModal = (): void => {
    setShowDetailsModal(!showDetailsModal);
    console.log("Modal", showDetailsModal);
  };

  return (
    <>
    <form className={s.order}>
      <input className={classNames(s.input__title, s.input)} type="text" placeholder="Для заголовку" />
      <div className={s.order_status__container}>
        <button type="button" className={s.order__button} onClick={handelClickButton}>
          Статус
          <FaRegHandPointDown />
        </button>

        {isActiv && (
          <div className={s.status} >
            <div>
              <input id="process"  type="radio" name="status" value="process" onChange={handelStatusChang} checked={status === "process"}/>
              <label className={s.status__text}  htmlFor="process" >В процесі</label>
            </div>
            <div>
              <input  id="suspended" type="radio" name="status" value="suspended" onChange={handelStatusChang} checked={status === "suspended"}/>
              <label className={s.status__text} htmlFor="suspended">Призупинений</label>
            </div>
            <div>
              <input  id="canceled" type="radio" name="status" value="canceled" onChange={handelStatusChang} checked={status === "canceled"}/>
              <label className={s.status__text} htmlFor="canceled">Скасований</label>
            </div>
            <div>
              <input  id="final" type="radio" name="status" value="final" onChange={handelStatusChang} checked={status === "final"}/>
              <label className={s.status__text} htmlFor="final">Завершиний</label>
            </div>
          </div>
        )}
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
        <div className={s.button_details}>
        <Button onClick={handleDetailsStatusModal} type="button" text="Деталі" />
        </div>
      </div>

      <div className={s.chart__container}></div>

      <div className={s.buttons_container}>
        <Button type="submit" text="Опублікувати" />
        <Button type="button" text="Видалити" theme="delete" />
      </div>
    </form>
    <DetailsStatusModal isOpen={showDetailsStatusModal} onClose={() => setShowDetailsStatusModal(false)} />

    </>
  );
};
