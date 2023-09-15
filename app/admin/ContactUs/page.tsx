"use client";

import React, { useState } from "react";
import s from "./page.module.scss"
import ContactUs from "../components/FormContact"; // Переконайтеся, що шлях правильний
import Blogs, { BlogData } from "../dashboard/page"; // Імпортуємо компонент Blogs і BlogData

const ContactUsPage: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogData | null>(null);
  

  const handleBlogSelect = (blogData: BlogData) => {
    setSelectedBlog(blogData);
  };

  return (
    <div className={s.page_contact}>
      <Blogs onBlogSelect={handleBlogSelect}/>
      <div>
      {selectedBlog && <ContactUs blogData={selectedBlog} />}
      </div>
    </div>
  );
};

export default ContactUsPage;
