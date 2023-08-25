import React from "react";
import s from "./HeroSection.module.scss";
import classNames from "classnames";
import HeadingComponent from "@/components/HeadingComponent";
import technologies from "../../../data/technologies/data_java.json";

const HeroSection = () => {
  // const heroData = technologies[0].heroSection;

  return (
    <section className={s.hero}>
      <div className={classNames(s.container, s.hero__container)}>
        <div className={s.hero__technologies}>
          <HeadingComponent text="Technologies" />
        </div>
        {/* <h2 className={s.hero__heading}>{heroData.titleTech}</h2> */}
        {/* <p className={s.hero__paragraph}>{heroData.paragraph}</p> */}
      </div>
    </section>
  );
};

export default HeroSection;
