import React from "react";
import s from "./ProcessesCardComponent.module.scss";

interface SlideData {
  description: string;
}

interface ProcessCardProps {
  data: SlideData;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ data }) => (
  <div className={s.card}>
    <p className={s.card__text}>{data.description}</p>
    <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
  </div>
);

export default ProcessCard;
