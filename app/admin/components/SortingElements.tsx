import React, { useState } from "react";
import Image from "next/image";
import s from "./SortingElements.module.scss";

import sort from "@/app/admin/images/sort/sort.svg";
import sortAmount from "@/app/admin/images/sort/sort-amount-desc.svg";
import update from "@/app/admin/images/sort/update.svg";
import addToList from "@/app/admin/images/sort/add-to-list.svg";
import ContentEditor from "@/app/admin/components/blog/ContentEditor";

const SortingElements = () => {
  const [isContentEditorOpen, setIsContentEditorOpen] = useState(false);

  const handleSortingButtonClick = () => {
    console.log("Sorting button clicked");
    setIsContentEditorOpen(true);
  };

  const handleEditButtonClick = () => {
    console.log("Edit button clicked");
    setIsContentEditorOpen(true);
  };

  const handleAddToListClick = () => {
    console.log("Add to list button clicked");
    setIsContentEditorOpen(true);
  };

  return (
    <div className={s.sorting__elements}>
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

      {/* {isContentEditorOpen && <ContentEditor />} */}
    </div>
  );
};

export default SortingElements;
