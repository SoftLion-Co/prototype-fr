import React, { FC } from "react";
import s from "../technologies_page/CreationSection.module.scss";
import ProcessCard from "@/components/technologies/ProcessesCardComponent";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import classNames from "classnames";
import HeadingComponent from "@/components/technologies/HeadingComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

interface Props {
  creationCard: { description: string }[];
  titleTech: string;
}

const CreationSection: FC<Props> = ({ creationCard, titleTech }: Props) => {
  return (
    <section>
      <HeadingComponent
        text={`What we can create with ${titleTech}`}
        color="yellow"
      />

      <MotionWrapper
        tag="div"
        initial
        viewport
        variants
        custom={2}
        className={s.mobile}
      >
        <MobileSliderComponent
          data={creationCard}
          SlideComponent={ProcessCard}
        />
      </MotionWrapper>

      <MotionWrapper
        tag="div"
        initial
        viewport
        variants
        custom={2}
        className={classNames(s.our__card, s.container)}
      >
        {creationCard.map((item, index) => (
          <ProcessCard key={index} data={item} />
        ))}
      </MotionWrapper>
    </section>
  );
};

export default CreationSection;
