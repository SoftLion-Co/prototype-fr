"use client";

import HeadingComponent from "@/components/HeadingComponent";
import s from "./OurTeamStatic.module.scss";
import OurTeamCard from "@/components/team/OurTeamCardComponent";

import MobileSliderComponent from "@/components/MobileSliderComponent";
import Image, { StaticImageData } from "next/image";

import AvatarTetiana from "./../../../images/avatar/Tetiana.jpg";

const OurTeamSetcion = () => {
  interface Props {
    id: string;
    name: string;
    position: string;
    avatar: string | StaticImageData;
    linkedinUrl: string;
  }

  const response: Props[] = [
    {
      id: "1",
      name: "Pavlo Graur",
      position: "CEO",
      avatar:
        "https://media.licdn.com/dms/image/D4E03AQGCS4dmL8ZCLQ/profile-displayphoto-shrink_800_800/0/1697010844966?e=1702512000&v=beta&t=o1zowEeuAk2Y-eW6DL6IrIzkaOMJgeVbSD9uEHIY_lM",
      linkedinUrl: "https://www.linkedin.com/in/paul-graur-07526a247/",
    },
    {
      id: "2",
      name: "Yurii Matvii",
      position: "CTO",
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQExYG63eDOhMA/profile-displayphoto-shrink_800_800/0/1687091721886?e=1698883200&v=beta&t=-ZgKukPHBgsrNkj0otDaHor8eqc-i39V6zYc9S7RgS8",
      linkedinUrl: "https://www.linkedin.com/in/yurii-matvii-179766230/",
    },
    {
      id: "3",
      name: "Vira Lyzen",
      position: "Head Of Development",
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQGnDWtRjuaD0w/profile-displayphoto-shrink_800_800/0/1692445989303?e=1698883200&v=beta&t=8y0QUHF6KuNjAFL46TCj8bzUFdc7ZjFJ_9Rs141LXjA",
      linkedinUrl: "https://www.linkedin.com/in/vira-lyzen-a63ba1281/",
    },
    {
      id: "4",
      name: "Tetiana Hlushko",
      position: "UI/UX Designer",
      avatar: AvatarTetiana,
      linkedinUrl: "",
    },
  ];

  return (
    <section className={s.team}>
      <div className={s.container}>
        <div className={s.team__title}></div>
        <HeadingComponent customClass={s.team__title} text="Our team" />
        <div className={s.team__container}>
          {response.map((member) => (
            <OurTeamCard data={member} isActive={false} />
          ))}
        </div>
      </div>
      <div className={s.mobile__slider}>
        <MobileSliderComponent data={response} SlideComponent={OurTeamCard} />
      </div>
    </section>
  );
};

export default OurTeamSetcion;
