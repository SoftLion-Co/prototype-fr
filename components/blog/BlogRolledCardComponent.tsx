import React from "react";
import s from "./BlogRolledCardComponent.module.scss";
import { BlogInterface } from "./BlogInteface";
import blogs from "@/data/blog/blogs_data.json";

const BlogRolledCardComponent: React.FC<{ id: string }> = ({ id }) => {
  const blogData: { [key: string]: BlogInterface } = blogs;
  const { imageSrc, title } = blogData[id];

  return (
    <div className={s.blogCard}>
      <img className={s.blogCard__image} src={imageSrc} alt="Softlon image" />
      <div className={s.blogCard__line}></div>
      <p className={s.blogCard__paragraph}>{title}</p>
    </div>
  );
};

export default BlogRolledCardComponent;
