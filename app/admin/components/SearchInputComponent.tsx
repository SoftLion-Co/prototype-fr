import React, { FC } from "react";
import s from "./SearchInputComponent.module.scss";

import SortingElements from "@/app/admin/components/SortingElements";

interface SearchInputProps {
  placeholderText: string;
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEditButtonClick: () => void;
}

const SearchInputComponent: FC<SearchInputProps> = ({
  placeholderText,
  searchTerm,
  handleSearch,
  onEditButtonClick,
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

      <SortingElements onEditButtonClick={onEditButtonClick} />
    </div>
  );
};

export default SearchInputComponent;
