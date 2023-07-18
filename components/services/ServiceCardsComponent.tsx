import s from "./ServiceCardsComponent.module.scss";
import React, { FC, ReactNode, ComponentProps } from "react";
// import pic from "../../images/services/custom-apps/Apps.svg";
import { PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";

interface ServiceCardsComponentProps {
  arrow?: boolean;
  path?: any;
  title?: string;
  text?: string;
}

const ServiceCardsComponent: FC<ServiceCardsComponentProps> = ({
  arrow = false,
  path,
  title,
  text,
}) => {
  return (
    <div className={s.servicecard}>
      <Image className={s.servicecard__pic} src={path} alt="phone"  />
      <h2 className={s.servicecard__title}>{title}</h2>
      <p className={s.servicecard__text}>
    {text}
      </p>
      {arrow?
      <button className={s.servicecard__btnArrow}>
        <PiArrowRightThin
          className={s.servicecard__arrow}
          width="51px"
          height="49px"
        />
      </button>
      :null }
    </div>
  );
};

export default ServiceCardsComponent;
