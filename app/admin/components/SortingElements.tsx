import React, { FC } from "react";
import Image from "next/image";
import s from "./SortingElements.module.scss";

import sort from "@/app/admin/images/sort/sort.svg";
import sortAmount from "@/app/admin/images/sort/sort-amount-desc.svg";
import update from "@/app/admin/images/sort/update.svg";
import addToList from "@/app/admin/images/sort/add-to-list.svg";

interface SortingElementsProps {
  onEditButtonClick: () => void;
}

const SortingElements: FC<SortingElementsProps> = ({ onEditButtonClick }) => {
  const handleEditButtonClick = () => {
    onEditButtonClick();
  };

  return (
    <div className={s.sorting}>
      <button className={s.sorting__button} type="button">
        <Image src={sort} alt="sort" />
      </button>
      <button className={s.sorting__button} type="button">
        <Image src={sortAmount} alt="sort amount" />
      </button>
      <button className={s.sorting__button} type="button">
        <Image src={update} alt="update" />
      </button>
      <button
        className={s.sorting__button}
        type="button"
        onClick={handleEditButtonClick}
      >
        <Image src={addToList} alt="add to list" />
      </button>
    </div>
  );
};

export default SortingElements;
