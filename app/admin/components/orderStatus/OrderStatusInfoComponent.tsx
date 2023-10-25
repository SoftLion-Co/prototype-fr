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
  onEditButtonClick: () => void;
}

const OrderStatusInfoComponent: React.FC<Props> = ({
  orders,
  searchTerm,
  setSearchTerm,
  onCardClick,
  onEditButtonClick,
}) => {
  const {formatDMY} = useDateFormat();
  const [filteredOrders, setFilteredOrders] = useState<OrderStatusData[]>(orders.filter(order =>
    order.description.toLowerCase().includes(searchTerm.toLowerCase())
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
            return order1.description.toLowerCase().localeCompare(order2.description.toLowerCase());
          })
        );
      },
    },
    {
      name: "Дата",
      action: (): void => {
        setFilteredOrders([...filteredOrders]
          .sort((order1, order2) => new Date(order1.data).getTime() - new Date(order2.data).getTime()));
      },
    },
  ];

  return (
    <div className={s.user}>
      <div className={s.user__search}>
        <SearchInputComponent
          placeholderText="Для пошуку за заголовком"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          onEditButtonClick={onEditButtonClick}
          sortOptions={sortOptions}
          sortOrderChange={onSortOrderChange}
        />
      </div>

      <ul className={s.user__list}>
        {filteredOrders.map((order, index) => (
          <li className={s.user__list__item} key={order.number}>
            <div className={s.user__list__information} onClick={() => onCardClick(order)}>
              <p>{index + 1}</p>
              <p>{order.description}</p>
              <p>{formatDMY(new Date(order.data))}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderStatusInfoComponent;
