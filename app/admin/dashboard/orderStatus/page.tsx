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
import { NewOrderStatus } from "../../components/orderStatus/NewOrderStatus";

export interface OrderStatusData {
  periodProgresses: string[];
  title: string;
  customerId: string;
  projectStatus: number;
  designer: boolean;
  development: boolean;
  security: boolean;
  id: string;
  createdDateTime: string;
  updatedDateTime: string;
}

const OrderStatus = () => {
  const [users, setUsers] = useState<OrderStatusData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [activeProject, setActiveProject] = useState<OrderStatusData>();
  const [isNewOrderStatusVisible, setIsNewOrderStatusVisible] = useState(false);
  const serchParams = useSearchParams();

  const handleEditButtonClick = (order: OrderStatusData): void => {
    if (activeProject?.id === order?.id) {
      setActiveProject(undefined);
      return;
    }
    setActiveProject(order);
    setIsNewOrderStatusVisible(false);
  };
  const handleNewOrderStatus = (): void => {
    setIsNewOrderStatusVisible(!isNewOrderStatusVisible);
    setActiveProject(undefined);
  }

  const loadOrderStatuses = async (): Promise<void> => {
    const getProjectByCustomerId = async () => {
      const customerProjects = await orderProjectStatusService.getOrderProjectStatusByCustomerId(serchParams?.get('author'));

      setUsers(customerProjects.result);
    }

    const getAllOrderProjectStatuses = async () => {
      const statuses = await orderProjectStatusService.getAllOrderProjectStatuses();

      setUsers(statuses.result)
    }

    if (serchParams?.get('author')) {
      getProjectByCustomerId();
    }
    else {
      getAllOrderProjectStatuses();
    }
  }

  useEffect(() => {
    loadOrderStatuses();
  }, []);

  useEffect(() => {
    const count = users.filter(user =>
      user.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).length;
    setSearchResultCount(count);
  }, [searchTerm, users]);

  const onDelete = async (id: string): Promise<void> => {
    // await orderProjectStatusService.deleteOrderProjectStatus(id);
    setActiveProject(undefined);
  }

  return (
    <AdminLayout>
      <div className={s.order}>
        <OrderStatusInfoComponent
          orders={users}
          searchTerm={searchTerm}
          onUpdate={loadOrderStatuses}
          setSearchTerm={setSearchTerm}
          onCardClick={handleEditButtonClick}
          onEditButtonClick={handleNewOrderStatus}
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
        {activeProject && <OrderCard project={(activeProject as OrderStatusData)} onDelete={onDelete} />}
        {isNewOrderStatusVisible && <NewOrderStatus />}
      </div>
    </AdminLayout>
  );
};

export default OrderStatus;
