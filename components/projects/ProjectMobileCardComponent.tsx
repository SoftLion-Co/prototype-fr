import React from "react";
import s from "./ProjectMobileCardComponent.module.scss";
import Image from "next/image";
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

const ProjectMobileCardComponent: React.FC<{ data: ProjectData }> = ({
  data,
}) => {
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
      <Link href={`/projects/${data.id}`} className={s.card__link}>
        <div className={s.card__main}>
          <Image
            className={s.card__image}
            src={data.pictures[0].url}
            alt="Project Image"
            width={16000}
            height={19000}
          />
          <h3 className={s.card__title}>{data.title}</h3>
          <p className={s.card__customer}>
            {data.technologies.map((tech, index) => (
              <span key={index}>{tech.name} </span>
            ))}
          </p>
        </div>
        <div className={s.card__submain}>
          <div className={s.card__subinfo}>
            <p className={s.card__year}> Year: {data.dateYear}</p>
            <p className={s.card__author}>Country: {data.country.name}</p>
          </div>
          <div className={s.card__desc}>
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
