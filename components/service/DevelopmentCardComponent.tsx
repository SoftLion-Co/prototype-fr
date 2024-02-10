import React, { FC } from "react";
import Image from "next/image";
import s from "./DevelopmentCardComponent.module.scss";

interface DevelopmentCardComponentProps {
  path?: any;
  title?: string;
  items: string[];
  num?: number;
  leftAligned?: boolean;
}

const DevelopmentCardComponent: FC<DevelopmentCardComponentProps> = ({
  path,
  title,
  items,
  num,
  leftAligned,
}) => {
  return (
    <div className={s.develop}>
      <div className={s.develop__title}>{title}</div>
      <div className={s.develop__box}>
        {leftAligned ? (
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
