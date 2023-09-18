import React from "react";
import s from "./HeroSection.module.scss";
import classNames from "classnames";
import HeadingComponent from "@/components/HeadingComponent";

interface HeroTech {
  titleTech: string;
  paragraph: string;
}

interface Props {
  heroTech: HeroTech;
}

const HeroSection: React.FC<Props> = ({ heroTech }) => {
  return (
    <section className={s.hero}>
      <div className={classNames(s.container, s.hero__container)}>
        <div className={s.hero__technologies}>
          <HeadingComponent text="Technologies" />
        </div>

        <h1 className={s.hero__heading}>{heroTech.titleTech}</h1>
        <p className={s.hero__paragraph}>{heroTech.paragraph}</p>
        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
