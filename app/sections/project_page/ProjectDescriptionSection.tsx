import classNames from "classnames";
import s from "./ProjectDescriptionSection.module.scss";
import React, { FC } from "react";

const ProjectDescriptionSection: FC = () => {
  const response = {
    title: "Travel company MOVE",
    description:
      "Move is a company specializing in providing tourist services in Norway. Our goal is to provide unforgettable adventures and experiences for our clients in this enchanting Scandinavian country.",
    time: "3 month",
    year: 2023,
    location: "Europe",
    imgSrc: "https://i.ibb.co/CwYTtPR/photo-2023-08-07-14-08-48.jpg",
  };

  const { title, description, time, year, location, imgSrc } = response;

  return (
    <section className={classNames(s.container, s.project)}>
      <div className={s.article}>
        <h2 className={s.article__title}>{title}</h2>
        <p className={s.article__description}>{description}</p>
        <p className={s.article__time}>Time development: {time}</p>
        <p className={s.article__year}>Year: {year}</p>
        <p className={s.article__location}>Location: {location}</p>
      </div>
      <img src={imgSrc} alt={title} className={s.article__image} />
    </section>
  );
};

export default ProjectDescriptionSection;
