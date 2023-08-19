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

const HeadingComponent: FC<HeadingComponentProps> = ({ color = "", text }) => {
  const headingColor = classNames(s.heading, {
    [s[color + "Text"]]: color !== "",
  });

  const headingTitle = classNames(s.heading__title);

  return (
    <div className={classNames(headingColor, s.container)}>
      <h2 className={headingTitle}>{text}</h2>
      <div className={s.heading__border}></div>
    </div>
  );
};

export default HeadingComponent;
