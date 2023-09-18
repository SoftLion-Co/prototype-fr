"use client";

import s from "./OurProjectsSection.module.scss";
import ProjectHeadingComponent from "./../../../components/projects/ProjectHeadingComponent";
import ProjectMobileCardComponent from "./../../../components/projects/ProjectMobileCardComponent";
import ProjectCardComponent from "./../../../components/projects/ProjectCardComponent";
import React from "react";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import classNames from "classnames";
import SeeMoreButtonComponent from "./../../../components/SeeMoreButtonComponent";
import trendHero from "@/images/project/project-trend/trend-hero.png";

const sampleData = [
  {
    id: 1,
    image:
      "https://github.com/SoftLion-Co/prototype-fr/blob/test/images/project/project-trend/trend-hero.png?raw=true",
    title: "Landing page of Trend company",
    customer: "customer: Trend",
    year: "year: 2023",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
  },
];

const OurProjectsSection = () => {
  return (
    <section className={s.projects}>
      <ProjectHeadingComponent centered={false} />
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
