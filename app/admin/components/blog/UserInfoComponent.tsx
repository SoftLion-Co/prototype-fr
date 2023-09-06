import React, { useState } from "react";
import s from "./UserInfoComponent.module.scss";

import SearchInputComponent from "@/app/admin/components/SearchInputComponent";

import edit from "@/app/admin/images/control/edit.svg";
import bin from "@/app/admin/images/control/bin.svg";

import Image from "next/image";

export interface User {
  number: number;
  title: string;
  data: string;
  rating: string;
  verified?: boolean | undefined;
}

interface UserInfoComponentProps {
  users: User[];
}

const UserInfoComponent: React.FC<UserInfoComponentProps> = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={s.user}>
      <SearchInputComponent
        placeholderText="Search by title"
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
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
              <button className={s.user__button}>
                <Image
                  className={s.user__image}
                  src={edit}
                  alt="Edit"
                  width={16}
                  height={16}
                />
              </button>
              <button className={s.user__button}>
                <Image
                  className={s.user__image}
                  src={bin}
                  alt="Bin"
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

export default UserInfoComponent;
