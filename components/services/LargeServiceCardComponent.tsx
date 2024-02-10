import React, { FC } from "react";
import s from "./LargeServiceCardComponent.module.scss";
import Image from "next/image";

interface LargeServiceCardComponentProps {
  title: string;
  paragraph: string;
  image: string;
  isActive: boolean;
}

const LargeServiceCardComponent: FC<LargeServiceCardComponentProps> = ({
  title,
  paragraph,
  image,
  isActive,
}) => {
  return (
    <div className={s.service}>
      <div className={s.service__container}>
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
    </div>
  );
};
export default LargeServiceCardComponent;
