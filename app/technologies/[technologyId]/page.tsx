"use client";
import { useRouter } from "next/router";
import s from "./page.module.scss";
//import all jsons
import data_java from "@/data/technologies/data_java.json";
import HeroSection from "@/app/sections/technologies_page/HeroSection";
import AdvantagesSection from "@/app/sections/technologies_page/AdvantagesSection";
import DevelopmentSection from "@/app/sections/technologies_page/DevelopmentSection";
import StagesSection from "@/app/sections/technologies_page/StagesSection";
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
      <AdvantagesSection
        paragraphs={data_java[0].advantagesSection}
        titleTech={data_java[0].heroSection.titleTech}
      />
      <DevelopmentSection
        titleTech={data_java[0].heroSection.titleTech}
        developmentSection={data_java[0].developmentSection}
      />
      <StagesSection stagesSection={data_java[0].stagesSection} />

      <ReviewsSection reviewsSection={data_java[0].reviewsSection} />
    </div>
  );
};

export default Technology;
