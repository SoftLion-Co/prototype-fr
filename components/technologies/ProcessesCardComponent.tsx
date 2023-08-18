import React from 'react';
import s from "./ProcessesCardComponent.module.scss";
import data from "../../data/technologies/data_java.json";
import classNames from 'classnames';
import MobileSliderComponent from '../MobileSliderComponent';

interface ProcessCardProps {
  content: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ content }) => (
  <div className={s.card}>
    <p className={s.card__text}>
      {content}
    </p>
  </div>
);

const ProcessesCardComponent: React.FC = () => {
  const firstProcess = data[0];

  return (
    <div>
      <div className={classNames(s.our__card, s.container)}>
        {firstProcess.creationSection.map((section, index) => (
          <ProcessCard
            key={index}
            content={section}
          />
        ))}
      </div>
      <MobileSliderComponent data={firstProcess.creationSection} SlideComponent={ProcessCard} />
    </div>
  );
};

export default ProcessesCardComponent;
