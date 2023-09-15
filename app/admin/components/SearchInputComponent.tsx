import React from "react";
import s from "./SearchInputComponent.module.scss";

import SortingElements from "@/app/admin/components/SortingElements";

interface SearchInputProps {
  placeholderText: string;
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInputComponent: React.FC<SearchInputProps> = ({
  placeholderText,
  searchTerm,
  handleSearch,
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

      <SortingElements />
    </div>
  );
};

export default SearchInputComponent;
