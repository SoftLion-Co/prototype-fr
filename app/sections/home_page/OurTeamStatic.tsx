"use client";

import HeadingComponent from "@/components/HeadingComponent";
import s from "./OurTeamStatic.module.scss";
import classNames from "classnames";
import OurTeamCard from "@/components/team/OurTeamCardComponent";
import { Carousel, Embla } from "@mantine/carousel";
import { useState } from "react";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import Image, { StaticImageData } from "next/image";

import AvatarTetiana from "./../../../images/avatar/Tetiana.jpg";
import AvatarYan from "./../../../images/avatar/Yan.jpeg";
import data from "@/data/blog/authors_data_test.json";

const OurTeamSetcion = () => {
  interface Props {
    id: number;
    name: string;
    position: string;
    avatar: string;
    generalInfo: string;
    linkedinUrl: string;
  }

  const response: Props[] = data;

  return (
    <div className={s.team}>
      <div className={s.container}>
        <div className={s.team__title}></div>
        <HeadingComponent customClass={s.team__title} text="Our team" />
        <div className={s.team__container}>
          {response.map((member, index) => (
            <OurTeamCard data={member} isActive={false} />
          ))}
        </div>
      </div>
      <div className={s.mobile__slider}>
        <MobileSliderComponent data={response} SlideComponent={OurTeamCard} />
      </div>
    </div>
  );
};

export default OurTeamSetcion;
