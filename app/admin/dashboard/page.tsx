"use client";

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import s from "./page.module.scss";

import PanelNavigationComponent from "@/app/admin/components/PanelNavigationComponent";
import BlogInfoComponent from "@/app/admin/components/blog/BlogInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";
import ContentEditor from "@/app/admin/components/blog/ContentEditor";

import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";

const Blogs = () => {
  const links = [{ title: "Blog", href: "#" }];

  const users = [
    {
      number: 1,
      title: "Blog 1",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 2,
      title: "Blog 2",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 3,
      title: "Blog 3",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 4,
      title: "Blog 4",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 5,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 6,
      title: "Blog 6",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 7,
      title: "Blog 7",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 8,
      title: "Blog 8",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 9,
      title: "Blog 9",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 10,
      title: "Blog 10",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 11,
      title: "Blog 11",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 12,
      title: "Blog 12",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 13,
      title: "Blog 13",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 14,
      title: "Blog 14",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 15,
      title: "Blog 15",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 16,
      title: "Blog 16",
      data: "01.07.2023",
      rating: "5.0",
    },
  ];

  const itemCountData = {
    text: "Кількість блогів",
    number: users.length,
    icon: IconType.People,
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);

  const handleEditButtonClick = () => {
    console.log("Edit button clicked");
    setIsContentEditorVisible(!isContentEditorVisible); // Змінюємо стан видимості
  };

  useEffect(() => {
    const count = users.filter((user) =>
      user.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).length;
    setSearchResultCount(count);
  }, [searchTerm, users]);

  return (
    <div className={classNames(s.container, s.container_admin)}>
      <div className={s.dashboard__container}>
        <div className={s.panel__container}>
          <PanelNavigationComponent />
        </div>

        <div className={s.page__container}>
          <div className={s.user__container}>
            <BlogInfoComponent
              users={users}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onEditButtonClick={handleEditButtonClick}
            />
          </div>
          <div>
            <ItemCountDisplayComponent
              text="Кількість блогів"
              number={users.length}
              icon={IconType.People}
              searchResultCount={searchResultCount}
            />
          </div>
        </div>
      </div>

      <div>{isContentEditorVisible && <ContentEditor />}</div>
    </div>
  );
};

export default Blogs;
