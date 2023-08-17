import React, { FC } from "react";
import classNames from "classnames";
import s from "./HeadingComponent.module.scss";

interface HeadingComponentProps {
  color?:
    | "yellow"
    | "purple"
    | "blue"
    | "orange"
    | "green"
    | "turquoise"
    | "pink";
  text: string;
}

const HeadingComponent: FC<HeadingComponentProps> = ({
  color = "blue",
  text,
}) => {
  const headingColor = classNames(s.heading, {
    [s[color + "Text"]]: color !== "blue",
  });

  const headingTitle = classNames(s.heading__title);

  return (
    <div className={headingColor}>
      <h2 className={headingTitle}>{text}</h2>
      <div className={s.heading__border}></div>
    </div>
  );
};

export default HeadingComponent;
