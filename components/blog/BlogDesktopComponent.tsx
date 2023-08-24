import React, { useEffect, useState } from "react";
import BlogRolledCardComponent from "./BlogRolledCardComponent";
import BlogExtendedCardComponent from "./BlogExtendedCardComponent";
import s from "./BlogDesktopComponent.module.scss";
import { Carousel, Embla } from "@mantine/carousel";
import ArrowLeft from "../../images/navigation/arrow-left.svg";
import ArrowRight from "../../images/navigation/arrow-right.svg";
import Image from "next/image";

interface BlogExtendedCardComponentProps {
  id: number;
  title: string;
  authorId: string;
  author: string;
  authorIconSrc: string;
  readingTime: string;
  text: string;
  imageSrc: string;
  tags: string[];
}

interface BlogDesktopProps {
  cardsData: BlogExtendedCardComponentProps[];
}

const BlogDesktopComponent: React.FC<BlogDesktopProps> = ({ cardsData }) => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={s.slider}>
      <Carousel
        getEmblaApi={setEmbla}
        loop
        onSlideChange={(index) => {
          setCurrentSlide(index);
        }}
        
        previousControlIcon={
          <Image
            className={s.arrow}
            height={30}
            width={30}
            src={ArrowLeft}
            alt="<"
          ></Image>
        }
        nextControlIcon={
          <Image
            className={s.arrow}
            height={30}
            width={30}
            src={ArrowRight}
            alt=">"
          ></Image>
        }
        skipSnaps
        styles={{
          viewport: {
            paddingTop: "5%",
            paddingBottom: "4.5%",
          },
          controls: {
            bottom: 0,
            top: 0,
            padding: 0,
            maxWidth: "100vw",
            width: "106%",
            left: "-3%",
          },
          control: {
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "0",
          },
          container: {
            alignItems: "center",
          },
        }}
        align="center"
      >
        {cardsData.map((x, index) => (
          <>
            {currentSlide === index ? (
              <div className={s.slider__card_extended}>
                <Carousel.Slide key={index}>
                  <BlogExtendedCardComponent
                    id={x.id}
                    text={x.text}
                    authorId={x.authorId}
                    author={x.author}
                    imageSrc={x.imageSrc}
                    authorIconSrc={x.authorIconSrc}
                    title={x.title}
                    readingTime={x.readingTime}
                    tags={x.tags}
                  />
                </Carousel.Slide>
              </div>
            ) : (
              <div
                className={
                  currentSlide - 1 === index ||
                  (currentSlide === 0 && index === cardsData.length - 1)
                    ? s.slider__card_left
                    : currentSlide + 1 === index ||
                      (currentSlide === cardsData.length - 1 && index === 0)
                    ? s.slider__card_right
                    : s.slider__card_default
                }
              >
                <Carousel.Slide
                  onClick={
                    currentSlide - 1 === index ||
                    (currentSlide === 0 && index === cardsData.length - 1)
                      ? () => {
                          embla?.scrollPrev();
                        }
                      : currentSlide + 1 === index ||
                        (currentSlide === cardsData.length - 1 && index === 0)
                      ? () => {
                          embla?.scrollNext();
                        }
                      : undefined
                  }
                  key={index}
                >
                  <BlogRolledCardComponent
                    title={x.title}
                    imageSrc={x.imageSrc}
                  />
                </Carousel.Slide>
              </div>
            )}
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogDesktopComponent;
