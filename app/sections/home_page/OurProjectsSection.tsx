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
import projectService from "@/services/project-service";

interface ProjectData {
	id: number;
	title: string;
	description: string;
	period: string;
	dateYear: number;
	country: {
	  createdDateTime: string;
	  name: string;
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
	  url: string;
	  id: string;
	}[];
	paragraphs: {
	  createdDateTime: string;
	  title: string;
	  description: string;
	  id: string;
	}[];
	technologies: {
	  id: string;
	  name: string;
	  createdDateTime: string;
	}[];
	createdDateTime: string;
	updatedDateTime: string;
 }

const OurProjectsSection = async() => {

  const data : ProjectData[] = await projectService.getAllShortProjects();
  data.forEach(project => {
	project.pictures.sort((a, b) => new Date(a.createdDateTime).getTime() - new Date(b.createdDateTime).getTime());
 });

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
