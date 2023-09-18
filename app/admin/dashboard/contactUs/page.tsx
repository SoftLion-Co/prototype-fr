"use client";

import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import classNames from "classnames";

import PanelNavigationComponent from "@/app/admin/components/PanelNavigationComponent";
import MainPageHeading from "@/app/admin/components/MainPageHeading";
import BlogInfoComponent from "@/app/admin/components/blog/BlogInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";

import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";

const contactUs = () => {
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
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);

  const handleEditButtonClick = () => {
    setIsContentEditorVisible(!isContentEditorVisible);
  };

  useEffect(() => {
    const count = users.filter((user) =>
      user.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).length;
    setSearchResultCount(count);
  }, [searchTerm, users]);

  return (
    <div className={classNames(s.container, s.container_admin)}>
      <div className={s.panel__container}>
        <PanelNavigationComponent />
      </div>

      <div className={s.dashboard__container}>
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
              text="Кількість заявок"
              number={users.length}
              icon={IconType.People}
              searchResultCount={searchResultCount}
            />
          </div>
        </div>
      </div>

      {/* <div className={s.main__heading}>
        <MainPageHeading initialText="Заявки Contact Us" />
      </div> */}
    </div>
  );
};

export default contactUs;
