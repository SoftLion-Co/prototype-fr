import { ChangeEvent, FC, useEffect, useState } from "react";
import s from "./NewOrderStatus.module.scss";
import { Button } from "../Button";
import classNames from "classnames";
import { FaRegHandPointDown } from "react-icons/fa";
import ServicesService from "../../../../services/services-service"
import { Service } from "../../dashboard/types";

export const NewOrderStatus = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveService, setIsActiveService] = useState(false);
  const [status, setStatus] = useState('');
  const [services, setServices] = useState<Service[]>([]);
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());

  useEffect(() => {
    const getAllServices = async () => {
      const allServices = await ServicesService.getAllServices();
      setServices(allServices.result);
    }
    getAllServices();
  }, [])

  const handelClickButton = () => {
    setIsActive(!isActive);
    setIsActiveService(false);
  };
  const handelClickButtonService = () => {
    setIsActiveService(!isActiveService);
    setIsActive(false);
  };

  const handelStatusChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setStatus(event.target.value)
  }

  const handleServiceChange = (id: string): void => {
    setSelectedServices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    })

  }

  return (
    <form className={s.order}>
      <input className={classNames(s.input__title, s.input)} type="text" placeholder="Для заголовку" />
      <div className={s.order_status__container}>
        <button type="button" className={s.order__button} onClick={handelClickButton}>
          Статус
          <FaRegHandPointDown />
        </button>

        {isActive && (
          <div className={s.status} >
            <div>
              <input id="process" type="radio" name="status" value="process" onChange={handelStatusChange} checked={status === "process"} />
              <label className={s.status__text} htmlFor="process" >В процесі</label>
            </div>
            <div>
              <input id="final" type="radio" name="status" value="final" onChange={handelStatusChange} checked={status === "final"} />
              <label className={s.status__text} htmlFor="final">Завершиний</label>
            </div>
            <div>
              <input id="suspended" type="radio" name="status" value="suspended" onChange={handelStatusChange} checked={status === "suspended"} />
              <label className={s.status__text} htmlFor="suspended">Призупинений</label>
            </div>
            <div>
              <input id="canceled" type="radio" name="status" value="canceled" onChange={handelStatusChange} checked={status === "canceled"} />
              <label className={s.status__text} htmlFor="canceled">Скасований</label>
            </div>
          </div>
        )}
      </div>
      <div className={s.service}>
        <button type="button" className={s.order__button} onClick={handelClickButtonService}> Service</button>
        {isActiveService && (
          <div className={s.status} >
            {services.map(service =>
              <div key={service.id}>
                <input id={service.id} type="checkbox" onChange={() => handleServiceChange(service.id)} checked={selectedServices.has(service.id)} />
                <label className={s.status__text} htmlFor={service.id} >{service.title}</label>
              </div>
            )}

          </div>
        )}
      </div>
      <div className={s.button_container}>
        <Button type="submit" text="Опублікувати" />
      </div>
    </form>
  );
};
