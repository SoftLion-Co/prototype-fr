import React, { FC } from "react";
import classNames from "classnames";
import Image from "next/image";
import SvgImage1 from "../../../images/technologies/choose-us/ChooseUs1.svg";
import SvgImage2 from "../../../images/technologies/choose-us/ChooseUs2.svg";
import SvgImage3 from "../../../images/technologies/choose-us/ChooseUs3.svg";
import BigButtonComponent from "@/components/service/BigButtonComponent";
import HeadingComponent from "@/components/technologies/HeadingComponent";
import s from "./ChooseUsSection.module.scss";
import MotionWrapper from "@/hooks/MotionWrapper";

interface ChooseUsSectionProps {
  chooseUsSection: string[];
}

const ChooseUsSection: FC<ChooseUsSectionProps> = ({ chooseUsSection }) => {
  const svgImages = [SvgImage1, SvgImage2, SvgImage3];

  return (
    <section className={s.our__chose}>
      <HeadingComponent text="Why you should choose us" color="blue" />
      <MotionWrapper
        tag="div"
        initial
        viewport
        variants
        custom={0.5}
        className={s.container}
      >
        {chooseUsSection.map((item: string, index: number) => (
          <div
            className={classNames(s.card, {
              [s.reverseRow]: index % 2 === 1,
            })}
            key={index}
          >
            {index < 3 && (
              <div className={s.card__image}>
                <Image
                  src={svgImages[index]}
                  alt="SVG"
                  className={s.card__svg}
                />
              </div>
            )}
            <p className={s.card__description}>{item}</p>
            {index === chooseUsSection.length - 1 && <BigButtonComponent />}
          </div>
        ))}
      </MotionWrapper>
    </section>
  );
};

export default ChooseUsSection;
