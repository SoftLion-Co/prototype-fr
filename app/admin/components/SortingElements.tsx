import React, { useState } from "react";
import Image from "next/image";
import s from "./SortingElements.module.scss";

import sort from "@/app/admin/images/sort/sort.svg";
import sortAmount from "@/app/admin/images/sort/sort-amount-desc.svg";
import update from "@/app/admin/images/sort/update.svg";
import addToList from "@/app/admin/images/sort/add-to-list.svg";
import ContentEditor from "@/app/admin/components/blog/ContentEditor";

interface SortingElementsProps {
  onEditButtonClick: () => void; // Додайте проп
}

const SortingElements: React.FC<SortingElementsProps> = ({ onEditButtonClick }) => {
  const handleSortingButtonClick = () => {
    console.log("Sorting button clicked");
  };

  const handleEditButtonClick = () => {
    console.log("Edit button clicked");
    onEditButtonClick();
  };

  const handleAddToListClick = () => {
    console.log("Add to list button clicked");
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
      <button className={s.sorting__button} type="button" onClick={handleEditButtonClick}>
        <Image src={addToList} alt="add to list" />
      </button>
    </div>
  );
};

export default SortingElements;
