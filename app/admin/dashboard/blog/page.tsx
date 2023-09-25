"use client";

import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import MainPageHeading from "@/app/admin/components/MainPageHeading";
import BlogInfoComponent from "@/app/admin/components/blog/BlogInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";
import ContentEditor from "@/app/admin/components/blog/ContentEditor";
import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";
import { AdminLayout } from "../AdminLayout";
import { ConfirmDeleteModal } from "../../modals/ConfirmDeleteModal";

const Blogs = () => {
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
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 7,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 8,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 9,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 10,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 11,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 12,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 13,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 14,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 15,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 16,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 17,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 18,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 19,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
    {
      number: 20,
      title: "Blog 5",
      data: "01.07.2023",
      rating: "5.0",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(true);

  const handleEditButtonClick = () => {
    setIsContentEditorVisible(!isContentEditorVisible);
  };

  useEffect(() => {
    const count = users.filter(user =>
      user.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).length;
    setSearchResultCount(count);
  }, [searchTerm, users]);

  return (
    <>
      <AdminLayout>
        <div className={s.blog}>
          <BlogInfoComponent users={users} onEditButtonClick={handleEditButtonClick} />

          <ItemCountDisplayComponent
            text="Кількість блогів"
            number={users ? users.length : 0}
            icon={IconType.People}
          />
        </div>

        <div className={s.content_editor}>
          <MainPageHeading initialText="Blog" />

          <ContentEditor />
        </div>
      </AdminLayout>

      <ConfirmDeleteModal
        isOpen={isConfirmDeleteModalOpen}
        onClose={() => setIsConfirmDeleteModalOpen(false)}
        fnc={() => {}}
      />
    </>
  );
};

export default Blogs;
