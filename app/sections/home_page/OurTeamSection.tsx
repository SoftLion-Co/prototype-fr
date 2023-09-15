"use client";

import HeadingComponent from "@/components/HeadingComponent";
import s from "./OurTeamSection.module.scss";
import classNames from "classnames";
import OurTeamCard from "@/components/team/OurTeamCardComponent";
import { Carousel, Embla } from "@mantine/carousel";
import { useState, useEffect } from "react";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import Image, { StaticImageData } from "next/image";
import ArrowLeft from "../../../images/navigation/arrow-left.svg";
import ArrowRight from "../../../images/navigation/arrow-right.svg";
import AvatarTetiana from "./../../../images/avatar/Tetiana.jpg";
import AvatarYan from "./../../../images/avatar/Yan.jpeg";
import AuthorService from "./../../../services/author-service";

const OurTeamSetcion = () => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentSlide, setCurrentSlide] = useState(2);

  interface Props {
    id: string;
    name: string;
    employment: string;
    avatar: string | StaticImageData;
    //   linkedinUrl: string;
  }

  const getAllShortAuthors = async () => {
    try {
      const response: Props[] = await AuthorService.getAllShortAuthors();
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data: Props[] = await getAllShortAuthors();
      setResponse(data);
    };

    fetchData();
  }, []);

  const [response, setResponse] = useState<Props[]>([]);

  const setActiveCard = (index: number): void => {
    const slideIndex = index - 2 > 0 ? index - 2 : index - 2 + response.length;
    embla?.scrollTo(slideIndex);
  };

  return (
    <div className={s.team}>
      <div className={s.container}>
        <HeadingComponent customClass={s.team__title} text="Our team" />
        <div className={s.desctop__slider}>
          <Carousel
            getEmblaApi={setEmbla}
            classNames={{ control: s.custom__control }}
            onSlideChange={(index) => {
              const slideIndex =
                index + 2 < response.length
                  ? index + 2
                  : index + 2 - response.length;
              setCurrentSlide(slideIndex);
            }}
            previousControlIcon={
              <Image
                className={classNames(s.arrow, s.arrow__left)}
                height={30}
                width={30}
                src={ArrowLeft}
                alt="<"
              ></Image>
            }
            nextControlIcon={
              <Image
                className={classNames(s.arrow, s.arrow__right)}
                height={30}
                width={30}
                src={ArrowRight}
                alt=">"
              ></Image>
            }
            slideSize="20%"
            align="start"
            loop
            slidesToScroll={1}
          >
            {response.map((member, index) => (
              <Carousel.Slide
                onClick={() => setActiveCard(index)}
                key={member.id}
              >
                <OurTeamCard data={member} isActive={currentSlide === index} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
      <div className={s.mobile__slider}>
        <MobileSliderComponent data={response} SlideComponent={OurTeamCard} />
      </div>
    </div>
  );
};

export default OurTeamSetcion;

//   const response: Props[] = [
//     {
//       id: "1",
//       name: "Pavlo Graur",
//       position: "Developer",
//       avatar: "https://media.licdn.com/dms/image/D4D03AQH746g8dZ8QPA/profile-displayphoto-shrink_800_800/0/1670855656809?e=1698883200&v=beta&t=Xrv7PpcxyXFk8pXqXn-jXQxYVgcXoEgL4XWwX4LLPH0",
//       linkedinUrl: "https://www.linkedin.com/in/paul-graur-07526a247/",
//     },
//     {
//       id: "2",
//       name: "Yurii Matvii",
//       position: "Developer",
//       avatar: "https://media.licdn.com/dms/image/D4D03AQExYG63eDOhMA/profile-displayphoto-shrink_800_800/0/1687091721886?e=1698883200&v=beta&t=-ZgKukPHBgsrNkj0otDaHor8eqc-i39V6zYc9S7RgS8",
//       linkedinUrl: "https://www.linkedin.com/in/yurii-matvii-179766230/",
//     },
//     {
//       id: "3",
//       name: "Dima Klapiychuk",
//       position: "Developer",
//       avatar: "https://media.licdn.com/dms/image/D4D03AQHAgP85JknqKA/profile-displayphoto-shrink_800_800/0/1686751374128?e=1698883200&v=beta&t=Ks5_aBaMfSvX5Obq1Xx-XhwMB6J4qD1M79q_M7coCUo",
//       linkedinUrl: "https://www.linkedin.com/in/dima-klapiychuk-22a989268/",
//     },
//     {
//       id: "4",
//       name: "Vira Lyzen",
//       position: "Developer",
//       avatar: "https://media.licdn.com/dms/image/D4D03AQGnDWtRjuaD0w/profile-displayphoto-shrink_800_800/0/1692445989303?e=1698883200&v=beta&t=8y0QUHF6KuNjAFL46TCj8bzUFdc7ZjFJ_9Rs141LXjA",
//       linkedinUrl: "https://www.linkedin.com/in/vira-lyzen-a63ba1281/",
//     },
//     {
//       id: "5",
//       name: "Danyil Terentiev",
//       position: "Developer",
//       avatar: "https://media.licdn.com/dms/image/D4D35AQFZXHwrdofn8Q/profile-framedphoto-shrink_800_800/0/1676486269690?e=1694077200&v=beta&t=SpX2oizuXc9h_3wrARKMmcEmk3elpkXL43O4SfkyfzU",
//       linkedinUrl: "https://www.linkedin.com/in/%D0%B4%D0%B0%D0%BD%D0%B8%D1%97%D0%BB-%D1%82%D0%B5%D1%80%D0%B5%D0%BD%D1%82%D1%8C%D1%94%D0%B2-b69725203/",
//     },
//     {
//       id: "6",
//       name: "Mykola Semenyuk",
//       position: "Developer",
//       avatar: "https://media.licdn.com/dms/image/D4D03AQFGGqKoLv5QNA/profile-displayphoto-shrink_800_800/0/1692340122447?e=1698883200&v=beta&t=9sz2sJGnuxC4GUG-SPRW9Oefapo9ai1N8xWpjCqtCmI",
//       linkedinUrl: "https://www.linkedin.com/in/semx/",
//     },
//     {
//       id: "7",
//       name: "Tetiana Hlushko",
//       position: "Designer",
//       avatar: AvatarTetiana,
//       linkedinUrl: "",
//     },
//     {
//       id: "8",
//       name: "Andriy Zhuvak",
//       position: "Developer",
//       avatar: "https://media.licdn.com/dms/image/D5603AQFNZqDCu8hJDA/profile-displayphoto-shrink_800_800/0/1686752581922?e=1698883200&v=beta&t=xzhzJEQpfS323SCnNKdT5Fyi-eDsXEkuC9E1aZrnV00",
//       linkedinUrl: "https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D0%B9-%D0%B6%D1%83%D0%B2%D0%B0%D0%BA-12ba8727a/",
//     },
//     {
//       id: "9",
//       name: "Yana Chepyk",
//       position: "Developer",
//       avatar: "https://media.licdn.com/dms/image/D4D03AQFDDm8_RP-qkw/profile-displayphoto-shrink_800_800/0/1678444808175?e=1698883200&v=beta&t=h5UFMGTWM9TFl6l9gmUuemUqZYTR8Wx1MgOzB5h2NYo",
//       linkedinUrl: "https://www.linkedin.com/in/yana-chepyk/",
//     },
//     {
//       id: "10",
//       name: "Misha Zlupko",
//       position: "Developer",
//       avatar: "https://media.licdn.com/dms/image/D4E35AQFRuJ82pNICZQ/profile-framedphoto-shrink_800_800/0/1679052467203?e=1694077200&v=beta&t=PKG5Wq2yulNIW99gZZNNVY21OMwtNxLSO94voBOBY44",
//       linkedinUrl: "https://www.linkedin.com/in/misha-zlupko-150649269/",
//     },
//     {
//       id: "11",
//       name: "Yan Zhabko",
//       position: "Developer",
//       avatar: AvatarYan,
//       linkedinUrl: "https://www.linkedin.com/in/yan-zhabko-860b42165/",
//     },
//     {
//       id: "12",
//       name: "Anastasiia Moskaliuk",
//       position: "Developer",
//       avatar: "https://media.licdn.com/dms/image/D4D03AQEfihpMOuKoUw/profile-displayphoto-shrink_800_800/0/1692794275924?e=1698883200&v=beta&t=RPAjeTRyxbMKqO8vdpSQlu9gI39XOS0PW3zfjUqctFI",
//       linkedinUrl: "https://www.linkedin.com/in/anastasiia-moskaliuk-9048b7288/",
//     },
//     {
//       id: "13",
//       name: "Maxim Fedechko",
//       position: "Developer",
//       avatar: "https://media.licdn.com/dms/image/D4D35AQHtv0bPPdOWjw/profile-framedphoto-shrink_800_800/0/1678909075960?e=1694077200&v=beta&t=OHOPtkKVs8G7zDttlMSVb0StzlcJCXjJwCA9Z0LQyMI",
//       linkedinUrl: "https://www.linkedin.com/in/maxim-fedechko/",
//     },
//   ];
