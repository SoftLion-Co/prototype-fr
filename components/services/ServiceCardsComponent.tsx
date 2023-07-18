import s from "./ServiceCardsComponent.module.scss";
import React, { FC, ReactNode, ComponentProps } from "react";
import classNames from "classnames";
import Link from "next/link";
import phone from "../../images/services/custom-apps/Apps.svg";
import { PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";

interface ServiceCardsComponentProps {
  arrow: boolean;
}

const ServiceCardsComponent: FC<ServiceCardsComponentProps> = ({
  arrow = false,
}) => {
  return (
    <div className={s.servicecard}>
      <Image className={s.servicecard__phone} src={phone} alt="phone" />
      <h2>App</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi
        officiis ex, quam similique ullam dolore! Illum ab facere fuga sint, non
        facilis exercitationem laboriosam rem? Consectetur illo deleniti magni.
      </p>
      {arrow?
      <button>
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
