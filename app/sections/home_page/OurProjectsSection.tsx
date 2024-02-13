"use client";

import s from "./OurProjectsSection.module.scss";
import ProjectHeadingComponent from "./../../../components/projects/ProjectHeadingComponent";
import ProjectMobileCardComponent from "./../../../components/projects/ProjectMobileCardComponent";
import ProjectCardComponent from "./../../../components/projects/ProjectCardComponent";
import React from "react";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import classNames from "classnames";
import SeeMoreButtonComponent from "./../../../components/SeeMoreButtonComponent";
import data from "@/data/projects/projects_data.json";

import MotionWrapper from "@/hooks/MotionWrapper";

const OurProjectsSection = () => {
  return (
    <section className={s.projects}>
      <ProjectHeadingComponent centered={false} />
      <MotionWrapper
        tag="div"
        initial
        viewport
        variants
        custom={1.5}
        className={s.projects__mobile_slider}
      >
        <MobileSliderComponent
          data={data}
          SlideComponent={ProjectMobileCardComponent}
        />
        <SeeMoreButtonComponent path="projects" />
      </MotionWrapper>

      <MotionWrapper
        tag="div"
        initial
        viewport
        variants
        custom={1.5}
        className={classNames(s.container, s.projects__desktop_wrapper)}
      >
        {data.map((project) => (
          <ProjectCardComponent key={project.id} data={project} />
        ))}
        <SeeMoreButtonComponent path="projects" />
      </MotionWrapper>
    </section>
  );
};

export default OurProjectsSection;
