import { useState } from "react";
import BlogMobileExtendedCardComponent from "./BlogMobileExtendedCardComponent";
import { Carousel } from "@mantine/carousel";

interface BlogExtendedMobileCardComponentProps {
  title: string;
  text: string;
  author?: string;
  authorIconSrc?: string;
  readingTime?: string;
  imageSrc: string;
}

interface BlogMobileProps {
  cardsData: BlogExtendedMobileCardComponentProps[];
}

const BlogMobileComponent: React.FC<BlogMobileProps> = ({ cardsData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Carousel
      onSlideChange={(index) => {
        setCurrentSlide(index);
      }}
      withIndicators
      withControls={false}
      loop={true}
      slideSize="clamp(250px,90vw,480px)"
      styles={{
        viewport: {
          height: "clamp(270px,95vw,500px)",
        },
        indicators: {
          alignItems: "center",
          paddingTop: "clamp(5px,5vw,15px)",
          position: "relative",
          gap: 0,
        },
        indicator: {
          borderRadius: 0,
          ":last-child": {
            borderRadius: "0 100px 100px 0",
          },
          ":first-child": {
            borderRadius: "100px 0 0 100px",
          },
          height: "calc(clamp(220px,90vw,450px)*0.02)",
          width: `calc(clamp(220px,90vw,450px)/${cardsData.length})`,
          backgroundColor: "gray",
          [`:nth-child(${currentSlide + 1})`]: {
            margin: "-0.2vw",
            zIndex: 1,
            backgroundColor: "#A7CAF0",
            borderRadius: "100px",
            height: "calc(clamp(220px,90vw,450px)*0.02*1.5)",
            width: `calc(clamp(220px,90vw,450px)/${cardsData.length}*1.3)`,
          },
        },
      }}>
      {cardsData.map((x, index) => (
        <Carousel.Slide key={index}>
          <BlogMobileExtendedCardComponent
            text={x.text}
            imageSrc={x.imageSrc}
            title={x.title}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default BlogMobileComponent;
