import React, { useEffect, useState } from "react";
import s from "./ContactBlogInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";
import { SortMenuOption } from "../SortMenuComponent";
import { useDateFormat } from "@/hooks/useDateFormat";

interface ContactData {
  number: number;
  data: string;
  email: string;
  description: string;
  tell: number;
}

interface Props {
  contacts: ContactData[];
  onCardClick: (ContactData: ContactData) => void;
  onEditButtonClick: () => void;
}

const ContactBlogInfoComponent: React.FC<Props> = ({
  contacts,
  onCardClick,
  onEditButtonClick,
}) => {
  const {formatDMY} = useDateFormat();
  const [filteredContacts, setFilteredContacts] = useState<ContactData[]>(contacts);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

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
          .sort((contact1, contact2) => new Date(contact1.data).getTime() - new Date(contact2.data).getTime()));
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
          handleSearch={handleSearch}
          onEditButtonClick={onEditButtonClick}
          sortOptions={sortOptions}
          sortOrderChange={sortOrderChange}
        />
      </div>

      <ul className={s.user__list}>
        {filteredContacts.map((contact, index) => (
          <li className={s.user__list__item} key={contact.number}>
            <div className={s.user__list__information} onClick={() => onCardClick(contact)}>
              <p>{index + 1}</p>
              <p>{contact.description}</p>
              <p>{formatDMY(new Date(contact.data))}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactBlogInfoComponent;
