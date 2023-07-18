import s from "./TitleServicesComponent.module.scss";
import React, { FC } from "react";

interface TitleServicesComponentProps {
  num: number;
  text: string;
}

const TitleServicesComponent: FC<TitleServicesComponentProps> = ({
  num,
  text,
}) => {
  return (
    <div className={s.title}>
      <h1 className={s.title__num}>{num}</h1>
      <h2 className={s.title__text}>{text}</h2>
    </div>
  );
};

export default TitleServicesComponent;
