"use client";

import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import ContactBlogInfoComponent from "../../components/contactBlog/ContactBlogInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";
import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";
import { AdminLayout } from "../AdminLayout";
import MainPageHeading from "../../components/MainPageHeading";

interface ContactData {
  number: number;
  data: string;
  email: string;
  description: string;
  tell: number;
}

const contactUs = () => {
  const users: ContactData[] = [
    {
      number: 1,
      data: "01.07.2023",
      tell: +380,
      email: "email1@example.com",
      description: "Description 1",
    },
    {
      number: 2,
      data: "01.07.2023",
      tell: +380,
      email: "email2@example.com",
      description: "Description 2",
    },
    {
      number: 5,
      data: "01.07.2023",
      tell: +380,
      email: "email3@example.com",
      description: "Description 3",
    },
    {
      number: 6,
      data: "02.07.2023",
      tell: +380,
      email: "email4@example.com",
      description: "Description 4",
    },
    {
      number: 7,
      data: "03.07.2023",
      tell: +380,
      email: "email5@example.com",
      description: "Description 5",
    },
    {
      number: 8,
      data: "04.07.2023",
      tell: +380,
      email: "email6@example.com",
      description: "Description 6",
    },
    {
      number: 9,
      data: "05.07.2023",
      tell: +380,
      email: "email7@example.com",
      description: "Description 7",
    },
    {
      number: 10,
      data: "06.07.2023",
      tell: +380,
      email: "email8@example.com",
      description: "Description 8",
    },
    {
      number: 11,
      data: "07.07.2023",
      tell: +380,
      email: "email9@example.com",
      description: "Description 9",
    },
    {
      number: 12,
      data: "08.07.2023",
      tell: +380,
      email: "email10@example.com",
      description: "Description 10",
    },
    {
      number: 13,
      data: "09.07.2023",
      tell: +380,
      email: "email11@example.com",
      description: "Description 11",
    },
    {
      number: 14,
      data: "10.07.2023",
      tell: +380,
      email: "email12@example.com",
      description: "Description 12",
    },
    {
      number: 15,
      data: "11.07.2023",
      tell: +380,
      email: "email13@example.com",
      description: "Description 13",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);

  const handleEditButtonClick = () => {
    setIsContentEditorVisible(!isContentEditorVisible);
  };

  useEffect(() => {
    const count = users.filter(user =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    ).length;
    setSearchResultCount(count);
  }, [searchTerm, users]);

  return (
    <AdminLayout>
      <div className={s.contact}>
        <ContactBlogInfoComponent
          users={users}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onCardClick={() => {}}
          onEditButtonClick={handleEditButtonClick}
        />

        <ItemCountDisplayComponent
          text="Кількість заявок"
          number={users.length}
          icon={IconType.People}
          searchResultCount={searchResultCount}
        />
      </div>

      <div className={s.content_editor}>
        <MainPageHeading initialText="Заявки Blog" />
      </div>
    </AdminLayout>
  );
};

export default contactUs;
