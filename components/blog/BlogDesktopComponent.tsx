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
                  width: "30.11vw",
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
                  (index < currentSlide &&
                    index > currentSlide - cardsData.length / 2) ||
                  currentSlide + cardsData.length / 2 < index
                    ? { width: "30.11vw", paddingRight: "9vw" }
                    : { width: "30.11vw", paddingLeft: "9vw" }
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
