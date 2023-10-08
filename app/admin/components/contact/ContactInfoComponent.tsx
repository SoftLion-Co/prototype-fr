import React, { useEffect, useState } from "react";
import s from "./ContactInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";
import { ContactData } from "../../dashboard/types";
import { SortMenuOption } from "../SortMenuComponent";
import { useDateFormat } from "@/hooks/useDateFormat";

interface Props {
  contacts: ContactData[];
  onCardClick: (ContactData: ContactData) => void;
  onEditButtonClick: () => void;
}

const ContactInfoComponent: React.FC<Props> = ({
  contacts,
  onCardClick,
  onEditButtonClick,
}) => {
  const {formatDMY} = useDateFormat();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredContacts, setFilteredContacts] = useState<ContactData[]>(contacts);

  useEffect(() => {
    setFilteredContacts(contacts.filter(contact =>
      contact.description.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm]);

  const sortOptions: SortMenuOption[] = [
    {
      name: "E-mail",
      action: (): void => {
        setFilteredContacts(
          [...filteredContacts].sort((contact1, contact2) => {
            return contact1.email.toLowerCase().localeCompare(contact2.email.toLowerCase());
          })
        );
      },
    },
    {
      name: "Дата",
      action: (): void => {
        setFilteredContacts([...filteredContacts]
          .sort((contact1, contact2) => contact1.sendData.getTime() - contact2.sendData.getTime()));
      },
    },
  ];

  const sortOrderChange = (): void => {
    setFilteredContacts([...filteredContacts].reverse());
  };

  return (
    <div className={s.user}>
      <div className={s.user__search}>
        <SearchInputComponent
          placeholderText="Для пошуку за заголовком"
          searchTerm={searchTerm}
          handleSearch={event => setSearchTerm(event.target.value)}
          onEditButtonClick={onEditButtonClick}
          sortOptions={sortOptions}
          sortOrderChange={sortOrderChange}
        />
      </div>

      <ul className={s.user__list}>
        {filteredContacts.map((contact, index) => (
          <li onClick={() => onCardClick(contact)} className={s.user__list__item} key={contact.id}>
            <div className={s.user__list__information} onClick={() => onCardClick(contact)}>
              <p>{index + 1}</p>
              <p>{contact.email}</p>
              <p>{formatDMY(contact.sendData)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfoComponent;
