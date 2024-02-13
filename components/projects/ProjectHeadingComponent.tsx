import React, { FC } from "react";
import classNames from "classnames";
import s from "./ProjectHeadingComponent.module.scss";
import HeadingComponent from "./../HeadingComponent";

import MotionWrapper from "@/hooks/MotionWrapper";

const ProjectHeadingComponent: FC<{ centered: boolean }> = ({
  centered = false,
}) => {
  return (
    <div
      className={classNames(s.heading, s.container, {
        [s.heading___centered]: centered,
      })}
    >
      <HeadingComponent
        className={s.heading__title}
        text="Our Projects"
        tag="h2"
      />
      <MotionWrapper
        tag="p"
        initial
        viewport
        variants
        custom={1.5}
        className={classNames(s.heading__text, {
          [s.heading__text___centered]: centered,
        })}
      >
        We are always looking for ways to improve our services and are always
        open to your feedback. To get a better understanding of our work, please
        take a look at our portfolio of previous projects.
      </MotionWrapper>
      <div className={s.blur}>
        <div className={s.blur_item}></div>
      </div>
    </div>
  );
};

export default ProjectHeadingComponent;
