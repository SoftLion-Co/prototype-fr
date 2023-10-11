import classNames from "classnames";
import s from "./HeadingComponent.module.scss";
import React, { FC } from "react";

interface HeadingComponentProps {
  text: string;
  customClass?: string;
  tag?: string;
}

const HeadingComponent: FC<HeadingComponentProps> = ({
  text,
  customClass = "",
  tag,
}) => {
  const className = classNames(s.heading_container, customClass);

  return (
    <div className={className}>
      {tag === "h1" ? (
        <h1 className={s.heading}>{text}</h1>
      ) : (
        <h2 className={s.heading}>{text}</h2>
      )}
    </div>
  );
};

export default HeadingComponent;
