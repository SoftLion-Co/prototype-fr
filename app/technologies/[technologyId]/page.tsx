"use client";
import React from "react";
import s from "./page.module.scss";

import data_java from "@/data/technologies/data_java.json";
import data_react from "@/data/technologies/data_react.json";
import data_node from "@/data/technologies/data_node.json";
import data_vue from "@/data/technologies/data_vue.json";
import data_angular from "@/data/technologies/data_angular.json";
import data_net from "@/data/technologies/data_net.json";

import HeroSection from "@/app/sections/technologies_page/HeroSection";
import AdvantagesSection from "@/app/sections/technologies_page/AdvantagesSection";
import DevelopmentSection from "@/app/sections/technologies_page/DevelopmentSection";
import ChooseUsSection from "@/app/sections/technologies_page/ChooseUsSection";
import StagesSection from "@/app/sections/technologies_page/StagesSection";
import CreationSection from "@/app/sections/technologies_page/CreationSection";
import ReviewsSection from "@/app/sections/technologies_page/ReviewsSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";

import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

export interface Data {
  heroSection: HeroSection;
  creationSection: CreationSection[];
  advantagesSection: string[];
  chooseUsSection: string[];
  developmentSection: DevelopmentSection[];
  stagesSection: StagesSection[];
  reviewsSection: ReviewsSection[];
  projectsSection: ProjectsSection[];
}

export interface CreationSection {
  description: string;
}

export interface DevelopmentSection {
  number: string;
  title: string;
  paragraph: string;
}

export interface HeroSection {
  titleTech: string;
  paragraph: string;
}

export interface ProjectsSection {
  id: number;
  image: string;
  title: string;
  customer: string;
  year: string;
  author: string;
  description: string;
}

export interface ReviewsSection {
  name: string;
  rating: number;
  paragraph: string;
}

export interface StagesSection {
  title: string;
  paragraph: string;
}

const Technology = ({ params }: { params: any }) => {
  useGoogleAnalytics();

  const technology = params.technologyId;

  //знайти потрібний json за id (switch case)
  const getData = (): Data | null => {
    let data: Data | null = null; // Initialize data with null
    switch (technology) {
      case "java":
        data = data_java;
        break;
      case "react":
        data = data_react;
        break;
      case "node":
        data = data_node;
        break;
      case "vue":
        data = data_vue;
        break;
      case "angular":
        data = data_angular;
        break;
      case "net":
        data = data_net;
        break;
      default:
        break;
    }
    return data;
  };

  const data = getData();

  if (data === null || undefined) {
    return <h1>Data not found</h1>;
  }

  const links = [
    {
      title: `${data.heroSection.titleTech} Technology`,
      href: `/technologies/${technology}`,
    },
  ];

  const metadata = {
    title: data.heroSection.titleTech,
  };

  //створити інтерфейс за json'oм для data ()
  return (
    <React.Fragment>
      <head>
        <title>{metadata.title}</title>
      </head>

      <InfoNavigationComponent links={links} />
      <div className={s.page}>
        <HeroSection heroTech={data.heroSection} />
        <CreationSection
          creationCard={data.creationSection}
          titleTech={data.heroSection.titleTech}
        />
        <AdvantagesSection
          paragraphs={data.advantagesSection}
          titleTech={data.heroSection.titleTech}
        />
        <ChooseUsSection chooseUsSection={data.chooseUsSection} />
        <DevelopmentSection
          titleTech={data.heroSection.titleTech}
          developmentSection={data.developmentSection}
        />
        <StagesSection stagesSection={data.stagesSection} />

        {/* <ReviewsSection reviewsSection={data.reviewsSection} /> */}
        {/* <OurProjects
          data={data.projectsSection}
          titleTech={data.heroSection.titleTech}
        /> */}
      </div>
    </React.Fragment>
  );
};

export default Technology;
