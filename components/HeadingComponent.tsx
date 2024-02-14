import React, { FC } from "react";
import classNames from "classnames";
import s from "./HeadingComponent.module.scss";
import MotionWrapper from "@/hooks/MotionWrapper";

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
        <MotionWrapper
          tag="h1"
          initial
          viewport
          variants
          custom={1.5}
          className={classNames(s.heading, className)}
        >
          {text}
        </MotionWrapper>
      ) : (
        <MotionWrapper
          tag="h2"
          initial
          viewport
          variants
          custom={1.5}
          className={classNames(s.heading, className)}
        >
          {text}
        </MotionWrapper>
      )}
    </React.Fragment>
  );
};

export default HeadingComponent;
