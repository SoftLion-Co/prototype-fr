import React from "react";
import s from "./ProjectCardComponent.module.scss";
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import Link from "next/link";

interface ProjectData {
  id: number;
  image: string;
  title: string;
  customer: string;
  year: string;
  author: string;
  description: string;
}

const ProjectCardComponent: React.FC<{ data: ProjectData }> = ({ data }) => {
  return (
    <div className={s.card}>
      <div className={s.card__info}>
        <p className={s.card__customer}>{data.customer}</p>
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
        <Link href={`/projects/${data.id}`}>
          <PiArrowRightThin className={s.card__arrowIcon} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
