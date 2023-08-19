"use client";
import { useRouter } from "next/router";
import s from "./page.module.scss";
//import all jsons
import data_java from "@/data/technologies/data_java.json";
import HeroSection from "@/app/sections/technologies_page/HeroSection";
import AdvantagesSection from "@/app/sections/technologies_page/AdvantagesSection";
import DevelopmentSection from "@/app/sections/technologies_page/DevelopmentSection";
import StagesSection from "@/app/sections/technologies_page/StagesSection";
import CreationSection from "@/app/sections/technologies_page/CreationSection";
import ProcessesCardComponent from "@/components/technologies/ProcessesCardComponent";

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
    <div>
      <HeroSection />
      <AdvantagesSection
        paragraphs={data_java[0].advantagesSection}
        titleTech={data_java[0].heroSection.titleTech}
      />
      <DevelopmentSection
        titleTech={data_java[0].heroSection.titleTech}
        developmentSection={data_java[0].developmentSection}
      />
      <StagesSection stagesSection={data_java[0].stagesSection} />
      <CreationSection creationCard={data_java[0].creationSection}/>
    </div>
  );
};

export default Technology;
