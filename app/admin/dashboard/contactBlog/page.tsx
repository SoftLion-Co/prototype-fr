"use client";

import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import ContactBlogInfoComponent from "../../components/contactBlog/ContactBlogInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";
import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";
import { AdminLayout } from "../AdminLayout";
import MainPageHeading from "../../components/MainPageHeading";
import FilterContactControls from "../../components/FilterButtons";
import orderBlogService from "../../../../services/order-blog-service";
import { ContactCard } from "../../components/contact/ContactCard";

export interface ContactBlogData {
  id: number;
  createdDateTime: string;
  email: string;
  shortDescription: string;
  username: string;
  orderType?: boolean;
}

const contactUs = () => {
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);
  const [filteredContact, setFilteredContact] = useState<ContactBlogData[]>([]);
  const [orders, setOrders] = useState<ContactBlogData[]>([]);
  const [reload, setReload] = useState<boolean>(false);
  const [activeContact, setActiveContact] = useState<ContactBlogData | null>(null);

  useEffect(() => {
    loadOrders();
  }, [reload]);

  useEffect(() => setFilteredContact(orders), [orders]);

  const handleEditButtonClick = () => {
    setIsContentEditorVisible(!isContentEditorVisible);
  };

  async function loadOrders(): Promise<void> {
    const ordersResponse = await orderBlogService.getAllOrderBlogs();

    setOrders(ordersResponse.result);
  }

  const deletCardBlog = async () => {
    //  await orderBlogService.deleteOrderBlog(activeContact?.id); //функціонал для видалення
    setActiveContact(null);
    await loadOrders();

  }

  return (
    <AdminLayout>
      <div className={s.contact}>
        <ContactBlogInfoComponent
          contacts={filteredContact}
          onCardClick={setActiveContact}
          onUpdate={() => setReload(!reload)}
          onEditButtonClick={handleEditButtonClick}
        />

        <ItemCountDisplayComponent
          text="Кількість заявок"
          number={orders.length}
          icon={IconType.People}
          searchResultCount={filteredContact.length}
        />
        <FilterContactControls contacts={orders} setFilteredContact={setFilteredContact} />
      </div>

      <div className={s.content_editor}>
        <MainPageHeading initialText="Заявки Blog" />
        {activeContact && <ContactCard deleteCard={deletCardBlog} contact={activeContact} />}
      </div>
    </AdminLayout>
  );
};

export default contactUs;
