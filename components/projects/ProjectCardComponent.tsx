import React, { FC } from "react";
import s from "./ProjectCardComponent.module.scss";
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import Link from "next/link";
import classNames from "classnames";

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

interface ProjectCardProps {
  data: ProjectData;
}

const ProjectCardComponent: FC<ProjectCardProps> = ({ data }) => {
  return (
    <Link href={`/projects/${data.id}`} className={s.card}>
      <div className={s.card__info}>
        <div className={s.card__tags}>
          <p className={classNames(s.card__text, s.card__customer)}>
            Customer: {data.customer}
          </p>
          <div className={s.tags}>
            {data.technology.slice(0, 5).map((tech, index) => (
              <p className={s.tags__item} key={index}>
                {tech}
              </p>
            ))}
          </div>
        </div>
        <div className={s.card__subinfo}>
          <p className={classNames(s.card__text, s.card__year)}>
            Year: {data.year}
          </p>
          <p className={classNames(s.card__text, s.card__author)}>
            Author: {data.author}
          </p>
        </div>
      </div>
      <Image
        className={s.card__image}
        src={data.image}
        alt="Project Image"
        width={2200}
        height={1400}
      />
      <div className={s.card__content}>
        <div className={s.card__subtext}>
          <h3 className={s.card__title}>{data.title}</h3>
          <p className={s.card__description}>{data.description}</p>
        </div>
        <PiArrowRightThin className={s.card__arrowIcon} />
      </div>
    </Link>
  );
};

export default ProjectCardComponent;
