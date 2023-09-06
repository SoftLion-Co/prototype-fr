"use client"

import React, { useState } from "react";
import s from "./page.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";
import PanelNavigationComponent from "@/app/admin/components/PanelNavigationComponent";
import UserInfoComponent from "@/app/admin/components/blog/UserInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";
import FormContact from "../components/FormContact"
// import { ChangeEvent } from "react";

const Blogs = () => {
  const links = [{ title: "Blog", href: "#" }];

  const users = [
    {
      number: 1,
      title: "User 1",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 2,
      title: "User 2",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 3,
      title: "User 3",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 4,
      title: "User 4",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 5,
      title: "User 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 6,
      title: "User 6",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 7,
      title: "User 7",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 8,
      title: "User 8",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 9,
      title: "User 9",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 10,
      title: "User 10",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 11,
      title: "User 11",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 12,
      title: "User 12",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 13,
      title: "User 13",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 14,
      title: "User 14",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 15,
      title: "User 15",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 16,
      title: "User 16",
      data: "01.07.2023",
      rating: "5.0",
    },
  ];

  const itemCountData = {
    text: "Кількість користувачів",
    number: users.length,
    icon: "@/app/admin/images/quantity/peopleVector.svg",
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={s.container}>
      <div className={s.dashboard__container}>
        <div className={s.panel__container}>
          <PanelNavigationComponent />
        </div>

        <div className={s.page__container}>
          <div className={s.search__container}>
            <SearchInputComponent
              placeholderText="Для пошуку за заголовком"
              searchTerm={searchTerm}
              handleSearch={handleSearch}
            />
          </div>
          <div className={s.user__container}>
            <UserInfoComponent users={users} />  
          </div>
          <div>
            <ItemCountDisplayComponent
              text={itemCountData.text}
              number={itemCountData.number}
              icon={itemCountData.icon}
            />
          </div>
        </div>
      </div>
      <FormContact/>
    </div>
  );
};

export default Blogs;
