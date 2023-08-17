"use client"
import React, { FC, useState } from "react";
import s from "./AdvantagesSection.module.scss";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import AdvantagesCardComponent from "@/components/technologies/AdvantagesCardComponent";
import { Carousel, Embla } from "@mantine/carousel";
import Image from "next/image";
import ArrowLeft from "../../../images/navigation/arrow-left.svg";
import ArrowRight from "../../../images/navigation/arrow-right.svg";
import classNames from "classnames";

interface AdvantagesSectionProps {
  paragraphs: string[];
}

const AdvantagesSection: FC<AdvantagesSectionProps> = ({ paragraphs }) => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const slideData = paragraphs.map((paragraph, index) => ({
    id: index.toString(),
    description: paragraph,
    isActive: currentSlide === index,
  }));

  const setActiveSlide = (index: number): void => {
    embla?.scrollTo(index);
    setCurrentSlide(index);
  };

  return (
    <section className={s.advantages}>
      <div className={s.advantages__cards_mobile}>
        <MobileSliderComponent
          data={slideData}
          SlideComponent={AdvantagesCardComponent}
        />
      </div>
      <div className={classNames(s.container, s.advantages__cards_desktop)}>
        <Carousel
          getEmblaApi={setEmbla}
          classNames={{ control: s.custom__control }}
          onSlideChange={(index) => setCurrentSlide(index)}
          previousControlIcon={
            <Image className={classNames(s.arrow, s.arrow__left)} src={ArrowLeft} alt="45" />
          }
          nextControlIcon={
            <Image className={classNames(s.arrow, s.arrow__right)} src={ArrowRight} alt="45" />
          }
          slideSize="33.333%"
          align="center"
          loop
          slidesToScroll={1}
        >
          {slideData.map((slide, index) => (
            <Carousel.Slide key={slide.id} onClick={() => setActiveSlide(index)}>
              <div className={s.slide}>
              <AdvantagesCardComponent data={slide} />
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default AdvantagesSection;
