import classNames from "classnames";
import s from "./HeadingComponent.module.scss";
import React, { FC } from "react";

interface HeadingComponentProps {
  text: string;
  tag?: string;
  className?: string;
}

const HeadingComponent: FC<HeadingComponentProps> = ({
  text,
  tag,
  className,
}) => {
  return (
    <React.Fragment>
      {tag === "h1" ? (
        <h1 className={classNames(s.heading, className)}>{text}</h1>
      ) : (
        <h2 className={classNames(s.heading, className)}>{text}</h2>
      )}
    </React.Fragment>
  );
};

export default HeadingComponent;
