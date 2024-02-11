import classNames from "classnames";
import s from "./HeadingComponent.module.scss";
import React, { FC } from "react";

interface HeadingComponentProps {
  text: string;
  className?: string;
  tag?: string;
}

const HeadingComponent: FC<HeadingComponentProps> = ({
  text,
  className,
  tag,
}) => {
  return (
    <div className={classNames(s.heading__container, className)}>
      {tag === "h1" ? (
        <h1 className={classNames(s.heading)}>{text}</h1>
      ) : (
        <h2 className={classNames(s.heading)}>{text}</h2>
      )}
    </div>
  );
};

export default HeadingComponent;
