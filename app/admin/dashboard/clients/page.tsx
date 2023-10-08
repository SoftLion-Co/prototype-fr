"use client";

import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import ClientsInfoComponent from "../../components/clients/ClientsInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";
import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";
import { AdminLayout } from "../AdminLayout";
import MainPageHeading from "../../components/MainPageHeading";
import { ClientCard } from "../../components/clients/ClientCard";
import { ClientData } from "../types";

const Clients = () => {
  const clients: ClientData[] = [
    {
      id: "id_1",
      name: "Client 1",
      tell: "1234567890",
      email: "client1@example.com",
      password: "password1",
      projectsCount: 0,
      registerDate: "Fri Oct 06 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_2",
      name: "Client 2",
      tell: "1234567891",
      email: "client2@example.com",
      password: "password2",
      projectsCount: 2,
      registerDate: "Thu Oct 12 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_3",
      name: "Client 3",
      tell: "1234567892",
      email: "client3@example.com",
      password: "password3",
      projectsCount: 4,
      registerDate: "Thu Oct 05 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_4",
      name: "Client 4",
      tell: "1234567893",
      email: "client4@example.com",
      password: "password4",
      projectsCount: 6,
      registerDate: "Thu Oct 26 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_5",
      name: "Client 5",
      tell: "1234567894",
      email: "client5@example.com",
      password: "password5",
      projectsCount: 8,
      registerDate: "Thu Nov 09 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_6",
      name: "Client 6",
      tell: "1234567895",
      email: "client6@example.com",
      password: "password6",
      projectsCount: 10,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_7",
      name: "Client 7",
      tell: "1234567896",
      email: "client7@example.com",
      password: "password7",
      projectsCount: 12,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_8",
      name: "Client 8",
      tell: "1234567897",
      email: "client8@example.com",
      password: "password8",
      projectsCount: 14,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_9",
      name: "Client 9",
      tell: "1234567898",
      email: "client9@example.com",
      password: "password9",
      projectsCount: 16,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_10",
      name: "Client 10",
      tell: "1234567899",
      email: "client10@example.com",
      password: "password10",
      projectsCount: 18,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_11",
      name: "Client 11",
      tell: "1234567800",
      email: "client11@example.com",
      password: "password11",
      projectsCount: 20,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_12",
      name: "Client 12",
      tell: "1234567801",
      email: "client12@example.com",
      password: "password12",
      projectsCount: 22,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_13",
      name: "Client 13",
      tell: "1234567802",
      email: "client13@example.com",
      password: "password13",
      projectsCount: 24,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_14",
      name: "Client 14",
      tell: "1234567803",
      email: "client14@example.com",
      password: "password14",
      projectsCount: 26,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_15",
      name: "Client 15",
      tell: "1234567804",
      email: "client15@example.com",
      password: "password15",
      projectsCount: 28,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_16",
      name: "Client 16",
      tell: "1234567805",
      email: "client16@example.com",
      password: "password16",
      projectsCount: 30,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_17",
      name: "Client 17",
      tell: "1234567806",
      email: "client17@example.com",
      password: "password17",
      projectsCount: 32,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_18",
      name: "Client 18",
      tell: "1234567807",
      email: "client18@example.com",
      password: "password18",
      projectsCount: 34,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_19",
      name: "Client 19",
      tell: "1234567808",
      email: "client19@example.com",
      password: "password19",
      projectsCount: 36,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_20",
      name: "Client 20",
      tell: "1234567809",
      email: "client20@example.com",
      password: "password20",
      projectsCount: 38,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_21",
      name: "Client 21",
      tell: "1234567810",
      email: "client21@example.com",
      password: "password21",
      projectsCount: 40,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_22",
      name: "Client 22",
      tell: "1234567811",
      email: "client22@example.com",
      password: "password22",
      projectsCount: 42,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_23",
      name: "Client 23",
      tell: "1234567812",
      email: "client23@example.com",
      password: "password23",
      projectsCount: 44,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_24",
      name: "Client 24",
      tell: "1234567813",
      email: "client24@example.com",
      password: "password24",
      projectsCount: 46,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
    {
      id: "id_25",
      name: "Client 25",
      tell: "1234567814",
      email: "client25@example.com",
      password: "password25",
      projectsCount: 48,
      registerDate: "Thu Nov 02 2023 12:09:50 GMT+0300",
      wasOnline: new Date(),
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);
  const [client, setClient] = useState<null | ClientData>(null);

  const handleEditButtonClick = () => {
    setIsContentEditorVisible(!isContentEditorVisible);
  };

  return (
    <AdminLayout>
      <div className={s.contact}>
        <ClientsInfoComponent
          clients={clients}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onCardClick={setClient}
          onEditButtonClick={handleEditButtonClick}
        />

        <ItemCountDisplayComponent
          text="Кількість користувачів"
          number={clients.length}
          icon={IconType.People}
        />
      </div>

      <div className={s.content_editor}>
        <MainPageHeading initialText="Клієнти" />

        {client && <ClientCard client={client} />}
      </div>
    </AdminLayout>
  );
};

export default Clients;
