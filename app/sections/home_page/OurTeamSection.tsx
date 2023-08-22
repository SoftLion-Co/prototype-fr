"use client";

import HeadingComponent from "@/components/HeadingComponent";
import s from "./OurTeamSection.module.scss";
import classNames from "classnames";
import OurTeamCard from "@/components/team/OurTeamCardComponent";
import { Carousel, Embla } from "@mantine/carousel";
import { useState } from "react";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import Image from "next/image";
import ArrowLeft from "../../../images/navigation/arrow-left.svg";
import ArrowRight from "../../../images/navigation/arrow-right.svg";

const OurTeamSetcion = () => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentSlide, setCurrentSlide] = useState(2);

  const response = [
    {
      id: "1",
      name: "Gregory Rackham",
      position: "Project Manager",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
      linkedinUrl: "",
    },
    {
      id: "2",
      name: "Michael Jackson",
      position: "CEO",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
      linkedinUrl: "",
    },
    {
      id: "3",
      name: "Jon Statham",
      position: "Frontend Developer",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
      linkedinUrl: "",
    },
    {
      id: "4",
      name: "Rob Stand",
      position: "Backend Developer",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
      linkedinUrl: "",
    },
    {
      id: "5",
      name: "Tom Cruz",
      position: "Frontend Developer",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
      linkedinUrl: "",
    },
    {
      id: "6",
      name: "Jacky Chan",
      position: "QA Engineer",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
      linkedinUrl: "",
    },
    {
      id: "7",
      name: "Marry Jain",
      position: "CTO",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
      linkedinUrl: "",
    },
    {
      id: "8",
      name: "Mary Popins",
      position: "Data Analist",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
      linkedinUrl: "",
    },
  ];

  const setActiveCard = (index: number): void => {
    const slideIndex = index - 2 > 0 ? index - 2 : index - 2 + response.length;
    embla?.scrollTo(slideIndex);
  };

  return (
    <div className={classNames(s.container, s.team)}>
      <HeadingComponent customClass={s.team__title} text="Our team" />
      <div className={s.mobile__slider}>
        <MobileSliderComponent data={response} SlideComponent={OurTeamCard} />
      </div>
      <div className={s.desctop__slider}>
        <Carousel
          getEmblaApi={setEmbla}
          classNames={{ control: s.custom__control }}
          onSlideChange={(index) => {
            const slideIndex = index + 2 < response.length ? index + 2 : index + 2 - response.length;
            setCurrentSlide(slideIndex);
          }}
          previousControlIcon={
            <Image className={classNames(s.arrow, s.arrow__left)} height={30} width={30} src={ArrowLeft} alt="<"></Image>
          }
          nextControlIcon={<Image className={classNames(s.arrow, s.arrow__right)} height={30} width={30} src={ArrowRight} alt=">"></Image>}
          slideSize="20%"
          align="start"
          loop
          slidesToScroll={1}
        >
          {response.map((member, index) => (
            <Carousel.Slide onClick={() => setActiveCard(index)} key={member.id}>
              <OurTeamCard data={member} isActive={currentSlide === index} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurTeamSetcion;
