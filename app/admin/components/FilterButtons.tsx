"use client";
import { FC, useState } from "react";
import { Button } from "./Button";
import s from "./FilterButtons.module.scss";

enum FilterType {
  NEW,
  VERIFIED,
  DECLINED,
}

interface FilterContactControlsProps {
  contacts: any[];
  setFilteredContact: (data: any[]) => void;
}

const FilterContactControls: FC<FilterContactControlsProps> = ({ contacts, setFilteredContact }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);

  const filterByVerification = (type: FilterType): void => {
    setActiveFilter(type);
    switch (type) {
      case FilterType.NEW:
        setFilteredContact(contacts.filter((contact) => contact.orderType === null));
        break;
      case FilterType.VERIFIED:
        setFilteredContact(contacts.filter((contact) => contact.orderType));
        break;
      case FilterType.DECLINED:
        setFilteredContact(contacts.filter((contact) => contact.orderType === false));
        break;
    }
  };

  return (
    <div className={s.container}>
      <div className={s.button__container}>
        <Button onClick={() => filterByVerification(FilterType.NEW)} className={activeFilter === FilterType.NEW ? s.active : ""} text="Нові заявки" />
        <Button onClick={() => filterByVerification(FilterType.VERIFIED)} className={activeFilter === FilterType.VERIFIED ? s.active : ""} text="Прийняті заявки" />
        <Button onClick={() => filterByVerification(FilterType.DECLINED)} className={activeFilter === FilterType.DECLINED ? s.active : ""} text="Відхилені заявки" />
      </div>
    </div>

  );
};

export default FilterContactControls;
