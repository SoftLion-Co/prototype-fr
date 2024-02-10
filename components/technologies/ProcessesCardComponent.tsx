import React, { FC } from "react";
import s from "./ProcessesCardComponent.module.scss";

interface SlideData {
  description: string;
}

interface ProcessCardProps {
  data: SlideData;
}

const ProcessCard: FC<ProcessCardProps> = ({ data }) => (
  <div className={s.card}>
    <p className={s.card__text}>{data.description}</p>
  </div>
);

export default ProcessCard;
