import React from "react";
import classNames from "classnames";
import Image from "next/image";
import SvgImage1 from "../../../images/technologies/choose-us/ChooseUs1.svg";
import SvgImage2 from "../../../images/technologies/choose-us/ChooseUs2.svg";
import SvgImage3 from "../../../images/technologies/choose-us/ChooseUs3.svg";
import BigButtonComponent from "@/components/service/BigButtonComponent";
import HeadingComponent from "@/components/technologies/HeadingComponent";
import s from "./ChooseUsSection.module.scss";

interface ChooseUsSectionProps {
  chooseUsSection: string[]; // Визначте тип для властивості
}

const ChooseUsSection: React.FC<ChooseUsSectionProps> = ({
  chooseUsSection,
}) => {
  const svgImages = [SvgImage1, SvgImage2, SvgImage3];

  return (
    <section className={s.our__chose}>
      <div className={s.heading}>
        <HeadingComponent text="Why you should choose us" color="blue" />
      </div>
      <div className={s.container}>
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
        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
