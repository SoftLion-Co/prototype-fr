import React from "react";
import s from "./BlogRolledCardComponent.module.scss";

interface BlogRolledCardProps {
  imageSrc: string;
  title: string;
}

const BlogRolledCardComponent: React.FC<BlogRolledCardProps> = (data) => {
  const { imageSrc, title } = data;
  return (
    <div className={s.blogCard}>
      <img className={s.blogCard__image} src={imageSrc} alt="Softlon image" />
      <div className={s.blogCard__line}></div>
      <p className={s.blogCard__paragraph}>{title}</p>
    </div>
  );
};

export default BlogRolledCardComponent;
