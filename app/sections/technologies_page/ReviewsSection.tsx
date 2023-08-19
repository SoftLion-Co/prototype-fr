// ReviewsSection.tsx
import React, { FC, useState } from "react";
import s from "./ReviewsSection.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { Carousel, Embla } from "@mantine/carousel";

import HeadingComponent from "@/components/technologies/HeadingComponent";
import ReviewsCardComponent from "@/components/technologies/ReviewsCardComponent";
import MobileSliderComponent from "@/components/MobileSliderComponent";

import ArrowLeft from "../../../images/navigation/arrow-left.svg";
import ArrowRight from "../../../images/navigation/arrow-right.svg";

interface reviewsItem {
  name: string;
  rating: number;
  paragraph: string;
}

interface Props {
  reviewsSection: reviewsItem[];
}

const ReviewsSection: FC<Props> = ({ reviewsSection }) => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideData = reviewsSection.map((review, index) => ({
    id: index.toString(),
    isActive: currentSlide === index,
  }));

  const setActiveSlide = (index: number): void => {
    embla?.scrollTo(index);
    setCurrentSlide(index);
  };

  return (
    <section className={s.review}>
      <div className={s.review__heading}>
        <HeadingComponent color="turquoise" text={`Reviews`} />
      </div>

      <div className={s.review__cards_mobile}>
        <MobileSliderComponent
          data={slideData}
          SlideComponent={ReviewsCardComponent}
        />
      </div>

      <div className={classNames(s.container, s.review__content)}>
        <Carousel
          getEmblaApi={setEmbla}
          onSlideChange={(index) => setCurrentSlide(index)}
          classNames={{ control: s.custom__control }}
          previousControlIcon={
            <Image
              className={classNames(s.arrow, s.arrow__left)}
              src={ArrowLeft}
              alt="45"
            />
          }
          nextControlIcon={
            <Image
              className={classNames(s.arrow, s.arrow__right)}
              src={ArrowRight}
              alt="45"
            />
          }
          align="start"
          slideSize="50%"
          loop
          slidesToScroll={1}
        >
          {slideData.map((slide, index) => (
            <Carousel.Slide
              key={slide.id}
              onClick={() => setActiveSlide(index)}
            >
              <div className={classNames(s.review__card, s.custom__slide)}>
                <ReviewsCardComponent data={reviewsSection[index]} />
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ReviewsSection;
