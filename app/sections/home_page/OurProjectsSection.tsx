"use client";

import s from "./OurProjectsSection.module.scss";
import ProjectHeadingComponent from "./../../../components/projects/ProjectHeadingComponent";
import ProjectMobileCardComponent from "./../../../components/projects/ProjectMobileCardComponent";
import ProjectCardComponent from "./../../../components/projects/ProjectCardComponent";
import React from "react";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import classNames from "classnames";
import SeeMoreButtonComponent from "./../../../components/SeeMoreButtonComponent";

const sampleData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dte7upwcr/image/upload/f_auto/v1653388323/blog/blog2/Business%20Website%20Templates%20to%20Help%20you%20Design%20Your%20Website/Webflow_2.png",
    title: "Creating Website for IT company",
    customer: "customer: Move",
    year: "year: 2020",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
  },
  {
    id: 2,
    image:"https://media.licdn.com/dms/image/D5612AQErJrHiEWZxxg/article-cover_image-shrink_720_1280/0/1672207059485?e=2147483647&v=beta&t=8xHZ8VkKb8EiJrBTWT11jtx92R5yrdSYk6E3Q-Bh-UM",
    title: "Landing page of traveling company",
    customer: "customer: Feel",
    year: "year: 2021",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
  },
  {
    id: 3,
    image:
      "https://themeforest.img.customer.envatousercontent.com/files/356000339/02_home.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=7c4204b00e2c61354419a026e4651cbe",
    title: "Shop page of agency company",
    customer: "customer: Sneek",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
  },
];

const OurProjectsSection = () => {
  return (
    <section className={s.projects}>
      <ProjectHeadingComponent centered={false}/>
      <div className={s.projects__mobile_slider}>
        <MobileSliderComponent
          data={sampleData}
          SlideComponent={ProjectMobileCardComponent}
        />
        <SeeMoreButtonComponent path="projects" />
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
