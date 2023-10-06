import React from "react";
import s from "./ClientsInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";

import { ClientData } from "../../dashboard/types";
import { useDateFormat } from "@/hooks/useDateFormat";

interface Props {
  clients: ClientData[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onCardClick: (ContactData: ClientData) => void;
  onEditButtonClick: () => void;
}

const ClientsInfoComponent: React.FC<Props> = ({
  clients,
  searchTerm,
  setSearchTerm,
  onCardClick,
  onEditButtonClick,
}) => {
  const { formatDMY } = useDateFormat();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

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
        {clients.map((client, index) => (
          <li onClick={() => onCardClick(client)} className={s.user__list__item} key={client.id}>
            <div className={s.user__list__information}>
              <p>{index + 1}</p>
              <p>{client.name}</p>
              <p>{formatDMY(client.registerDate)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsInfoComponent;
