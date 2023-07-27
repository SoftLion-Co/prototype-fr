"use client";

import s from "./OurProjectsSection.module.scss";
import ProjectHeadingComponent from "./../../../components/projects/ProjectHeadingComponent";
import ProjectMobileCardComponent from "./../../../components/projects/ProjectMobileCardComponent";
import ProjectCardComponent from "./../../../components/projects/ProjectCardComponent";
import React from "react";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import classNames from "classNames";
import SeeMoreButtonComponent from "./../../../components/SeeMoreButtonComponent";

const sampleData = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Move",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Move",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Move",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
  },
];

const OurProjectsSection = () => {
  return (
    <section className={s.projects}>
      <ProjectHeadingComponent />
      <div className={s.projects__mobile_slider}>
        <MobileSliderComponent
          data={sampleData}
          SlideComponent={ProjectMobileCardComponent}
        />
      </div>
      <div className={classNames(s.container, s.projects__desktop_wrapper)}>
        {sampleData.map((project) => (
          <ProjectCardComponent key={project.id} data={project} />
        ))}
        <SeeMoreButtonComponent path="projects" />
      </div>
    </section>
  );
};

export default OurProjectsSection;
