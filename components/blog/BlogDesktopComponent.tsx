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
        skipSnaps
        loop
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
              <div
                style={{
                  overflow: "visible",
                  width: "clamp(0px,31.11vw,470px)",
                  display: "flex",
                  justifyContent: "center",
                }}>
                <Carousel.Slide key={index}>
                  <BlogExtendedCardComponent
                    text={x.text}
                    author={x.author}
                    imageSrc={x.imageSrc}
                    authorIconSrc={x.authorIconSrc}
                    title={x.title}
                    readingTime={x.readingTime}
                  />
                </Carousel.Slide>
              </div>
            ) : (
              <div
                style={
                  currentSlide - 1 === index ||
                  (currentSlide === 0 && index === cardsData.length - 1)
                    ? { padding: "0 clamp(0px,10vw,150px) 0 0" }
                    : currentSlide + 1 === index ||
                      (currentSlide === cardsData.length - 1 && index === 0)
                    ? { padding: "0 0 0 clamp(0px,10vw,150px)" }
                    : { padding: "0 clamp(0px,5vw,75px) 0 clamp(0px,5vw,75px)" }
                }>
                <Carousel.Slide key={index}>
                  <BlogRolledCardComponent
                    title={x.title}
                    imageUrl={x.imageSrc}
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
