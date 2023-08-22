import React from "react";
import ProcessCard from "@/components/technologies/ProcessesCardComponent";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import s from "../technologies_page/CreationSection.module.scss";
import classNames from "classnames";
import HeadingComponent from "@/components/technologies/HeadingComponent";

interface Props {
  creationCard: { description: string }[];
  titleTech: string;
}

const CreationSection: React.FC<Props> = ({
  creationCard,
  titleTech,
}: Props) => {
  return (
    <section>
      <div className={s.heading}>
        <HeadingComponent
          text={`What we can create with ${titleTech}`}
          color="yellow"
        />
      </div>

      <div className={s.mobile}>
        <MobileSliderComponent
          data={creationCard}
          SlideComponent={ProcessCard}
        />
      </div>

      <div className={classNames(s.our__card, s.container)}>
        {creationCard.map((item, index) => (
          <ProcessCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default CreationSection;
