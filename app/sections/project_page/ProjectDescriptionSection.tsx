import React, { FC } from "react";
import Image from "next/image";
import s from "./ProjectDescriptionSection.module.scss";

interface ProjectDescriptionData {
  title: string;
  description: string;
  time: string;
  year: number;
  location: string;
  imgSrc: string;
}

const ProjectDescriptionSection: FC<{ data: ProjectDescriptionData }> = ({
  data,
}) => {
  const { title, description, time, year, location, imgSrc } = data;

  return (
    <section>
      <div className={s.container}>
        <div className={s.project}>
          <div className={s.article}>
            <h1 className={s.article__title}>{title}</h1>
            <p className={s.article__description}>{description}</p>
            <div className={s.article__info}>
              <p className={s.article__text}>Time development: {time}</p>
              <p className={s.article__text}>Year: {year}</p>
              <p className={s.article__text}>Location: {location}</p>
            </div>
          </div>
          <Image
            className={s.article__image}
            height={900}
            width={1500}
            src={imgSrc}
            alt={title}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectDescriptionSection;
