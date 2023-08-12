import React from "react";
import s from "@/app/sections/blog_page/BlogsSection.module.scss";

interface ButtonUploadBlogsProps {
  onClick: () => void;
}

const ButtonUploadBlogs: React.FC<ButtonUploadBlogsProps> = ({ onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      Load More
    </button>
  );
};

export default ButtonUploadBlogs;
