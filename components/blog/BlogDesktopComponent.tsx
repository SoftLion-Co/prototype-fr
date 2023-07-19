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
        slideSize="21%"
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
          <>
            {currentSlide === index ? (
              <Carousel.Slide key={index}>
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
              </Carousel.Slide>
            ) : (
              <Carousel.Slide key={index}>
                <div>
                  <BlogRolledCardComponent
                    title={x.title}
                    imageUrl={x.imageSrc}
                  />
                </div>
              </Carousel.Slide>
            )}
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogDesktopComponent;
