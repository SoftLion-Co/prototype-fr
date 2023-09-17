'use client';

import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import ContactUs from "../components/FormContact"; 
import ContactInfoComponent from "../components/contact/ContactInfoComponent";
import ItemCountDisplayComponent from "../components/ItemCountDisplayComponent";
import PanelNavigationComponent from "../components/PanelNavigationComponent";
import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";

const ContactUsPage: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogData | null>(null);

  const handleBlogSelect = (blogData: BlogData) => {
    setSelectedBlog(blogData);
  };

  interface BlogsProps {
    onBlogSelect: (blogData: BlogData) => void;
  }
  
  interface BlogData {
    number: number;
    title: string;
    data: string;
    rating: string;
    email: string;
    description: string;
    tell: number;
  }
  
  
  const users: BlogData[] = [
      {
        number: 1,
        title: "Blog 1",
        data: "01.07.2023",
        rating: "5.0",
        tell: +380,
        email: "email1@example.com",
        description: "Description 1",
      },
      {
        number: 2,
        title: "Blog 2",
        data: "01.07.2023",
        rating: "5.0",
        tell: +380,
        email: "email2@example.com",
        description: "Description 2",
      },
      {
        number: 3,
        title: "Blog 3",
        data: "01.07.2023",
        rating: "5.0",
        tell: +380,
        email: "email2@example.com",
        description: "Description 2",
      },
      {
        number: 4,
        title: "Blog 4",
        data: "01.07.2023",
        rating: "5.0",
        tell: +380,
        email: "email2@example.com",
        description: "Description 2",
      },
      {
        number: 5,
        title: "Blog 5",
        data: "01.07.2023",
        rating: "4.5",
        tell: +380,
        email: "email3@example.com",
        description: "Description 3",
      },
      {
        number: 6,
        title: "Blog 6",
        data: "02.07.2023",
        rating: "4.2",
        tell: +380,
        email: "email4@example.com",
        description: "Description 4",
      },
      {
        number: 7,
        title: "Blog 7",
        data: "03.07.2023",
        rating: "4.8",
        tell: +380,
        email: "email5@example.com",
        description: "Description 5",
      },
      {
        number: 8,
        title: "Blog 8",
        data: "04.07.2023",
        rating: "3.9",
        tell: +380,
        email: "email6@example.com",
        description: "Description 6",
      },
      {
        number: 9,
        title: "Blog 9",
        data: "05.07.2023",
        rating: "4.0",
        tell: +380,
        email: "email7@example.com",
        description: "Description 7",
      },
      {
        number: 10,
        title: "Blog 10",
        data: "06.07.2023",
        rating: "4.7",
        tell: +380,
        email: "email8@example.com",
        description: "Description 8",
      },
      {
        number: 11,
        title: "Blog 11",
        data: "07.07.2023",
        rating: "4.9",
        tell: +380,
        email: "email9@example.com",
        description: "Description 9",
      },
      {
        number: 12,
        title: "Blog 12",
        data: "08.07.2023",
        rating: "3.5",
        tell: +380,
        email: "email10@example.com",
        description: "Description 10",
      },
      {
        number: 13,
        title: "Blog 13",
        data: "09.07.2023",
        rating: "4.6",
        tell: +380,
        email: "email11@example.com",
        description: "Description 11",
      },
      {
        number: 14,
        title: "Blog 14",
        data: "10.07.2023",
        rating: "4.3",
        tell: +380,
        email: "email12@example.com",
        description: "Description 12",
      },
      {
        number: 15,
        title: "Blog 15",
        data: "11.07.2023",
        rating: "4.1",
        tell: +380,
        email: "email13@example.com",
        description: "Description 13",
      }
  ];
  
  const Blogs: React.FC<BlogsProps> = ({ onBlogSelect }) => {
    const links = [{ title: "Blog", href: "#" }];
  
    const itemCountData = {
      text: "Кількість заявок",
      number: users.length,
      icon: IconType.People,
    };
  
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResultCount, setSearchResultCount] = useState(0);
  
    useEffect(() => {
      const count = users.filter((user) =>
        user.title.toLowerCase().includes(searchTerm.toLowerCase())
      ).length;
      setSearchResultCount(count);
    }, [searchTerm, users]);
  
    const handleCardClick = (blogData: BlogData) => {
      if (onBlogSelect) {
        onBlogSelect(blogData);
      }
    };

    return (
      <div className={s.page_contact}>
        <div className={s.dashboard__container}>
          <div className={s.panel__container}>
            <PanelNavigationComponent />
          </div>

          <div className={s.page__container}>
            <div className={s.user__container}>
              <ContactInfoComponent
                users={users}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onCardClick={handleCardClick}
              />
            </div>
            <div>
              <ItemCountDisplayComponent
                text="Кількість заявок"
                number={users.length}
                icon={IconType.People}
                searchResultCount={searchResultCount}
              />
            </div>
          </div>
        </div>
        <div>
          {selectedBlog && <ContactUs blogData={selectedBlog} />}
        </div>
      </div>
    );
  };
  
  return <Blogs onBlogSelect={handleBlogSelect} />;
};

export default ContactUsPage;
