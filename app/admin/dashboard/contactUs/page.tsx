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
import FilterContactControls from "../../components/FilterButtons";
import orderProjectService from '../../../../services/order-project-service';

const contactUs = () => {
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);
  const [contact, setContact] = useState<null | ContactData>(null);
  const [orders, setOrders] = useState<ContactData[]>([]);
  const [filteredContact, setFilteredContact] = useState<ContactData[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    loadOrders();
  }, [reload]);

  useEffect(() => setFilteredContact(orders), [orders]);

  async function loadOrders(): Promise<void> {
    const ordersResponse = await orderProjectService.getAllOrderProjects();

    setOrders(ordersResponse.result)
  }

  const handleEditButtonClick = () => {
    setIsContentEditorVisible(!isContentEditorVisible);
  };

  const deletContactUsCard = async () => {
    // await orderProjectService.deleteOrderProject(contact?.id); //функціонал для видалення
    setContact(null);
    await loadOrders();


  }

  return (
    <AdminLayout>
      <div className={s.contact}>
        <ContactInfoComponent contacts={filteredContact} onUpdate={() => setReload(!reload)} onCardClick={setContact} onEditButtonClick={handleEditButtonClick} />
        <ItemCountDisplayComponent text="Кількість заявок" number={filteredContact.length} icon={IconType.People} />
        <FilterContactControls contacts={orders} setFilteredContact={setFilteredContact} />
      </div>

      <div className={s.content_editor}>
        <MainPageHeading initialText="Заявки Contact Us" />

        {contact && <ContactCard deleteCard={deletContactUsCard} contact={contact} />}
      </div>
    </AdminLayout>
  );
};

export default contactUs;
