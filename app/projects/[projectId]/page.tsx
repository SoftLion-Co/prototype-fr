import React from "react";
import s from "./page.module.scss";
import ResultSection from "@/app/sections/project_page/ResultSection";
import ProjectDescriptionSection from "@/app/sections/project_page/ProjectDescriptionSection";
import SolutionSection from "@/app/sections/project_page/SolutionSection";
import BlogSection from "@/app/sections/home_page/BlogSection";
import ProjectContactUs from "@/app/sections/project_page/ProjectContactUs";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";
import projectService from "@/services/project-service";
import RequestSection from "@/app/sections/project_page/RequestSection";


interface ProjectData {
	id: number;
	title: string;
	description: string;
	period: string;
	dateYear: number;
	country: {
	  createdDateTime: string;
	  name: string;
	  code: string;
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
	  updatedDateTime: string;
	  url: string;
	  id: string;
	}[];
	paragraphs: {
	  createdDateTime: string;
	  updatedDateTime: string;
	  title: string;
	  description: string;
	  id: string;
	}[];
	technologies: {
	  id: string;
	  name: string;
	  createdDateTime: string;
	  updatedDateTime: string;
	}[];
	createdDateTime: string;
	updatedDateTime: string;
 }

const Project = async({params}:{params:any}) => {
  useGoogleAnalytics();
	const projectId = params.projectId;
	const data = await projectService.getProject(projectId);
  const response:ProjectData =data.result;

	console.log(response);
  
	const projectDescriptionSection ={
		title:response.title,
		description: response.description,
		period: response.period,
		dateYear: response.dateYear,
		country: response.country.name,
		imgSrc: response.pictures[0].url
	}
	const requestSection ={
		description: response.requestDescription,
		list: response.requestList.split(/[.!?]/)
	}
	const solutionSection = {
		description: response.solutionDescription,
		paragraphs: response.paragraphs.map(paragraph => {
		  return {
			 title: paragraph.title,
			 description: paragraph.description,
		  };
		}),
		images: [response.pictures[1].url,response.pictures[2].url,response.pictures[3].url],
	}
	const resultSection ={
		paragraphs: [response.resultFirstParagraph, response.resultSecondParagraph,response.resultThirdParagraph],
		imgUrl: response.pictures[4].url
	}

  const links = [
	{ title: "Projects", href: "/projects" },
	 { title: response.title, href: "#" },
 ];

  const metadata = {
    title: response.title,
  };

  return (
    <div>
      <head>
        <title>{metadata.title}</title>
      </head>

      <InfoNavigationComponent links={links} />
      <div className={s.page}>
        <ProjectDescriptionSection data={projectDescriptionSection} />
        <RequestSection data={requestSection} />
        <SolutionSection data={solutionSection} />
        <ResultSection data={resultSection} />
        <BlogSection />
        <ProjectContactUs />
      </div>
    </div>
  );
};

export default Project;
