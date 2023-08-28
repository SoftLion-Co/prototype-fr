import s from "./AuthorSection.module.scss";
import Line from "../../../images/project/line-component.svg";
import React, { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

interface AuthorPageProps {
  name: string;
  occupation: string;
  description: string;
  imgSrc: string;
}

const AuthorPage: FC<AuthorPageProps> = ({
  name,
  occupation,
  description,
  imgSrc,
}) => {
  return (
    <section>
      <div className={classNames(s.page, s.container)}>
        <div className={s.info}>
          <div className={s.profile}>
            <img className={s.profile__img} src={imgSrc} alt="" />
            <p className={s.profile__name}>{name}</p>
          </div>
          <p className={s.info__occupation}>{occupation}</p>
        </div>
        <p className={s.page__about}>About me</p>
        <Image src={Line} alt="" className={s.page__line} />
        <p className={s.page__description}>{description}</p>
      </div>
    </section>
  );
};

export default AuthorPage;
