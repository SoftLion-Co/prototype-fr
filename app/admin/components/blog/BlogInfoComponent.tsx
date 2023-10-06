import React, { useState } from "react";
import s from "./BlogInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";
import edit from "@/app/admin/images/control/edit.svg";
import bin from "@/app/admin/images/control/bin.svg";
import Image from "next/image";
import { SortMenuOption } from "../SortMenuComponent";
import { formatDate } from "../../utils/formatDate";

export interface BlogData {
  number: number;
  title: string;
  data: string;
  rating: number;
  email?: string;
  description?: string;
  tell?: number;
}

interface Props {
  users: BlogData[];
  onEditButtonClick: (blog: BlogData | null) => void;
}

const BlogInfoComponent: React.FC<Props> = ({ users, onEditButtonClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setfilteredUsers] = useState<BlogData[]>(users);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setfilteredUsers(users.filter((user) => user.title.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const sortOptions: SortMenuOption[] = [
    {
      name: "Заголовок",
      action: () => {
        setfilteredUsers(
          [...filteredUsers].sort((blog1, blog2) => {
            return blog1.title.toLowerCase().localeCompare(blog2.title.toLowerCase());
          })
        );
      },
    },
    {
      name: "Рейтинг",
      action: () => {
        setfilteredUsers([...filteredUsers].sort((blog1, blog2) => blog2.rating - blog1.rating));
      },
    },
    {
      name: "Дата",
      action: () => {
        setfilteredUsers([...filteredUsers].sort((blog1, blog2) => new Date(blog1.data).getTime() - new Date(blog2.data).getTime()));
      },
    },
  ];

  const sortOrderChange = () => {
    setfilteredUsers([...filteredUsers].reverse());
  };

  return (
    <div className={s.user}>
      <div className={s.user__search}>
        <SearchInputComponent
          placeholderText="Для пошуку за заголовком"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          onEditButtonClick={onEditButtonClick}
          sortOptions={sortOptions}
          sortOrderChange={sortOrderChange}
        />
      </div>

      <ul className={s.user__list}>
        {filteredUsers.map((user, index) => (
          <li className={s.user__list__item} key={user.number}>
            <div className={s.user__list__information}>
              <p>{index + 1}</p>
              <p>{user.title}</p>
              <p>{formatDate(user.data)}</p>
              <p>{user.rating}</p>
            </div>
            <div className={s.user__list__buttons}>
              <button type="button" className={s.user__list__button}>
                <Image className={s.user__list__button__image} src={edit} alt="Edit" width={16} height={16} onClick={() => onEditButtonClick(user)}/>
              </button>
              <button type="button" className={s.user__list__button}>
                <Image className={s.user__list__button__image} src={bin} alt="Edit" width={16} height={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogInfoComponent;
