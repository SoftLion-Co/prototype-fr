import React, { FC } from "react";
import s from "./HeadingOurProjectComponent.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Line from "../../images/project/line-component.svg";

interface HeadingOurProjectComponentProps {
  title: string;
  text: string;
}

const HeadingOurProjectComponent: FC<HeadingOurProjectComponentProps> = ({
  title,
  text,
}) => {
  return (
    <div className={classNames(s.container, s.heading)}>
      <p className={s.heading__title}>{title}</p>
      <Image src={Line} alt="" className={s.heading__svg} />
      <h2 className={s.heading__text}>{text}</h2>
    </div>
  );
};

export default HeadingOurProjectComponent;
