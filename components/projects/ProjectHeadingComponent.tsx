import React from "react";
import classNames from "classnames";
import s from "./ProjectHeadingComponent.module.scss";
import HeadingComponent from "./../HeadingComponent";

interface ProjectHeadingInterface {
  centered: boolean;
}

const ProjectHeadingComponent: React.FC<{ centered: boolean }> = ({
  centered = false,
}) => {
  return (
    <div className={classNames(s.heading, s.container, { [s.heading___centered]: centered })}>
      <HeadingComponent text="Our Projects" />
      <p className={classNames(s.heading__text, { [s.heading__text___centered]: centered })}>
        Our team encourages all your ideas and works as hard as possible to
        improve your service. For inspiration, you can view our previous
        projects.
      </p>
      <div className={s.blur}>
        <div className={s.blur_item}></div>
      </div>
    </div>
  );
};

export default ProjectHeadingComponent;
