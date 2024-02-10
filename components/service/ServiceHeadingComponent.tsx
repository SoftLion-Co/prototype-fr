import React, { FC } from "react";
import s from "./ServiceHeadingComponent.module.scss";
import Image from "next/image";
import Line from "../../images/project/line-component.svg";
import classNames from "classnames";

interface ServiceHeadingComponentProps {
  headingText: string;
  container?: boolean;
  tag?: string;
}

const ServiceHeadingComponent: FC<ServiceHeadingComponentProps> = ({
  headingText,
  container = true,
  tag,
}) => {
  const headingClass = classNames(s.heading, {
    [s.container]: container === true,
  });

  return (
    <div className={headingClass}>
      <div className={s.heading__component}>
        {tag === "h1" ? (
          <h1 className={s.heading__title}>{headingText}</h1>
        ) : (
          <h2 className={s.heading__title}>{headingText}</h2>
        )}
        <Image src={Line} alt="Security line" className={s.heading__svg} />
      </div>
    </div>
  );
};

export default ServiceHeadingComponent;
