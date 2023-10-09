import s from "./CustomAppsCardComponent.module.scss";
import React, { FC } from "react";
import Image from "next/image";

interface CustomAppsCardComponentProps {
  arrow?: boolean;
  path?: any;
  title?: string;
  text?: string;
}

const CustomAppsCardComponent: FC<CustomAppsCardComponentProps> = ({
  path,
  title,
  text,
}) => {
  return (
    <div className={s.service}>
      <div className={s.service__wrap}>
        <Image className={s.service__pic} src={path} alt="phone" />
        <h3 className={s.service__title}>{title}</h3>
        <p className={s.service__text}>{text}</p>
      </div>
    </div>
  );
};

export default CustomAppsCardComponent;
