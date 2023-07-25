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
        skipSnaps
        controlsOffset="xl"
        loop
        styles={{
          viewport: {
            paddingTop: "5%",
            paddingBottom: "5%",
          },
          controls: {
            gap: 0,
            padding: 0,
          },
          control: {
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "0",
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
              <div className={s.blogDesktop__extendedCard}>
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
                className={
                  currentSlide - 1 === index ||
                  (currentSlide === 0 && index === cardsData.length - 1)
                    ? s.blogDesktop__rolledCardLeft
                    : currentSlide + 1 === index ||
                      (currentSlide === cardsData.length - 1 && index === 0)
                    ? s.blogDesktop__rolledCardRight
                    : s.blogDesktop__rolledCardDefault
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
