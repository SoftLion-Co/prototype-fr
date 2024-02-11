import React, { FC } from "react";
import s from "./ServiceHeadingComponent.module.scss";
import Image from "next/image";
import Line from "../../images/project/line-component.svg";
import classNames from "classnames";

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
    <div className={classNames(s.heading, className)}>
      {tag === "h1" ? (
        <h1 className={s.heading__title}>{headingText}</h1>
      ) : (
        <h2 className={s.heading__title}>{headingText}</h2>
      )}
      <Image src={Line} alt="Security line" className={s.heading__svg} />
    </div>
  );
};

export default ServiceHeadingComponent;
