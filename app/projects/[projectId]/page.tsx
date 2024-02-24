"use client";
import React from "react";
import s from "./page.module.scss";
import ResultSection from "@/app/sections/project_page/ResultSection";
import RequestSection from "@/app/sections/project_page/RequestSection";
import ProjectDescriptionSection from "@/app/sections/project_page/ProjectDescriptionSection";
import SolutionSection from "@/app/sections/project_page/SolutionSection";
import BlogSection from "@/app/sections/home_page/BlogSection";
import ProjectContactUs from "@/app/sections/project_page/ProjectContactUs";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import response from "./response.json";
import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

interface ProjectData {
  ProjectDescriptionSection: {
    title: string;
    description: string;
    time: string;
    year: number;
    location: string;
    imgSrc: string;
  };
  RequestSection: {
    paragraph: string;
    arrays: { id: number; text: string }[];
  };
  SolutionSection: {
    paragraphs: { title: string; description: string }[];
    images: { imageSrc: string }[];
  };
  ResultSection: string[];
}

type ResponseData = {
  [key: string]: ProjectData;
};

const Project = ({ params }: { params: any }) => {
  useGoogleAnalytics();

  const { projectId }: { projectId: string } = params;

  const links = [
    { title: "Projects", href: "/projects" },
    { title: projectId, href: "#" },
  ];

  const projectData = (response as ResponseData)[projectId];

  return (
    <React.Fragment>
      <InfoNavigationComponent links={links} />
      <ProjectDescriptionSection data={projectData.ProjectDescriptionSection} />
      <RequestSection data={projectData.RequestSection} />
      <SolutionSection data={projectData.SolutionSection} />
      <ResultSection data={projectData.ResultSection} />
      <BlogSection />
      <ProjectContactUs className={s.project__contactUs} />
    </React.Fragment>
  );
};

export default Project;
