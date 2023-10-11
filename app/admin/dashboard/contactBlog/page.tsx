"use client";

import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import ContactBlogInfoComponent from "../../components/contactBlog/ContactBlogInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";
import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";
import { AdminLayout } from "../AdminLayout";
import MainPageHeading from "../../components/MainPageHeading";
import FilterContactControls from "../../components/FilterButtons";

export interface ContactBlogData {
  number: number;
  data: string;
  email: string;
  description: string;
  tell: number;
  verified?: boolean;
}

const contactUs = () => {
  const users: ContactBlogData[] = [
    {
      number: 1,
      data: "Fri Oct 06 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email1@example.com",
      description: "Description 1",
    },
    {
      number: 2,
      data: "Fri Sep 29 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email2@example.com",
      description: "Description 2",
    },
    {
      number: 5,
      data: "Fri Sep 22 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email3@example.com",
      description: "Description 3",
    },
    {
      number: 6,
      data: "Sat Sep 23 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email4@example.com",
      description: "Description 4",
    },
    {
      number: 7,
      data: "Sun Sep 24 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email5@example.com",
      description: "Description 5",
    },
    {
      number: 8,
      data: "Mon Sep 25 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email6@example.com",
      description: "Description 6",
    },
    {
      number: 9,
      data: "Sat Oct 07 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email7@example.com",
      description: "Description 7",
    },
    {
      number: 10,
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email8@example.com",
      description: "Description 8",
    },
    {
      number: 11,
      data: "Wed Oct 04 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email9@example.com",
      description: "Description 9",
    },
    {
      number: 12,
      data: "Tus Oct 03 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email10@example.com",
      description: "Description 10",
    },
    {
      number: 13,
      data: "Fri Oct 13 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email11@example.com",
      description: "Description 11",
    },
    {
      number: 14,
      data: "Sat Oct 14 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email12@example.com",
      description: "Description 12",
    },
    {
      number: 15,
      data: "Sun Oct 15 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email13@example.com",
      description: "Description 13",
    },
  ];

  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);
  const [filteredContact, setFilteredContact] = useState(users);


  const handleEditButtonClick = () => {
    setIsContentEditorVisible(!isContentEditorVisible);
  };

  return (
    <AdminLayout>
      <div className={s.contact}>
        <ContactBlogInfoComponent contacts={users} onCardClick={() => {}} onEditButtonClick={handleEditButtonClick} />

        <ItemCountDisplayComponent text="Кількість заявок" number={users.length} icon={IconType.People} searchResultCount={users.length} />
        <FilterContactControls contacts={users} setFilteredContact={setFilteredContact} />
      </div>

      <div className={s.content_editor}>
        <MainPageHeading initialText="Заявки Blog" />
      </div>
    </AdminLayout>
  );
};

export default contactUs;
