import React from "react";
import s from "./ProjectCardComponent.module.scss";
import Image from "next/image";

interface ProjectData {
  data: {
    id: number;
    image: string;
    title: string;
    customer: string;
    year: string;
    author: string;
    description: string;
  };
}

const ProjectCardComponent: React.FC<ProjectData> = ({ data }) => {
  return (
    <div className={s.card}>
      <div className={s.card__main}>
        <Image
          className={s.card__image}
          src={data.image}
          alt="Project Image"
          width={16000}
          height={19000}
        />
        <h4 className={s.card__title}>{data.title}</h4>
      </div>
      <div className={s.card__submain}>
        <div className={s.card__subinfo}>
          <p className={s.card__customer}>{data.customer}</p>
          <p className={s.card__year}>{data.year}</p>
          <p className={s.card__author}>{data.author}</p>
        </div>
        <div className={s.card__subdesc}>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
