import React from "react";
import ProcessCard from "@/components/technologies/ProcessesCardComponent";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import s from "../technologies_page/CreationSection.module.scss";
import classNames from "classnames";
import HeadingComponent from "@/components/technologies/HeadingComponent";

interface CreationSectionProps {
    description: string;
}

interface Props {
  creationCard: CreationSectionProps[];
}

const CreationSection: React.FC<Props> = ({ creationCard }: Props) => {
  return (
    <section className={classNames()}>
      <div className={s.heading}>
        <HeadingComponent text="What we can create with Java" color="yellow" />

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
      </div>
    </section>
  );
};

export default CreationSection;
