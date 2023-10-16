"use client";

import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import ContactInfoComponent from "../../components/contact/ContactInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";
import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";
import { AdminLayout } from "../AdminLayout";
import MainPageHeading from "../../components/MainPageHeading";
import { ContactCard } from "../../components/contact/ContactCard";

import { ContactData } from "../types";

const contactUs = () => {
  const contacts: ContactData[] = [
    {
      id: "1",
      tell: "+1234567890",
      email: "example1@email.com",
      description:
        "Це опис контакту номер 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sendData: new Date("2023-01-15T12:00:00Z"),
    },
    {
      id: "2",
      tell: "+9876543210",
      email: "example2@email.com",
      description: "Опис контакту номер 2. Vestibulum vel urna nec quam vehicula bibendum.",
      sendData: new Date("2023-02-20T15:30:00Z"),
    },
    {
      id: "3",
      tell: "+1112223333",
      email: "example3@email.com",
      description: "Це третій контакт. Nulla facilisi. Vivamus efficitur purus eu leo vehicula.",
      sendData: new Date("2023-03-10T09:45:00Z"),
    },
    {
      id: "4",
      tell: "+4445556666",
      email: "example4@email.com",
      description: "Опис четвертого контакту. Sed ac erat vitae odio ullamcorper rhoncus.",
      sendData: new Date("2023-04-05T18:15:00Z"),
    },
    {
      id: "5",
      tell: "+7778889999",
      email: "example5@email.com",
      description:
        "П'ятий контакт. Maecenas auctor tortor in erat feugiat, in convallis dolor eleifend.",
      sendData: new Date("2023-05-12T10:30:00Z"),
    },
    {
      id: "6",
      tell: "+1122334455",
      email: "example6@email.com",
      description: "Шостий контакт. Fusce volutpat velit in sem euismod ultricies.",
      sendData: new Date("2023-06-08T14:20:00Z"),
    },
    {
      id: "7",
      tell: "+9988776655",
      email: "example7@email.com",
      description: "Сьомий контакт. Aliquam vel justo vel libero placerat auctor.",
      sendData: new Date("2023-07-03T11:00:00Z"),
    },
    {
      id: "8",
      tell: "+5544332211",
      email: "example8@email.com",
      description: "Восьмий контакт. Curabitur nec dui in erat sodales sollicitudin ac nec elit.",
      sendData: new Date("2023-08-25T08:45:00Z"),
    },
    {
      id: "9",
      tell: "+1122334400",
      email: "example9@email.com",
      description:
        "Дев'ятий контакт. Sed euismod elit eget orci bibendum, sed laoreet elit vehicula.",
      sendData: new Date("2023-09-17T17:00:00Z"),
    },
    {
      id: "10",
      tell: "+7778880000",
      email: "example10@email.com",
      description: "Десятий контакт. Ut non libero nec elit fringilla scelerisque.",
      sendData: new Date("2023-10-09T13:30:00Z"),
    },
    {
      id: "11",
      tell: "+1122004455",
      email: "example11@email.com",
      description:
        "Одинадцятий контакт. Nunc auctor, lorem quis euismod eleifend, libero mi dignissim ex.",
      sendData: new Date("2023-11-14T16:15:00Z"),
    },
    {
      id: "12",
      tell: "+9900112244",
      email: "example12@email.com",
      description:
        "Дванадцятий контакт. Nullam non sapien eget elit posuere tempor sit amet id erat.",
      sendData: new Date("2023-12-07T09:10:00Z"),
    },
    {
      id: "13",
      tell: "+6677889900",
      email: "example13@email.com",
      description: "Тринадцятий контакт. Fusce et viverra arcu. Curabitur et tincidunt nunc.",
      sendData: new Date("2024-01-22T14:45:00Z"),
    },
    {
      id: "14",
      tell: "+1122113344",
      email: "example14@email.com",
      description: "Чотирнадцятий контакт. Aliquam bibendum quam at leo efficitur interdum.",
      sendData: new Date("2024-02-18T11:20:00Z"),
    },
    {
      id: "15",
      tell: "+3344556677",
      email: "example15@email.com",
      description:
        "П'ятнадцятий контакт. Integer bibendum, urna et malesuada dignissim, nisl justo venenatis libero.",
      sendData: new Date("2024-03-29T16:50:00Z"),
    },
    {
      id: "16",
      tell: "+9988771122",
      email: "example16@email.com",
      description:
        "Шістнадцятий контакт. Suspendisse potenti. Aenean tristique purus a metus gravida, a malesuada tellus venenatis.",
      sendData: new Date("2024-04-10T10:05:00Z"),
    },
    {
      id: "17",
      tell: "+6677001122",
      email: "example17@email.com",
      description: "Сімнадцятий контакт. Sed consectetur tortor id varius ultricies.",
      sendData: new Date("2024-05-07T14:30:00Z"),
    },
    {
      id: "18",
      tell: "+1122337000",
      email: "example18@email.com",
      description: "Вісімнадцятий контакт. In nec tortor et arcu laoreet tristique.",
      sendData: new Date("2024-06-12T13:10:00Z"),
    },
    {
      id: "19",
      tell: "+6677889900",
      email: "example19@email.com",
      description:
        "Дев'ятнадцятий контакт. Phasellus vitae libero vel velit faucibus dignissim in nec arcu.",
      sendData: new Date("2024-07-24T17:55:00Z"),
    },
    {
      id: "20",
      tell: "+3344556677",
      email: "example20@email.com",
      description: "Двадцятий контакт. Donec aliquet lectus ac ultricies cursus.",
      sendData: new Date("2024-08-15T08:40:00Z"),
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);
  const [contact, setContact] = useState<null | ContactData>(null);

  const handleEditButtonClick = () => {
    setIsContentEditorVisible(!isContentEditorVisible);
  };

  return (
    <AdminLayout>
      <div className={s.contact}>
        <ContactInfoComponent
          contacts={contacts}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onCardClick={setContact}
          onEditButtonClick={handleEditButtonClick}
        />

        <ItemCountDisplayComponent
          text="Кількість заявок"
          number={contacts.length}
          icon={IconType.People}
        />
      </div>

      <div className={s.content_editor}>
        <MainPageHeading initialText="Заявки Contact Us" />

        {contact && <ContactCard contact={contact} />}
      </div>
    </AdminLayout>
  );
};

export default contactUs;
