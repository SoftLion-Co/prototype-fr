import React from "react";
import s from "./OrderStatusInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";

interface ContactData {
  number: number;
  data: string;
  email: string;
  description: string;
  tell: number;
}

interface Props {
  users: ContactData[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onCardClick: (ContactData: ContactData) => void;
  onEditButtonClick: () => void;
}

const OrderStatusInfoComponent: React.FC<Props> = ({
  users,
  searchTerm,
  setSearchTerm,
  onCardClick,
  onEditButtonClick,
}) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={s.user}>
      <div className={s.user__search}>
        <SearchInputComponent
          placeholderText="Для пошуку за заголовком"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          onEditButtonClick={onEditButtonClick}
        />
      </div>

      <ul className={s.user__list}>
        {filteredUsers.map(user => (
          <li className={s.user__list__item} key={user.number}>
            <div className={s.user__list__information} onClick={() => onCardClick(user)}>
              <p>{user.number}</p>
              <p>{user.description}</p>
              <p>{user.data}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderStatusInfoComponent;
