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

interface ReviewData {
  name: string;
  rating: number;
  paragraph: string;
}

interface Props {
  reviewsSection: ReviewData[];
}

const ReviewsSection: FC<Props> = ({ reviewsSection }) => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const setActiveSlide = (index: number): void => {
    if (embla) {
      const currentIndex = currentSlide;
      const numSlides = reviewsSection.length;

      let newIndex;

      if (
        index === currentIndex + 1 ||
        (currentIndex === numSlides - 1 && index === 0)
      ) {
        newIndex = (currentIndex + 1) % numSlides;
      } else {
        newIndex = currentIndex - 1 < 0 ? numSlides - 1 : currentIndex - 1;
      }

      embla.scrollTo(newIndex);
      setCurrentSlide(newIndex);
    }
  };

  return (
    <section className={s.review}>
      <div className={s.review__heading}>
        <HeadingComponent color="turquoise" text={`Reviews`} />
      </div>

      <div className={s.review__cards_mobile}>
        <MobileSliderComponent
          data={reviewsSection}
          SlideComponent={ReviewsCardComponent}
        />
      </div>

      <div className={classNames(s.container, s.review__content)}>
        <Carousel
          getEmblaApi={setEmbla}
          classNames={{ control: s.custom__control }}
          onSlideChange={(index) => setCurrentSlide(index)}
          previousControlIcon={
            <Image
              className={classNames(s.arrow, s.arrow__left)}
              src={ArrowLeft}
              alt="<"
            />
          }
          nextControlIcon={
            <Image
              className={classNames(s.arrow, s.arrow__right)}
              src={ArrowRight}
              alt=">"
            />
          }
          align="start"
          slideSize="50%"
          loop
          slidesToScroll={1}
        >
          {reviewsSection.map((slide, index) => {
            const isActiveSlide = currentSlide === index;

            return (
              <Carousel.Slide key={index} onClick={() => setActiveSlide(index)}>
                <div className={classNames(s.review__card, s.custom__slide)}>
                  <ReviewsCardComponent data={slide} />
                </div>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default ReviewsSection;
