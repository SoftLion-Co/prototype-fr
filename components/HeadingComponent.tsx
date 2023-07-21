import s from "./HeadingComponent.module.scss";
import React, { FC } from "react";

interface HeadingComponentProps {
  text: string;
}

const HeadingComponent: FC<HeadingComponentProps> = ({ text }) => {
  return (
    <div className={s.heading_container}>
      <h1 className={s.heading}>{text}</h1>
    </div>
  );
};

export default HeadingComponent;
