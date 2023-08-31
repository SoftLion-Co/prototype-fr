"use client";

import s from "./OurProjects.module.scss";
import ProjectMobileCardComponent from "./../../../components/projects/ProjectMobileCardComponent";
import ProjectCardComponent from "./../../../components/projects/ProjectCardComponent";
import React from "react";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import classNames from "classnames";
import SeeMoreButtonComponent from "./../../../components/SeeMoreButtonComponent";
import HeadingComponent from "@/components/technologies/HeadingComponent";

interface ProjectData {
  id: number;
  image: string;
  title: string;
  customer: string;
  year: string;
  author: string;
  description: string;
}

interface OurProjectsProps {
  data: ProjectData[];
  titleTech: string;
}

const OurProjects: React.FC<OurProjectsProps> = ({ data, titleTech }) => {
  return (
    <section className={s.projects}>
      <div className={s.projects__heading}>
        <HeadingComponent
          color="pink"
          text={`Our projects with using ${titleTech}`}
        />
      </div>

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

export default OurProjects;
