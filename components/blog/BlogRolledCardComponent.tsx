import React from "react";
import s from "./BlogRolledCardComponent.module.scss";
import Image from "next/image";

interface BlogRolledCardProps {
  imageSrc: string;
  title: string;
}

const BlogRolledCardComponent: React.FC<BlogRolledCardProps> = (data) => {
  const { imageSrc, title } = data;
  return (
    <div className={s.blogCard}>
      <Image
        className={s.blogCard__image}
        height={300}
        width={300}
        src={imageSrc}
        alt="Softlon image"
      />
      <div className={s.blogCard__line}></div>
      <p className={s.blogCard__paragraph}>{title}</p>
    </div>
  );
};

export default BlogRolledCardComponent;
