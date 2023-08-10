import s from "./AuthorPage.module.scss";
import Line from "../../images/project/line-component.svg";
import React, { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

const AuthorPage: FC = () => {
  const response = {
    name: "Name",
    occupation: "Area of work",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    imgSrc: "",
  };

  const { name, occupation, description, imgSrc } = response;
  return (
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
  );
};

export default AuthorPage;
