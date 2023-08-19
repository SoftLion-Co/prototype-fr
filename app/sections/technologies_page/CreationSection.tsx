import React from "react";
import ProcessCard from "@/components/technologies/ProcessesCardComponent";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import s from "../technologies_page/CreationSection.module.scss";
import classNames from "classnames";
import HeadingComponent from "@/components/technologies/HeadingComponent";

interface CreationSectionProps {
  content: string;
}

interface Props {
  creationCard: CreationSectionProps[];
}

const CreationSection: React.FC<Props> = ({ creationCard }: Props) => {
  return (
    <section className={classNames(s.container)}>
      <div className={s.heading}>
        <HeadingComponent text="What we can create with Java" color="yellow"/>
        <div className={s.mobile}>
          <MobileSliderComponent
            data={creationCard} // Передаємо масив об'єктів як дані для слайдера
            SlideComponent={ProcessCard}
          />
        </div>
        <div className={s.our__card}>
          {creationCard.map((item, index) => (
            <ProcessCard key={index} content={item.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreationSection;
