import React, { FC } from "react";
import Image from "next/image";
import Check from "@/images/technologies/advantages/AdvantagesCheck.svg";
import s from "./AdvantagesCardComponent.module.scss";

interface SlideData {
  id?: number | string;
  description?: string;
  isActive?: boolean;
}

interface AdvantagesCardComponentProps {
  data: SlideData;
}

const AdvantagesCardComponent: FC<AdvantagesCardComponentProps> = ({ data }) => {
  const cardClasses = `${s.advantages} ${data.isActive ? s.advantages__active : ""}`;

  return (
    <div className={cardClasses}>
      <Image className={`${s.advantages__icon} ${data.isActive ? s.active : ""}`} src={Check} alt="✔" />
      <p className={`${s.advantages__paragraph} ${data.isActive ? s.active : ""}`}>{data.description}</p>    
    </div>
  );
};

export default AdvantagesCardComponent;
