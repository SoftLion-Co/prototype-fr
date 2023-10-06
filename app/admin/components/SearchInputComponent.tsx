import React from "react";
import s from "./SearchInputComponent.module.scss";

import SortingElements from "@/app/admin/components/SortingElements";
import { SortMenuOption } from "./SortMenuComponent";
import { BlogData } from "./blog/BlogInfoComponent";

interface SearchInputProps {
  placeholderText: string;
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEditButtonClick: (blog: BlogData | null) => void; 
  sortOptions: SortMenuOption[];
  sortOrderChange: () => void;
 

}

const SearchInputComponent: React.FC<SearchInputProps> = ({
  placeholderText,
  searchTerm,
  handleSearch,
  onEditButtonClick,
  sortOptions,
  sortOrderChange,
  // Включіть проп
}) => {
  return (
    <div className={s.search}>
      <input
        className={s.search__input}
        type="text"
        placeholder={placeholderText}
        value={searchTerm}
        onChange={handleSearch}
      />

      <SortingElements sortOrderChange={sortOrderChange}  sortOptions={sortOptions} onAddToList={onEditButtonClick}  />
    </div>
  );
};

export default SearchInputComponent;
