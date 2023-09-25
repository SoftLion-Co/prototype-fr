import React, { useState } from "react";
import s from "./BlogInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";
import edit from "@/app/admin/images/control/edit.svg";
import bin from "@/app/admin/images/control/bin.svg";
import Image from "next/image";

interface BlogData {
  number: number;
  title: string;
  data: string;
  rating: string;
  email?: string;
  description?: string;
  tell?: number;
}

interface Props {
  users: BlogData[];
  onEditButtonClick: () => void;
}

const BlogInfoComponent: React.FC<Props> = ({ users, onEditButtonClick }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
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

      <ul className={s.user__list}>
        {filteredUsers.map(user => (
          <li className={s.user__list__item} key={user.number}>
            <div className={s.user__list__information}>
              <p>{user.number}</p>
              <p>{user.title}</p>
              <p>{user.data}</p>
              <p>{user.rating}</p>
            </div>
            <div className={s.user__list__buttons}>
              <button type="button" className={s.user__list__button}>
                <Image
                  className={s.user__list__button__image}
                  src={edit}
                  alt="Edit"
                  width={16}
                  height={16}
                />
              </button>
              <button type="button" className={s.user__list__button}>
                <Image
                  className={s.user__list__button__image}
                  src={bin}
                  alt="Edit"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogInfoComponent;
