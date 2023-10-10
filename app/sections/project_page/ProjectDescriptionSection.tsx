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
            <p className={s.article__time}>Time development: {time}</p>
            <p className={s.article__year}>Year: {year}</p>
            <p className={s.article__location}>Location: {location}</p>
          </div>
          <Image
            className={s.article__image}
            height={300}
            width={500}
            src={imgSrc}
            alt={title}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectDescriptionSection;
