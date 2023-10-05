import React from "react";
import s from "./ContactInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";

import { ContactData } from "../../dashboard/types";

interface Props {
  contacts: ContactData[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onCardClick: (ContactData: ContactData) => void;
  onEditButtonClick: () => void;
}

const ContactInfoComponent: React.FC<Props> = ({
  contacts,
  searchTerm,
  setSearchTerm,
  onCardClick,
  onEditButtonClick,
}) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.description.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredContacts.map((contact, index) => (
          <li onClick={() => onCardClick(contact)} className={s.user__list__item} key={contact.id}>
            <div className={s.user__list__information} onClick={() => onCardClick(contact)}>
              <p>{index + 1}</p>
              <p>{contact.email}</p>
              <p>{contact.sendData.toString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfoComponent;
