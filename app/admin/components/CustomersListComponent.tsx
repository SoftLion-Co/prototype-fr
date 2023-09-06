"use client";

import { useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import s from "./CustomersListComponent.module.scss";
import UserInfoComponent, { User } from "./blog/UserInfoComponent";
import customerService from "@/services/customer-service";
import ItemCountDisplayComponent from "./ItemCountDisplayComponent";

enum FilterType {
  NEW,
  VERIFIED,
  DECLINED,
}

const users1 = [
  {
    number: 1,
    title: "User 1",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 2,
    title: "User 2",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 3,
    title: "User 3",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 4,
    title: "User 4",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 5,
    title: "User 5",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 6,
    title: "User 6",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 7,
    title: "User 7",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 8,
    title: "User 8",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 9,
    title: "User 9",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 10,
    title: "User 10",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 11,
    title: "User 11",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 12,
    title: "User 12",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 13,
    title: "User 13",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 14,
    title: "User 14",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 15,
    title: "User 15",
    data: "01.07.2023",
    rating: "5.0",
  },
  {
    number: 16,
    title: "User 16",
    data: "01.07.2023",
    rating: "5.0",
  },
];

const ApplicationList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchCustomers = async (): Promise<void> => {
      try {
        // const customers = await customerService.getAllCustomers();
        setUsers(users1); //при підключенні до беку замінити на customers
        setFilteredUsers(users1);
      } catch (error) {}
    };
    fetchCustomers();
  }, []);

  const filterByVerification = (type: FilterType): void => {
    switch (type) {
      case FilterType.NEW:
        setFilteredUsers(users.filter((user) => user.verified === undefined));
        break;
      case FilterType.VERIFIED:
        setFilteredUsers(users.filter((user) => user.verified));
        break;
      case FilterType.DECLINED:
        setFilteredUsers(users.filter((user) => user.verified === false));
        break;
    }
  };

  return (
    <div>
      <UserInfoComponent users={filteredUsers} />
      <ItemCountDisplayComponent
        text="Кількість користувачів"
        icon="@/app/admin/images/quantity/peopleVector.svg"
        number={filteredUsers.length}
      />
      <div>
        <ActionButton onClick={() => filterByVerification(FilterType.NEW)} text="Нові заявки" />
        <ActionButton onClick={() => filterByVerification(FilterType.VERIFIED)} text="Прийняті заявки" />
        <ActionButton onClick={() => filterByVerification(FilterType.DECLINED)} text="Відхилені заявки" />
      </div>
    </div>
  );
};

export default ApplicationList;
