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
    <div className={s.card}>
      <div className={s.card__box}>
        <Image
          className={s.card__image}
          height={300}
          width={300}
          src={imageSrc}
          alt="Softlon image"
        />
      </div>

      <div className={s.card__line}></div>
      <p className={s.card__paragraph}>{title}</p>
    </div>
  );
};

export default BlogRolledCardComponent;
