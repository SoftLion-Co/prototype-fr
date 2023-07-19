"use client";

import s from "./OurProjectsSection.module.scss";
import ProjectHeadingComponent from "./../../../components/projects/ProjectHeadingComponent";
import ProjectCardComponent from "./../../../components/projects/ProjectCardComponent";
import { Carousel } from "@mantine/carousel";
import React, { useState } from "react";

const sampleData = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Move",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Move",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Move",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
  },
];

const OurProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={s.projects}>
      <ProjectHeadingComponent />
      <Carousel
        className={s.projects__mobile}
        onSlideChange={(index) => {
          setCurrentSlide(index);
        }}
        withIndicators
        withControls={false}
        loop={true}
        slideSize="clamp(250px,90vw,480px)"
        styles={{
          viewport: {
            height: "70%",
            paddingBottom: "37px",
          },
          indicators: {
            alignItems: "center",
            paddingTop: "clamp(5px,5vw,15px)",
            marginLeft: "20px",
            marginRight: "20px",
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
            height: "calc(clamp(220px,90vw,400px)*0.02)",
            width: `calc(clamp(220px,90vw,400px)/${sampleData.length})`,
            backgroundColor: "gray",
            [`:nth-child(${currentSlide + 1})`]: {
              margin: "-0.2vw",
              zIndex: 1,
              backgroundColor: "#A7CAF0",
              borderRadius: "100px",
              height: "calc(clamp(220px,90vw,450px)*0.02*1.5)",
              width: `calc(clamp(220px,90vw,450px)/${sampleData.length}*1.3)`,
            },
          },
        }}
      >
        {sampleData.map((data, index) => (
          <Carousel.Slide key={index} style={{ marginRight: "40px" }}>
            <ProjectCardComponent key={data.id} data={data} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default OurProjectsSection;
