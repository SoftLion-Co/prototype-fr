import React from "react";
import s from "./ProjectCardComponent.module.scss";
import Image from "next/image";

const sampleData = [
  {
    id: 1,
    image: "/path/to/image1.jpg",
    title: "Landing page of traveling company",
    customer: "customer: Move",
    year: "year: 2022",
    author: "author: SoftLion",
    description: "In this project, we developed the design, implemented it, and provide further support",
  },
];

const ProjectCardComponent = () => {
  return (
    <div className={s.card}>
      {sampleData.map((data) => (
        <div key={data.id}>
          <div className={s.card__main}>
            <Image src={data.image} alt="Project Image" width={300} height={200} />
            <h4>{data.title}</h4>
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
      ))}
    </div>
  );
};

export default ProjectCardComponent;
