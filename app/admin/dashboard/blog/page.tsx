"use client";

import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import MainPageHeading from "@/app/admin/components/MainPageHeading";
import BlogInfoComponent, { BlogData } from "@/app/admin/components/blog/BlogInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";
import ContentEditor from "@/app/admin/components/blog/ContentEditor";
import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";
import { AdminLayout } from "../AdminLayout";
import { ConfirmDeleteModal } from "../../modals/ConfirmDeleteModal";

const Blogs = () => {
  const users: BlogData[] = [
    {
      number: 1,
      title: "Alog 1",
      data: "Fri Oct 06 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 2,
      title: "Dlog 2",
      data: "Thu Oct 12 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 3,
      title: "Blog 3",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 4,
      title: "Blog 4",
      data: "Thu Oct 26 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 5,
      title: "Clog 5",
      data: "Thu Nov 09 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 6,
      title: "Blog 5",
      data: "Thu Nov 02 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 7,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 8,
      title: "Flog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 9,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 10,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 11,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 12,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 13,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 14,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 4.5,
    },
    {
      number: 15,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 16,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 2.5,
    },
    {
      number: 17,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 1.0,
    },
    {
      number: 18,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
    {
      number: 19,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 3.0,
    },
    {
      number: 20,
      title: "Blog 5",
      data: "Thu Oct 05 2023 12:09:50 GMT+0300",
      rating: 5.0,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false);
  const [activeBlog, setActiveBlog] = useState<BlogData | null>(null)

  const handleEditButtonClick = (blog: BlogData | null) => {
    setIsContentEditorVisible(true);
    setActiveBlog(blog);
  };

  useEffect(() => {
    const count = users.filter((user) => user.title.toLowerCase().includes(searchTerm.toLowerCase())).length;
    setSearchResultCount(count);
  }, [searchTerm, users]);

  return (
    <>
      <AdminLayout>
        <div className={s.blog}>
          <BlogInfoComponent users={users} onEditButtonClick={handleEditButtonClick} />

          <ItemCountDisplayComponent
            text="Кількість заявок"
            number={users.length}
            icon={IconType.People}
            searchResultCount={searchResultCount}
          />
        </div>

        <div className={s.content_editor}>
          <MainPageHeading initialText="Blog" />

          {isContentEditorVisible && <ContentEditor blog={activeBlog}/>}
        </div>
      </AdminLayout>

      <ConfirmDeleteModal isOpen={isConfirmDeleteModalOpen} onClose={() => setIsConfirmDeleteModalOpen(false)} fnc={() => {}} />
    </>
  );
};

export default Blogs;
