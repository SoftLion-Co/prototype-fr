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
import data from "@/data/projects/projects_data.json"

const OurProjectsSection = () => {
  return (
    <section className={s.projects}>
      <ProjectHeadingComponent centered={false} />
      <div className={s.projects__mobile_slider}>
        <MobileSliderComponent
          data={data}
          SlideComponent={ProjectMobileCardComponent}
        />
        <SeeMoreButtonComponent path="projects" />
      </div>
      <div className={classNames(s.container, s.projects__desktop_wrapper)}>
        {data.map((project) => (
          <ProjectCardComponent key={project.id} data={project} />
        ))}
        <SeeMoreButtonComponent path="projects" />
      </div>
    </section>
  );
};

export default OurProjectsSection;
