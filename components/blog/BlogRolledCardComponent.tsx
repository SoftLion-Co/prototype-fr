import React, { FC } from "react";
import s from "./BlogRolledCardComponent.module.scss";
import Image from "next/image";

interface BlogRolledCardProps {
  imageSrc: string;
  title: string;
}

const BlogRolledCardComponent: FC<BlogRolledCardProps> = (data) => {
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
      <h3 className={s.card__title}>{title}</h3>
    </div>
  );
};

export default BlogRolledCardComponent;
