import React, { useEffect, useState } from "react";
import s from "./ContactBlogInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";
import { SortMenuOption } from "../SortMenuComponent";
import { useDateFormat } from "@/hooks/useDateFormat";
import { ContactBlogData } from "../../dashboard/contactBlog/page";

interface Props {
  contacts: ContactBlogData[];
  onCardClick: (ContactData: ContactBlogData) => void;
  onEditButtonClick: () => void;
  onUpdate: () => void;
}

const ContactBlogInfoComponent: React.FC<Props> = ({
  contacts,
  onUpdate,
  onCardClick,
  onEditButtonClick,
}) => {
  const { formatDMY } = useDateFormat();
  const [filteredContacts, setFilteredContacts] = useState<ContactBlogData[]>(contacts);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts])

  useEffect(() => {
    setFilteredContacts(contacts.filter(contact =>
      contact.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())));
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
          .sort((contact1, contact2) => new Date(contact1.createdDateTime).getTime() - new Date(contact2.createdDateTime).getTime()));
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
          showCreateButton={false}
          onUpdate={onUpdate}
          sortOrderChange={sortOrderChange}
        />
      </div>
      <div className={s.list__container}>
        <ul className={s.user__list}>
          {filteredContacts.map((contact, index) => (
            <li className={s.user__list__item} key={contact.id} onClick={() => onCardClick(contact)}>
              <div className={s.user__list__information}>
                <p>{index + 1}</p>
                <p>{contact.shortDescription}</p>
                <p>{formatDMY(new Date(contact.createdDateTime))}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactBlogInfoComponent;
