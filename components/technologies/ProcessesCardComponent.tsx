import React from 'react';
import s from "./ProcessesCardComponent.module.scss";

interface ProcessCardProps {
  content: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ content }) => (
  <div className={s.card}>
    <p className={s.card__text}>{content}</p>
  </div>
);

export default ProcessCard;
