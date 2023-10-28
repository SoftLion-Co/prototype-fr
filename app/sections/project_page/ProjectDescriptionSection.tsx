import React, { FC } from "react";
import Image from "next/image";
import s from "./ProjectDescriptionSection.module.scss";

interface ProjectDescriptionData {
  title: string;
  description: string;
  period: string;
  dateYear: number;
  country: string;
  imgSrc: string;
}

const ProjectDescriptionSection: FC<{ data: ProjectDescriptionData }> = ({
  data,
}) => {
  const { title, description, period, dateYear, country, imgSrc } = data;

  return (
    <section>
      <div className={s.container}>
        <div className={s.project}>
          <div className={s.article}>
            <h1 className={s.article__title}>{title}</h1>
            <p className={s.article__description}>{description}</p>
            <p className={s.article__time}>Time development: {period}</p>
            <p className={s.article__year}>Year: {dateYear}</p>
            <p className={s.article__location}>Location: {country}</p>
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
