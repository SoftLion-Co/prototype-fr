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
import customerService from "../../../../services/customer-service";
import { useRouter } from "next/navigation";

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshClients, setRefreshClients] = useState(false);
  const [client, setClient] = useState<null | ClientData>(null);
  const [clients, setClients] = useState([]);
  const router = useRouter();

  const handleEditButtonClick = () => {
    router.push("/registration");
  };
  const getClients = async () => {
    const allClients = await customerService.getAllCustomers();
    setClients(allClients.result);
  };
  useEffect(() => {
    getClients();
  }, [refreshClients]);


  return (
    <AdminLayout>
      <div className={s.contact}>
        <ClientsInfoComponent
          clients={clients}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onCardClick={setClient}
          onEditButtonClick={handleEditButtonClick}
          onUpdateClients={() => setRefreshClients(!refreshClients)}
        />

        <ItemCountDisplayComponent text="Кількість користувачів" number={clients.length} icon={IconType.People} />
      </div>

      <div className={s.content_editor}>
        <MainPageHeading initialText="Клієнти" />

        {client && <ClientCard client={client} onDelete={() => setClient(null)} />}
      </div>
    </AdminLayout>
  );
};

export default Clients;
