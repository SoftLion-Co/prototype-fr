import s from "./TitleServicesComponent.module.scss";
import React, { FC } from "react";
import classNames from "classnames";

interface TitleServicesComponentProps {
  num: string;
  text: string;
  position?: "left" | "right";
  className?: string;
  color?: "blue" | "purple" | "green";
}

const TitleServicesComponent: FC<TitleServicesComponentProps> = ({
  num,
  text,
  position = "left",
  className,
  color = "blue",
}) => {
  const buttonClass = classNames(s.title__num, className, {
    [s.left]: position === "left",
    [s.right]: position === "right",
  });

  const headingClass = classNames(s.title, className, {
    [s.title__blue]: color === "blue",
    [s.title__purple]: color === "purple",
    [s.title__green]: color === "green",
  });

  return (
    <div className={classNames(headingClass, s.title__container)}>
      <h1 className={buttonClass}>{num}</h1>
      <h2 className={s.title__text}>{text}</h2>
    </div>
  );
};

export default TitleServicesComponent;
