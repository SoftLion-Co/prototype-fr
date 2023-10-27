import React from "react";
import s from "./ProjectMobileCardComponent.module.scss";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";

interface ProjectData {
  id: number;
  image: string;
  title: string;
  customer: string;
  year: string;
  author: string;
  description: string;
  technology: string[];
}

const ProjectMobileCardComponent: React.FC<{ data: ProjectData }> = ({
  data,
}) => {
  return (
    <div className={s.card}>
      <Link href={`/projects/${data.id}`} className={s.card__link}>
        <div className={s.card__main}>
          <Image
            className={s.card__image}
            src={data.image}
            alt="Project Image"
            width={16000}
            height={19000}
          />
          <h3 className={s.card__title}>{data.title}</h3>
        </div>
        <div className={s.card__submain}>
          <div className={s.card__subinfo}>
            <p className={s.card__customer}>{data.customer}</p>
            <p className={s.card__year}>{data.year}</p>
            <p className={s.card__author}>{data.author}</p>
          </div>
          <div className={s.card__desc}>
          <div className={s.tags}>
            {data.technology.slice(0, 5).map((tech, index) => (
              <p className={s.tags__item} key={index}>
                {tech}
              </p>
            ))}
          </div>
            <div className={s.card__subdesc}>
              <p>{data.description}</p>
            </div>
          </div>
        </div>{" "}
      </Link>
    </div>
  );
};

export default ProjectMobileCardComponent;
