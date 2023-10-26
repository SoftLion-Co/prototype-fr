import React, { useEffect, useState } from "react";
import s from "./OrderStatusInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";
import { OrderStatusData } from "../../dashboard/orderStatus/page";
import { SortMenuOption } from "../SortMenuComponent";
import { useDateFormat } from "@/hooks/useDateFormat";

interface Props {
  orders: OrderStatusData[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onCardClick: (order: OrderStatusData) => void;
  onEditButtonClick: (order: OrderStatusData) => void;
  onUpdate: () => void;
}

const OrderStatusInfoComponent: React.FC<Props> = ({
  orders,
  searchTerm,
  setSearchTerm,
  onUpdate,
  onCardClick,
  onEditButtonClick,
}) => {
  const {formatDMY} = useDateFormat();
  const [filteredOrders, setFilteredOrders] = useState<OrderStatusData[]>(orders.filter(order =>
    order.title.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  useEffect(() => {
    setFilteredOrders(orders)
  }, [orders])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSortOrderChange = (): void => {
    setFilteredOrders([...filteredOrders].reverse());
  }

  const sortOptions: SortMenuOption[] = [
    {
      name: "Назва",
      action: (): void => {
        setFilteredOrders(
          [...filteredOrders].sort((order1, order2) => {
            return order1.title.toLowerCase().localeCompare(order2.title.toLowerCase());
          })
        );
      },
    },
    {
      name: "Дата",
      action: (): void => {
        setFilteredOrders([...filteredOrders]
          .sort((order1, order2) => new Date(order1.createdDateTime).getTime() - new Date(order2.createdDateTime).getTime()));
      },
    },
  ];

  return (
    <div className={s.user}>
      <div className={s.user__search}>
        <SearchInputComponent
          placeholderText="Для пошуку за заголовком"
          searchTerm={searchTerm}
          onUpdate={onUpdate}
          handleSearch={handleSearch}
          onEditButtonClick={() => onEditButtonClick({} as OrderStatusData)}
          sortOptions={sortOptions}
          sortOrderChange={onSortOrderChange}
        />
      </div>

<div className={s.list__container}> 
      <ul className={s.user__list}>
        {filteredOrders.map((order, index) => (
          <li className={s.user__list__item} key={order.id} onClick={() => onCardClick(order)}>
            <div className={s.user__list__information}>
              <p>{index + 1}</p>
              <p>{order.title}</p>
              <p>{formatDMY(new Date(order.createdDateTime))}</p>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default OrderStatusInfoComponent;
