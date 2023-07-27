import React from "react";
import s from "./ProjectCardComponent.module.scss";
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import Link from "next/link";

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
          <p className={s.card__year}>{data.year}</p>
          <p className={s.card__author}>{data.author}</p>
        </div>
      </div>
      <Image
        className={s.card__image}
        src={data.image}
        alt="Project Image"
        width={16000}
        height={19000}
      />
      <div className={s.card__text}>
        <div className={s.card__subtext}>
          <h4 className={s.card__title}>{data.title}</h4>
          <p className={s.card__desc}>{data.description}</p>
        </div>
        <Link href="/">
          <PiArrowRightThin className={s.card__arrowIcon} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
