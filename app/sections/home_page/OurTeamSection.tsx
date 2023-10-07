"use client";

import HeadingComponent from "@/components/HeadingComponent";
import s from "./OurTeamSection.module.scss";
import classNames from "classnames";
import OurTeamCard from "@/components/team/OurTeamCardComponent";
import { Carousel, Embla } from "@mantine/carousel";
import { useState } from "react";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import Image, { StaticImageData } from "next/image";
import ArrowLeft from "../../../images/navigation/arrow-left.svg";
import ArrowRight from "../../../images/navigation/arrow-right.svg";
import AvatarTetiana from "./../../../images/avatar/Tetiana.jpg";
import AvatarYan from "./../../../images/avatar/Yan.jpeg";
import { usePathname } from "next/navigation";
import data from "@/data/blog/authors_data_test.json";

const OurTeamSetcion = () => {
  const pathname = usePathname();

  const isOnHomePage = pathname === "/";
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  interface Props {
    id: number;
    name: string;
    position: string;
    avatar: string;
    generalInfo: string;
    linkedinUrl: string;
  }

  const response: Props[] = data;

  const setActiveCard = (index: number): void => {
    const slideIndex = isOnHomePage
      ? index - 1 > 0
        ? index - 1
        : index - 1 + teamMembers.length
      : index - 2 > 0
      ? index - 2
      : index - 2 + teamMembers.length;
    embla?.scrollTo(slideIndex);
  };

  const firstFourTeamMembers = response.slice(0, 5);

  const teamMembers = isOnHomePage ? firstFourTeamMembers : response;

  return (
    <div className={s.team}>
      <div className={s.container}>
        <HeadingComponent customClass={s.team__title} text="Our team" />
        <div className={s.desctop__slider}>
          <Carousel
            getEmblaApi={setEmbla}
            classNames={{ control: s.custom__control }}
            onSlideChange={(index) => {
              const slideIndex = isOnHomePage
                ? index + 1 < teamMembers.length
                  ? index + 1
                  : index + 1 - teamMembers.length
                : index + 2 < teamMembers.length
                ? index + 2
                : index + 2 - teamMembers.length;
              setCurrentSlide(slideIndex);
            }}
            previousControlIcon={
              <Image
                className={classNames(s.arrow, s.arrow__left)}
                height={30}
                width={30}
                src={ArrowLeft}
                alt="<"
              ></Image>
            }
            nextControlIcon={
              <Image
                className={classNames(s.arrow, s.arrow__right)}
                height={30}
                width={30}
                src={ArrowRight}
                alt=">"
              ></Image>
            }
            slideSize={isOnHomePage ? "33.3%" : "20%"}
            align="start"
            loop
            slidesToScroll={1}
          >
            {teamMembers.map((member, index) => (
              <Carousel.Slide
                onClick={() => setActiveCard(index)}
                key={member.id}
              >
                <OurTeamCard data={member} isActive={currentSlide === index} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
      <div className={s.mobile__slider}>
        <MobileSliderComponent
          data={teamMembers}
          SlideComponent={OurTeamCard}
        />
      </div>
    </div>
  );
};

export default OurTeamSetcion;
