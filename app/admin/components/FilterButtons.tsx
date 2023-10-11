"use client";
import { FC } from "react";
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
  const filterByVerification = (type: FilterType): void => {
    switch (type) {
      case FilterType.NEW:
        setFilteredContact(contacts.filter((contact) => contact.verified === undefined));
        break;
      case FilterType.VERIFIED:
        setFilteredContact(contacts.filter((contact) => contact.verified));
        break;
      case FilterType.DECLINED:
        setFilteredContact(contacts.filter((contact) => contact.verified === false));
        break;
    }
  };

  return (
    <div className={s.button__container}>
      <Button onClick={() => filterByVerification(FilterType.NEW)} text="Нові заявки" />
      <Button onClick={() => filterByVerification(FilterType.VERIFIED)} text="Прийняті заявки" />
      <Button onClick={() => filterByVerification(FilterType.DECLINED)} text="Відхилені заявки" />
    </div>
  );
};

export default FilterContactControls;
