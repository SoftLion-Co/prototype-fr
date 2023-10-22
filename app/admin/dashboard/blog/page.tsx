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
import { BlogData } from "../types";
import blogService from "@/services/blog-service";
import { useRouter } from "next/navigation";

const Blogs = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false);
  const [activeBlog, setActiveBlog] = useState<BlogData | null>(null)
  const [refreshBlogs, setRefreshBlogs] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const handleEditButtonClick = (blog: BlogData | null) => {
    setIsContentEditorVisible(true);
    setActiveBlog(blog);
  };


  const getBlogs = async () => {
    const allBlogs = await blogService.getAllBlogs();
    setBlogs(allBlogs.result);
  };
  useEffect(() => {
    getBlogs();
  }, [refreshBlogs]);

  // useEffect(() => {
  //   const count = blogs.filter((blog) => blog.title.toLowerCase().includes(searchTerm.toLowerCase())).length;
  //   setSearchResultCount(count);
  // }, [searchTerm, blogs]);

  return (
    <>
      <AdminLayout>
        <div className={s.blog}>
          <BlogInfoComponent blogs={blogs} onEditButtonClick={handleEditButtonClick} onUpdateBlogs={() => setRefreshBlogs(!refreshBlogs)} />

          <ItemCountDisplayComponent
            text="Кількість заявок"
            number={blogs.length}
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
