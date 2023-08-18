import React from "react";
import s from "./ChooseUsSection.module.scss";
import jsonData from "../../../data/technologies/data_java.json";
import classNames from "classnames";
import Image from "next/image";
import SvgImage1 from "../../../images/technologies/choose-us/ChooseUs1.svg";
import SvgImage2 from "../../../images/technologies/choose-us/ChooseUs2.svg";
import SvgImage3 from "../../../images/technologies/choose-us/ChooseUs3.svg";
import BigButtonComponent from "@/components/service/BigButtonComponent";
import HeadingComponent from "@/components/technologies/HeadingComponent";

const ChooseUsSection = () => {
  const chooseUsData = jsonData[0];
  const svgImages = [SvgImage1, SvgImage2, SvgImage3];

  return (
    <section className={classNames(s.our__chose, s.container)}>
      <div className={s.heading}>
        <HeadingComponent text="Why you should choose us" color="purple" />
      </div>
      <div>
        {chooseUsData.chooseUsSection.map((item, index) => (
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
            {index === chooseUsData.chooseUsSection.length - 1 && (
              <BigButtonComponent />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUsSection;
