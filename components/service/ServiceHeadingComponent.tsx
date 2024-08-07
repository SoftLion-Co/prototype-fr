import React, { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import s from "./ServiceHeadingComponent.module.scss";
import Line from "../../images/project/line-component.svg";
import MotionWrapper from "@/hooks/MotionWrapper";

interface ServiceHeadingComponentProps {
  headingText: string;
  tag?: string;
  className?: string;
}

const ServiceHeadingComponent: FC<ServiceHeadingComponentProps> = ({
  headingText,
  tag,
  className,
}) => {
  return (
    <MotionWrapper
      initial
      viewport
      variants
      custom={0.5}
      className={classNames(s.heading, className)}
    >
      {tag === "h1" ? (
        <h1 className={s.heading__title}>{headingText}</h1>
      ) : (
        <h2 className={s.heading__title}>{headingText}</h2>
      )}
      <Image src={Line} alt="Security line" className={s.heading__svg} />
    </MotionWrapper>
  );
};

export default ServiceHeadingComponent;
