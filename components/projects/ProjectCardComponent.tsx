import React from "react";
import s from "./ProjectCardComponent.module.scss";
import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import Link from "next/link";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  period: string;
  dateYear: number;
  country: {
    createdDateTime: string;
    name: string;
    code: string;
    id: string;
  };
  requestDescription: string;
  requestList: string;
  solutionDescription: string;
  resultFirstParagraph: string;
  resultSecondParagraph: string;
  resultThirdParagraph: string;
  pictures: {
    createdDateTime: string;
    updatedDateTime: string;
    position: number;
    url: string;
    id: string;
  }[];
  paragraphs: {
    createdDateTime: string;
    updatedDateTime: string;
    title: string;
    description: string;
    position: number;
    id: string;
  }[];
  technologies: {
    id: string;
    name: string;
    createdDateTime: string;
    updatedDateTime: string;
  }[];
  createdDateTime: string;
  updatedDateTime: string;
}

interface ProjectCardProps {
  data: ProjectData;
}

const ProjectCardComponent: React.FC<ProjectCardProps> = ({ data }) => {
  function trimString(input: string) {
    if (input.length >= 80 && input.length <= 120) {
      return input;
    }

    let lastDotIndex = 80;
    for (let i = 80 - 1; i <= 120; i++) {
      if (input[i] === ".") {
        lastDotIndex = i;
        break;
      }
    }
    const trimmedString = input.slice(0, lastDotIndex);
    return trimmedString;
  }
  data.description = trimString(data.description);
  return (
    <div className={s.card}>
      <div className={s.card__info}>
        <p className={s.card__customer}>
          {data.technologies.map((tech, index) => (
            <span key={index}>{tech.name} </span>
          ))}
        </p>
        <div className={s.card__subinfo}>
          <p className={s.card__year}>Year: {data.dateYear}</p>
          <p className={s.card__author}>Country: {data.country.name}</p>
        </div>
      </div>
      <Image
        className={s.card__image}
        src={data.pictures[0].url}
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
