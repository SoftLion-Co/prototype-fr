import React from "react";
import s from "./SearchInputComponent.module.scss";

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
    <div className={s.search__input}>
      <input
        type="text"
        placeholder={placeholderText}
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInputComponent;
