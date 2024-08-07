import React, { FC } from "react";
import s from "./HeroSection.module.scss";
import classNames from "classnames";
import HeadingComponent from "@/components/HeadingComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

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
          text="Technologies"
          tag="h1"
        />

        <MotionWrapper
          tag={"h2"}
          initial
          viewport
          variants
          custom={0.5}
          className={s.hero__heading}
        >
          {heroTech.titleTech}
        </MotionWrapper>

        <MotionWrapper
          tag={"p"}
          initial
          viewport
          variants
          custom={0.5}
          className={s.hero__paragraph}
        >
          {heroTech.paragraph}
        </MotionWrapper>

        <MotionWrapper initial viewport variants custom={0.5} className={s.blur}>
          <div className={s.blur_item1}></div>
          <div className={s.blur_item2}></div>
          <div className={s.blur_item3}></div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default HeroSection;
