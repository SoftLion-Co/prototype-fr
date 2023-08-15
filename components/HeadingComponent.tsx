import classNames from "classnames";
import s from "./HeadingComponent.module.scss";
import React, { FC } from "react";

interface HeadingComponentProps {
  text: string;
  customClass?: string;
}

const HeadingComponent: FC<HeadingComponentProps> = ({ text, customClass = '' }) => {
  const className = classNames(s.heading_container, customClass);

  return (
    <div className={className}>
      <h1 className={s.heading}>{text}</h1>
    </div>
  );
};

export default HeadingComponent;
