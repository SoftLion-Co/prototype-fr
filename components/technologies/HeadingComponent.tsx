import React, { FC } from "react";
import classNames from "classnames";
import s from "./HeadingComponent.module.scss";
import MotionWrapper from "@/hooks/MotionWrapper";

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
  className?: string;
}

const HeadingComponent: FC<HeadingComponentProps> = ({
  color = "",
  text,
  className,
}) => {
  const headingColor = classNames(s.heading, {
    [s[color + "Text"]]: color !== "",
  });

  const headingTitle = classNames(s.heading__title);

  return (
    <MotionWrapper
      tag="div"
      initial
      viewport
      variants
      custom={1.5}
      className={classNames(
        headingColor,
        s.container,
        s.heading__container,
        className
      )}
    >
      <h2 className={headingTitle}>{text}</h2>
      <div className={s.heading__border}></div>
    </MotionWrapper>
  );
};

export default HeadingComponent;
