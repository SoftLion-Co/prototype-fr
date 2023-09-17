// BlogInfoComponent.tsx
import React, { useState } from "react";
import s from "./ContactInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";
import edit from "@/app/admin/images/control/edit.svg";
import bin from "@/app/admin/images/control/bin.svg";
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
  onCardClick: (blogData: BlogData) => void;
}

const BlogInfoComponent: React.FC<BlogInfoComponentProps> = ({
  users,
  searchTerm,
  setSearchTerm,
  onCardClick,
}) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={s.user}>
      <div>
        <SearchInputComponent
          placeholderText="Для пошуку за заголовком"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
        />
      </div>

      <div className={s.scroll__container}>
        {filteredUsers.map((user, index) => (
          <div className={s.user__content} key={index}>
            <div
              className={s.user__information}
              onClick={() => onCardClick(user)} // Додаємо обробник кліку на картці
            >
              <p className={s.user__number}>{user.number}</p>
              <h2 className={s.user__description}>{user.description}</h2>
              <p className={s.user__data}>{user.data}</p>
            </div>
            <div className={s.user__buttons}>
              <button className={s.user__button}>
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
