"use client";

import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import OrderStatusInfoComponent from "../../components/orderStatus/OrderStatusInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";
import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";
import { AdminLayout } from "../AdminLayout";
import MainPageHeading from "../../components/MainPageHeading";
import { OrderCard } from "../../components/orderStatus/OrderStatusCard";
import { useSearchParams } from "next/navigation";
import orderProjectStatusService from "../../../../services/order-project-status-service";

export interface OrderStatusData {
  number: number;
  data: string;
  email: string;
  description: string;
  tell: number;
}

const OrderStatus = () => {
  const mockUsers: OrderStatusData[] = [
    {
      number: 2,
      data: "Fri Oct 06 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email2@example.com",
      description: "Description 2",
    },
    {
      number: 5,
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email3@example.com",
      description: "Description 3",
    },
    {
      number: 1,
      data: "Sat Oct 07 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email1@example.com",
      description: "Description 1",
    },
    {
      number: 12,
      data: "Sun Oct 01 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email10@example.com",
      description: "Description 10",
    },
    {
      number: 6,
      data: "Sun Oct 08 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email4@example.com",
      description: "Description 4",
    },
    {
      number: 7,
      data: "Wed Oct 04 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email5@example.com",
      description: "Description 5",
    },
    {
      number: 8,
      data: "Mon Oct 09 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email6@example.com",
      description: "Description 6",
    },
    {
      number: 15,
      data: "Sat Oct 14 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email13@example.com",
      description: "Description 13",
    },
    {
      number: 9,
      data: "Tus Oct 03 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email7@example.com",
      description: "Description 7",
    },
    {
      number: 10,
      data: "Tus Oct 10 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email8@example.com",
      description: "Description 8",
    },
    {
      number: 11,
      data: "Mon Oct 02 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email9@example.com",
      description: "Description 9",
    },
    {
      number: 13,
      data: "Wed Oct 11 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email11@example.com",
      description: "Description 11",
    },
    {
      number: 14,
      data: "Thu Oct 12 2023 12:09:50 GMT+0300",
      tell: +380,
      email: "email12@example.com",
      description: "Description 12",
    },
  ];

  const [users, setUsers] = useState<OrderStatusData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);
  const serchParams = useSearchParams();

  const handleEditButtonClick = () => {
    setIsContentEditorVisible(!isContentEditorVisible);
  };

  useEffect(() => {
    const getProjectByCustomerId = async () => {
      const customerProjects = await orderProjectStatusService.getOrderProjectStatusByCustomerId(serchParams.get('author'));

      setUsers(customerProjects.result);
    }

if (serchParams.get('author')){
  getProjectByCustomerId();
} 
else {
  setUsers(mockUsers)
}
  }, []);

  useEffect(() => {
    const count = users.filter(user =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    ).length;
    setSearchResultCount(count);
  }, [searchTerm, users]);

  return (
    <AdminLayout>
      <div className={s.order}>
        <OrderStatusInfoComponent
          orders={users}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onCardClick={() => {}}
          onEditButtonClick={handleEditButtonClick}
        />

        <ItemCountDisplayComponent
          text="Кількість замовлень"
          number={users.length}
          icon={IconType.People}
          searchResultCount={searchResultCount}
        />
      </div>

      <div className={s.order_editor}>
        <MainPageHeading initialText="Статус замовлення" />
        {isContentEditorVisible && <OrderCard project = {{}} />}
      </div>
    </AdminLayout>
  );
};

export default OrderStatus;
