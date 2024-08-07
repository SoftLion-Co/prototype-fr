import React from "react";
import s from "./StagesSection.module.scss";
import HeadingComponent from "@/components/technologies/HeadingComponent";
import classNames from "classnames";
import Image from "next/image";

import Development1 from "@/images/technologies/development/Development1.svg";
import Development2 from "@/images/technologies/development/Development2.svg";
import Development3 from "@/images/technologies/development/Development3.svg";
import Development4 from "@/images/technologies/development/Development4.svg";

import BigButtonComponent from "@/components/service/BigButtonComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

interface StagesItem {
  title: string;
  paragraph: string;
}

interface Props {
  stagesSection: StagesItem[];
}

const getImageForStage = (index: number) => {
  switch (index) {
    case 0:
      return Development1;
    case 1:
      return Development2;
    case 2:
      return Development3;
    case 3:
      return Development4;
    default:
      return "";
  }
};

const StagesSection = (props: Props) => {
  return (
    <section className={s.stages__container}>
      <HeadingComponent
        color="green"
        text={`Process and stages of development`}
      />

      <MotionWrapper
        tag="div"
        initial
        viewport
        variants
        custom={0.5}
        className={classNames(s.stages, s.container)}
      >
        {props.stagesSection.map((item, index) => (
          <div key={index} className={s.stages__card}>
            <Image
              className={s.stages__img}
              src={getImageForStage(index)}
              alt={`Stage ${index + 1}`}
              width={75}
            />

            <h3 className={s.stages__title}>{item.title}</h3>

            <p className={s.stages__paragraph}>{item.paragraph}</p>
          </div>
        ))}
      </MotionWrapper>

      <div className={s.stages__button}>
        <BigButtonComponent />
      </div>
    </section>
  );
};

export default StagesSection;
