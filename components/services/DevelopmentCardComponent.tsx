import s from "./DevelopmentCardComponent.module.scss";
import React, { FC, ReactNode, ComponentProps } from "react";
// import { PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import point from "../../images/services/development/point.svg";

interface DevelopmentCardComponentProps {
  path?: any;
  title?: string;
  items: string[];
  num?: number;
  variant: "variant1" | "variant2";
}

const DevelopmentCardComponent: FC<DevelopmentCardComponentProps> = ({
  path,
  title,
  items,
  num,
  variant,
}) => {
  return (
    <div className={s.develop}>
      <div className={s.develop__title}>{title}</div>
      <div className={s.develop__box}>
        {variant === "variant1" ? (
          <>
            <Image className={s.develop__pic} src={path} alt="development" />
            <ul className={s.develop__list}>
              {items.map((item, index) => (
                <li className={s.develop__item} key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <p className={s.develop__num}>{num}</p>
          </>
        ) : (
          <>
              <p className={s.develop__num}>{num}</p>
              <Image className={s.develop__pic} src={path} alt="development" />
          <ul className={s.develop__list}>
              {items.map((item, index) => (
                <li className={s.develop__item} key={index}>
                  {item}
                </li>
              ))}
            </ul>
            
            
        
          </>
        )}
      </div>
    </div>
  );
};

export default DevelopmentCardComponent;
