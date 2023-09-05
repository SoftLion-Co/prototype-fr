import s from "./CustomAppsCardComponent.module.scss";
import React, { FC } from "react";
import Image from "next/image";

interface CustomAppsCardComponentProps {
  arrow?: boolean;
  path?: any;
  title?: string;
  text?: string;
  text_mob?: string;
}

const CustomAppsCardComponent: FC<CustomAppsCardComponentProps> = ({
  path,
  title,
  text_mob,
  text,
}) => {
  return (
    <div className={s.servicecard}>
      <div className={s.servicecard__wrap}>
        <Image className={s.servicecard__pic} src={path} alt="phone" />
        <h3 className={s.servicecard__title}>{title}</h3>
        <p className={s.servicecard__text_mob}>{text_mob}</p>
        <p className={s.servicecard__text}>{text}</p>
      </div>
    </div>
  );
};

export default CustomAppsCardComponent;
