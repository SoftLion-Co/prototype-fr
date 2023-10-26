import { ChangeEvent, FC, useState } from "react";
import s from "./OrderStatusCard.module.scss";
import { Button } from "../Button";
import classNames from "classnames";
import { FaRegHandPointDown } from "react-icons/fa";
import { Modal } from "../../modals/Modal";
import { OrderStatusData } from "../../dashboard/orderStatus/page";

interface ProjectCardProps {
  project: OrderStatusData;
  onDelete: (id: string) => void;
}

const detailsMockData: {week: number; design: number; development: number; protection: number}[] = [
  {
    week: 1,
    design: 10,
    development: 10,
    protection: 10
  },
  {
    week: 2,
    design: 20,
    development: 20,
    protection: 20
  },
  {
    week: 3,
    design: 30,
    development: 30,
    protection: 30
  }
];

export const OrderCard: FC<ProjectCardProps> = ({ project, onDelete }) => {
  const [isActiv, setIsActiv] = useState(false);
  const [status, setStatus] = useState('');
  const [showDetailsStatusModal, setShowDetailsStatusModal] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const handelClickButton = () => {
    setIsActiv(!isActiv);
  };

  console.log(project)

  const handelStatusChang = (event: ChangeEvent<HTMLInputElement>): void => {
    setStatus(event.target.value)
  }

  const handleDetailsStatusModal = (): void => {
    setShowDetailsStatusModal(!showDetailsStatusModal);
  };

  const onDeleteCard = (): void => {
    onDelete(project.id);
    setIsDeleteModalOpen(false);
  }

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
                <input id="process" type="radio" name="status" value="process" onChange={handelStatusChang} checked={status === "process"} />
                <label className={s.status__text} htmlFor="process" >В процесі</label>
              </div>
              <div>
                <input id="suspended" type="radio" name="status" value="suspended" onChange={handelStatusChang} checked={status === "suspended"} />
                <label className={s.status__text} htmlFor="suspended">Призупинений</label>
              </div>
              <div>
                <input id="canceled" type="radio" name="status" value="canceled" onChange={handelStatusChang} checked={status === "canceled"} />
                <label className={s.status__text} htmlFor="canceled">Скасований</label>
              </div>
              <div>
                <input id="final" type="radio" name="status" value="final" onChange={handelStatusChang} checked={status === "final"} />
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
          <Button type="button" text="Видалити" theme="delete" onClick={() => setIsDeleteModalOpen(true)}/>
        </div>
      </form>

      <Modal onClose={() => setShowDetailsStatusModal(false)} isOpen={showDetailsStatusModal}>
        <table>
          <thead>
            <tr>
              <td>Week</td>
              <td>Development</td>
              <td>Design</td>
              <td>Protection</td>
            </tr>
          </thead>
          <tbody>
            {
              detailsMockData.map(detailMock => {
                return (<tr key={detailMock.week}>
                  <td>{detailMock.week}</td>
                  <td>{detailMock.development}</td>
                  <td>{detailMock.design}</td>
                  <td>{detailMock.protection}</td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </Modal>

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
