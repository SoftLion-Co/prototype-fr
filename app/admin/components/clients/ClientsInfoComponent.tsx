import React, { useEffect, useState } from "react";
import s from "./ClientsInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";

import { ClientData } from "../../dashboard/types";
import { useDateFormat } from "@/hooks/useDateFormat";
import { SortMenuOption } from "../SortMenuComponent";

interface Props {
  clients: ClientData[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onCardClick: (ContactData: ClientData) => void;
  onEditButtonClick: () => void;
  onUpdateClients: () => void;
}

const ClientsInfoComponent: React.FC<Props> = ({
  clients,
  searchTerm,
  setSearchTerm,
  onCardClick,
  onEditButtonClick,
  onUpdateClients,
}) => {
  const { formatDMY } = useDateFormat();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const [filteredClients, setfilteredClients] = useState<ClientData[]>(clients);

  useEffect(()=>{
    setfilteredClients(clients);
  }, [clients])

  const sortOptions: SortMenuOption[] = [
    {
      name: "Ім’я",
      action: () => {
        setfilteredClients(
          [...filteredClients].sort((client1, client2) => {
            return client1.firstName.toLowerCase().localeCompare(client2.firstName.toLowerCase());
          })
        );
      },
    },
   
    {
      name: "Дата",
      action: () => {
        setfilteredClients([...filteredClients].sort((client1, client2) => new Date(client1.createdDateTime).getTime() - new Date(client2.createdDateTime).getTime()));
      },
    },
  ];

  const sortOrderChange = () => {
    setfilteredClients([...filteredClients].reverse());
  };

  return (
    <div className={s.user}>
      <div className={s.user__search}>
        <SearchInputComponent
          placeholderText="Для пошуку за заголовком"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          onEditButtonClick={onEditButtonClick}
          sortOptions={sortOptions}
          sortOrderChange={sortOrderChange}
          onUpdate={onUpdateClients}
        />
      </div>

      <ul className={s.user__list}>
        {filteredClients.map((client, index) => (
          <li onClick={() => onCardClick(client)} className={s.user__list__item} key={client.id}>
            <div className={s.user__list__information}>
              <p>{index + 1}</p>
              <p>{client.firstName} {client.lastName}</p>
              <p>{formatDMY(new Date(client.createdDateTime))}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsInfoComponent;
