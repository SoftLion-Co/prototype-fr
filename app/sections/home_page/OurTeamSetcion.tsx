"use client";

import HeadingComponent from "@/components/HeadingComponent";
import s from "./OurTeamSetcion.module.scss";
import classNames from "classnames";
import OurTeamCard from "@/components/team/OurTeamCardComponent";
import { Carousel } from "@mantine/carousel";
import { useState } from "react";
import MobileSliderComponent from "@/components/MobileSliderComponent";

const OurTeamSetcion = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  const response = [
    {
      id: "1",
      name: "Gregory Rackham",
      position: "Project Manager",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
    },
    {
      id: "2",
      name: "Michael Jackson",
      position: "CEO",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
    },
    {
      id: "3",
      name: "Jon Statham",
      position: "Frontend Developer",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
    },
    {
      id: "4",
      name: "Rob Stand",
      position: "Backend Developer",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
    },
    {
      id: "5",
      name: "Tom Cruz",
      position: "Frontend Developer",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
    },
    {
      id: "6",
      name: "Jacky Chan",
      position: "QA Engineer",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
    },
    {
      id: "7",
      name: "Marry Jain",
      position: "CTO",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
    },
    {
      id: "8",
      name: "Mary Popins",
      position: "Data Analist",
      avatar: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
    },
  ];

  return (
    <div className={classNames(s.container, s.team_section)}>
      <HeadingComponent customClass={s.team_section_title} text="Our team" />
      <div className={s.mobile_slider}>
        <MobileSliderComponent data={response} SlideComponent={OurTeamCard} />
      </div>
      <div className={s.desctop_slider}>
        <Carousel
          classNames={{ container: s.custom, control: s.custom_control }}
          onSlideChange={(index) => {
            const slideIndex = index + 2 < response.length ? index + 2 : index + 2 - response.length;
            setCurrentSlide(slideIndex);
          }}
          slideSize="20%"
          align="start"
          loop
          slidesToScroll={1}
          speed={3}
        >
          {response.map((member, index) => (
            <Carousel.Slide key={member.id}>
              <OurTeamCard data={member} isActive={currentSlide === index}/>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurTeamSetcion;
