import s from "./DevelopmentCardMobileComponent.module.scss";
import React, { FC, ReactNode, ComponentProps } from "react";
import Image from "next/image";

interface DevelopmentCardMobileComponentProps {
  path?: any;
  title?: string;
  items: string[];
  num?: number;
}

const DevelopmentCardMobileComponent: FC<
  DevelopmentCardMobileComponentProps
> = ({ path, title, items, num }) => {
  return (
    <section className={s.develop}>
      <div className={s.develop__upsection}>
        <div className={s.develop__wrap}>
          <p className={s.develop__num}>{num}</p>
          <Image className={s.develop__pic1} src={path} alt="develop" />
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
    </section>
  );
};

export default DevelopmentCardMobileComponent;
