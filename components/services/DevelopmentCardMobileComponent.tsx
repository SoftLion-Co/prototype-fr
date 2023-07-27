import s from "./DevelopmentCardComponent.module.scss";
import React, { FC, ReactNode, ComponentProps } from "react";
import Image from "next/image";


interface DevelopmentCardMobileComponentProps {
  path?: any;
  title?: string;
  items: string[];
  num?: number;
  variant: "variant1" | "variant2";
}

const DevelopmentCardMobileComponent: FC<DevelopmentCardMobileComponentProps> = ({
  path,
  title,
  items,
  num,
}) => {
  return (
    
    <div className={s.develop__card}>
      <div className={s.develop__upsection}>
        <div className={s.develop__wrap}>
        <p className={s.develop__num}>{num}</p>
        <Image
          className={s.develop__pic1}
          src={path}
          alt="develop"
        />
        </div>
        <h3 className={s.develop__title}>{title}</h3>
      </div>
      <ul className={s.develop__list}>
              {items.map((item, index) => (
                <li className={s.develop__item} key={index}>
                  {item}
                </li>
              ))}
            </ul>
    </div>
  );
};

export default DevelopmentCardMobileComponent;



      