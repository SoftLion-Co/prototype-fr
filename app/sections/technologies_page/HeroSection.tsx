import React, { FC } from "react";
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

const HeroSection: FC<Props> = ({ heroTech }) => {
  return (
    <section className={s.hero}>
      <div className={classNames(s.container, s.hero__container)}>
        <HeadingComponent
          className={s.hero__technologies}
          textSize={s.hero__title}
          text="Technologies"
          tag="h1"
        />
        <h2 className={s.hero__heading}>{heroTech.titleTech}</h2>
        <p className={s.hero__paragraph}>{heroTech.paragraph}</p>

        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
