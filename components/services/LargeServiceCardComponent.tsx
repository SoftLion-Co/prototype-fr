import React, { FC } from "react";
import classNames from "classnames";
import s from "./LargeServiceCardComponent.module.scss";
import Image from "next/image";

interface LargeServiceCardComponentProps {
  title: string;
  paragraph: string;
  image: string;
  isActive: boolean;
  className?: string;
}

const LargeServiceCardComponent: FC<LargeServiceCardComponentProps> = ({
  title,
  paragraph,
  image,
  isActive,
  className,
}) => {
  return (
    <div className={classNames(s.service__container, className)}>
      <Image
        className={s.service__image}
        src={image}
        alt={title}
        width={100}
        height={100}
      />

      {isActive ? (
        <>
          <h3 className={s.service__heading}>{title}</h3>
          <p className={s.service__paragraph}>{paragraph}</p>
        </>
      ) : (
        <>
          <h1 className={s.service__heading}>{title}</h1>
        </>
      )}
    </div>
  );
};
export default LargeServiceCardComponent;
