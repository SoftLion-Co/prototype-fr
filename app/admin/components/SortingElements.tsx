import React, { useState } from "react";
import Image from "next/image";
import s from "./SortingElements.module.scss";

import sort from "@/app/admin/images/sort/sort.svg";
import sortAmount from "@/app/admin/images/sort/sort-amount-desc.svg";
import update from "@/app/admin/images/sort/update.svg";
import addToList from "@/app/admin/images/sort/add-to-list.svg";
import SortMenu, { SortMenuOption } from "./SortMenuComponent";
import classNames from "classnames";
import { BlogData } from '../dashboard/types';

interface SortingElementsProps {
  onSortOrderChange?: () => void; // Додайте проп
  onUpdate?: () => void;
  onAddToList: (blog: BlogData | null) => void;
  sortOptions: SortMenuOption[];
  showCreateButton: boolean;
  sortOrderChange: () => void;
}

const SortingElements: React.FC<SortingElementsProps> = ({ showCreateButton, sortOptions, sortOrderChange, onUpdate, onAddToList }) => {
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [sortOrderButtonDisabled, setSortOrderButtonDisabled] = useState(true);

  const handleSortChange = (): void => {
    setShowSortMenu(!showSortMenu);
    setSortOrderButtonDisabled(false);
  };

  const handleUpdateList = () => {
    if (onUpdate) {
      onUpdate();
    }
  };

  const handleAddToList = () => {
    onAddToList(null);
  };

  return (
    <div className={s.sorting}>
      <button
        className={classNames(s.sorting__button, sortOrderButtonDisabled ? s.button__disabled : "")}
        disabled={sortOrderButtonDisabled}
        type="button"
        onClick={() => sortOrderChange()}
      >
        <Image src={sort} alt="sort" />
      </button>
      <button className={s.sorting__button} type="button" onClick={() => handleSortChange()}>
        <Image src={sortAmount} alt="sort amount" />
        <div className={classNames(showSortMenu ? '' : s.hidden)}>
          <SortMenu options={sortOptions} />
        </div>
      </button>
      <button className={s.sorting__button} type="button" onClick={handleUpdateList}>
        <Image src={update} alt="update" />
      </button>
      {showCreateButton && <button className={s.sorting__button} type="button" onClick={handleAddToList}>
        <Image src={addToList} alt="add to list" />
      </button>
      }    </div>
  );
};

export default SortingElements;
