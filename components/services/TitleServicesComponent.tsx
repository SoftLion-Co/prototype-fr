import s from "./TitleServicesComponent.module.scss";
import React, { FC } from "react";
import classNames from "classnames";

interface TitleServicesComponentProps {
  num: string;
  text: string;
  position?: "left" | "right";
  className:string;
}

const TitleServicesComponent: FC<TitleServicesComponentProps> = ({
  num,
  text,
  position="left",
  className,
}) => {

  const buttonClass = classNames(s.title__num, className, {
    [s.left]: position === "left",
    [s.right]: position === "right",
  });


  return (
    <div className={s.title}>
      <h1 className={buttonClass}>{num}</h1>
      <h2 className={s.title__text}>{text}</h2>
    </div>
  );
};

export default TitleServicesComponent;
