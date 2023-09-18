// BlogInfoComponent.tsx
import React, { useState } from "react";
import s from "./BlogInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";
import edit from "@/app/admin/images/control/edit.svg";
import Image from "next/image";

// Додано оголошення імпортів
interface User {
  number: number;
  title: string;
  data: string;
  rating: string;
}

interface BlogData {
  number: number;
  title: string;
  data: string;
  rating: string;
  email: string;
  description: string;
  tell: number;
}

interface BlogInfoComponentProps {
  users: BlogData[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onEditButtonClick: () => void;
}

const BlogInfoComponent: React.FC<BlogInfoComponentProps> = ({
  users,

  onEditButtonClick,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={s.user}>
      <div className={s.user__search}>
        <SearchInputComponent
          placeholderText="Для пошуку за заголовком"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          onEditButtonClick={onEditButtonClick}
        />
      </div>

      <div className={s.scroll__container}>
        {filteredUsers.map((user, index) => (
          <div className={s.user__content} key={index}>
            <div className={s.user__information}>
              <p className={s.user__number}>{user.number}</p>
              <h2 className={s.user__title}>{user.title}</h2>
              <p className={s.user__data}>{user.data}</p>
              <p className={s.user__rating}>{user.rating}</p>
            </div>
            <div className={s.user__buttons}>
              <button type="button" className={s.user__button}>
                <Image
                  className={s.user__image}
                  src={edit}
                  alt="Edit"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogInfoComponent;
