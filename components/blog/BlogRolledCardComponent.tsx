import React from "react";
import s from "./BlogRolledCardComponent.module.scss";

interface BlogRolledCardProps {
  imageUrl: string;
  title: string;
}

const BlogRolledCardComponent: React.FC<BlogRolledCardProps> = ({
  imageUrl,
  title,
}) => {
  return (
    <div className={s.blogCard}>
      <div
        className={s.blogCard__image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={s.blogCard__line}></div>
      <p className={s.blogCard__paragraph}>{title}</p>
    </div>
  );
};

export default BlogRolledCardComponent;
