"use client";
import { useRouter } from "next/router";
import s from "./page.module.scss";
//import all jsons
import data_java from "@/data/technologies/data_java.json";
import HeroSection from "@/app/sections/technologies_page/HeroSection";
import AdvantagesSection from "@/app/sections/technologies_page/AdvantagesSection";
import DevelopmentSection from "@/app/sections/technologies_page/DevelopmentSection";
import ChooseUsSection from "@/app/sections/technologies_page/ChooseUsSection";
import StagesSection from "@/app/sections/technologies_page/StagesSection";
import OurProjectsSection from "@/app/sections/home_page/OurProjectsSection";
import OurProjects from "@/app/sections/technologies_page/OurProjects";
import CreationSection from "@/app/sections/technologies_page/CreationSection";
import ReviewsSection from "@/app/sections/technologies_page/ReviewsSection";


const Technology = () => {
  // const router = useRouter()
  // const technology = router.query.technologyId
  //знайти потрібний json за id (switch case)

  // const getData = () => {
  //     let data = {}
  // switch(technology)
  //case: java
  //data = data_java
  //default: null
  // }

  // const data = getData()

  // if(!data){
  //     return (
  //         <h1>Data not found</h1>
  //     )
  // }

  //створити інтерфейс за json'oм для data ()
  return (
    <div className={s.page}>
      <HeroSection />
      <CreationSection
        creationCard={data_java[0].creationSection}
        titleTech={data_java[0].heroSection.titleTech}
      />
      <AdvantagesSection
        paragraphs={data_java[0].advantagesSection}
        titleTech={data_java[0].heroSection.titleTech}
      />
      <ChooseUsSection chooseUsSection={data_java[0].chooseUsSection} />
      <DevelopmentSection
        titleTech={data_java[0].heroSection.titleTech}
        developmentSection={data_java[0].developmentSection}
      />
      <StagesSection stagesSection={data_java[0].stagesSection} />
      <ReviewsSection reviewsSection={data_java[0].reviewsSection} />
      <OurProjects
        data={data_java[0].projectsSection}
        titleTech={data_java[0].heroSection.titleTech}
      />
    </div>
  );
};

export default Technology;
