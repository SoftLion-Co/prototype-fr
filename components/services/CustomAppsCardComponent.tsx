import s from "./CustomAppsCardComponent.module.scss";
import React, { FC, ReactNode, ComponentProps } from "react";
// import pic from "../../images/services/custom-apps/Apps.svg";
import { PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

interface CustomAppsCardComponentProps {
  arrow?: boolean;
  path?: any;
  title?: string;
  text?: string;
  text_mob?: string;
}

const CustomAppsCardComponent: FC<CustomAppsCardComponentProps> = ({
  arrow = false,
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
        {arrow ? (
          <Link href="/services" className={s.servicecard__link}>
            <PiArrowRightThin
              className={s.servicecard__arrow}
              width="51px"
              height="49px"
            />
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CustomAppsCardComponent;
