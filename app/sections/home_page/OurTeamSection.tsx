"use client";

import HeadingComponent from "@/components/HeadingComponent";
import s from "./OurTeamSection.module.scss";
import classNames from "classnames";
import OurTeamCard from "@/components/team/OurTeamCardComponent";
import { Carousel, Embla } from "@mantine/carousel";
import { useState, useEffect } from "react";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import Image, { StaticImageData } from "next/image";
import ArrowLeft from "../../../images/navigation/arrow-left.svg";
import ArrowRight from "../../../images/navigation/arrow-right.svg";
import AuthorService from "./../../../services/author-service";

const OurTeamSetcion = () => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentSlide, setCurrentSlide] = useState(2);

  interface Props {
    id: string;
    name: string;
    position: string;
    avatar: string | StaticImageData;
    linkedinUrl: string;
  }

//   const getAllShortAuthors = async () => {
//     try {
//       const response: Props[] = await AuthorService.getAllShortAuthors();
//       console.log(response);
//       return response;
//     } catch (error) {
//       console.error(error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const data: Props[] = await getAllShortAuthors();
//       setResponse(data);
//     };

//     fetchData();
//   }, []);

//   const [response, setResponse] = useState<Props[]>([]);

  const setActiveCard = (index: number): void => {
    const slideIndex = index - 2 > 0 ? index - 2 : index - 2 + response.length;
    embla?.scrollTo(slideIndex);
  };

  return (
    <div className={s.team}>
      <div className={s.container}>
        <HeadingComponent customClass={s.team__title} text="Our team" />
        <div className={s.desctop__slider}>
          <Carousel
            getEmblaApi={setEmbla}
            classNames={{ control: s.custom__control }}
            onSlideChange={(index) => {
              const slideIndex =
                index + 2 < response.length
                  ? index + 2
                  : index + 2 - response.length;
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
            slideSize="20%"
            align="start"
            loop
            slidesToScroll={1}
          >
            {response.map((member, index) => (
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
        <MobileSliderComponent data={response} SlideComponent={OurTeamCard} />
      </div>
    </div>
  );
};

export default OurTeamSetcion;
