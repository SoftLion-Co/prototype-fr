import React, { useState } from "react";
import BlogRolledCardComponent from "./BlogRolledCardComponent";
import BlogExtendedCardComponent from "./BlogExtendedCardComponent";
import s from "./BlogDesktopComponent.module.scss";
import { Carousel } from "@mantine/carousel";

interface BlogExtendedCardComponentProps {
  title: string;
  author: string;
  authorIconSrc: string;
  readingTime: string;
  text: string;
  imageSrc: string;
}

interface BlogDesktopProps {
  cardsData: BlogExtendedCardComponentProps[];
}

const BlogDesktopComponent: React.FC<BlogDesktopProps> = ({ cardsData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={s.blogDesktop}>
      <Carousel
        onSlideChange={(index) => {
          setCurrentSlide(index);
        }}
        height="clamp(0px,40vw,600px)"
        slideSize="clamp(0px,45vw,680px)"
        loop
        skipSnaps
        styles={{
          control: {
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "0",
            transform: "scale(1.4)",
            color: "rgb(86, 86, 86)",
          },
          container: {
            alignItems: "center",
          },
          indicator: {
            backgroundColor: "gray",
          },
        }}
        controlSize={40}
        align="center">
        {cardsData.map((x, index) => (
          <Carousel.Slide key={index}>
            {currentSlide === index ? (
              <div className={s.centeredSlide}>
                <BlogExtendedCardComponent
                  text={x.text}
                  author={x.author}
                  imageSrc={x.imageSrc}
                  authorIconSrc={x.authorIconSrc}
                  title={x.title}
                  readingTime={x.readingTime}
                />
              </div>
            ) : (index < currentSlide &&
                index > currentSlide - cardsData.length / 2) ||
              currentSlide + cardsData.length / 2 < index ? (
              <div className={s.containerR}>
                <BlogRolledCardComponent
                  title={x.title}
                  imageUrl={x.imageSrc}
                />
              </div>
            ) : (
              <div className={s.containerL}>
                <BlogRolledCardComponent
                  title={x.title}
                  imageUrl={x.imageSrc}
                />
              </div>
            )}
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogDesktopComponent;
