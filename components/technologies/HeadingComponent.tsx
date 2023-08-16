import React, { FC, ComponentProps } from "react";
import classNames from "classnames";
import s from "./HeadingComponent.module.scss";

interface HeadingComponentProps extends ComponentProps<"div"> {
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
  className,
  ...rest
}) => {
  const headingClass = classNames(s.heading, className, {
    [s.yellowText]: color === "yellow",
    [s.purpleText]: color === "purple",
    [s.blueText]: color === "blue",
    [s.orangeText]: color === "orange",
    [s.greenText]: color === "green",
    [s.turquoiseText]: color === "turquoise",
    [s.pinkText]: color === "pink",
  });

  return (
    <div className={headingClass} {...rest}>
      <h2 className={s.heading}>{text}</h2>
      <div className={s.heading__border}></div>
    </div>
  );
};

export default HeadingComponent;
