"use client";

import s from "./TechnologiesSection.module.scss";
import React, { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import UIUX from "../../../images/technologies/UI-UX.svg";
import Ecommerce from "../../../images/technologies/Ecommerce.svg";
import SEO from "../../../images/technologies/SEO.svg";
import API from "../../../images/technologies/API.svg";
import { BiExpandAlt } from "react-icons/bi";
import HeadingComponent from "../../../components/HeadingComponent";

interface Technology {
  id: number;
  imgSrc: string;
  imgAlt: string;
  description: string;
  isOpen: boolean;
}

const TechnologiesSection = () => {
  const [technologiesData, setTechnologiesData] = useState<Technology[]>([
    {
      id: 1,
      imgSrc: UIUX,
      imgAlt: "UI/UX",
      description:
        "UI/UX design is the process of creating interfaces that are intuitive and visually appealing. These interfaces provide a positive user experience when interacting with digital products.",
      isOpen: false,
    },
    {
      id: 2,
      imgSrc: Ecommerce,
      imgAlt: "Ecommerce",
      description:
        "E-commerce businesses utilize online platforms to sell products/services, employing various technologies for transactions, including credit card processing, shipping, and customer service.",
      isOpen: false,
    },
    {
      id: 3,
      imgSrc: SEO,
      imgAlt: "SEO",
      description:
        "SEO optimization is a critical tool for businesses that want to be found online. By optimizing their websites for relevant keywords, businesses can improve their chances of ranking high in search results and attracting more visitors.",
      isOpen: false,
    },
    {
      id: 4,
      imgSrc: API,
      imgAlt: "API",
      description:
        "APIs, or application programming interfaces, are a way for software applications to communicate with each other. They allow applications to share data and functionality, which can enhance functionality and integration.",
      isOpen: false,
    },
  ]);

  const toggleIsOpen = (id: number) => {
    setTechnologiesData((prevData) =>
      prevData.map((tech) =>
        tech.id === id ? { ...tech, isOpen: !tech.isOpen } : tech
      )
    );
  };

  return (
    <section className={classNames(s.container, s.technologies)}>
      <div className={s.technologies__wrapper}>
        <div className={s.technologies__name_header}>
          <HeadingComponent text="Technologies" />
        </div>
        <div className={s.technologies__cards}>
          <div className={s.technologies__cards_wrapper}>
            {technologiesData.map((tech) => (
              <div
                key={tech.id}
                className={classNames(
                  s.technologies__card_wrapper,
                  tech.isOpen ? s.clicked : "",
                  s.flip_card
                )}
                onClick={() => toggleIsOpen(tech.id)}
              >
                <div
                  className={classNames(
                    s.flip_card_inner,
                    s.technologies__card_container
                  )}
                >
                  <div className={s.flip_card_front}>
                    <div className={s.technologies__icon_wrapper}>
                      <BiExpandAlt className={s.technologies__icon_open} />
                    </div>
                    <div className={s.technologies__container_image}>
                      <Image src={tech.imgSrc} alt={tech.imgSrc} />
                    </div>
                    <p className={s.technologies__description_photo}>
                      {tech.imgAlt}
                    </p>
                  </div>
                  <div className={s.flip_card_back}>
                    <p className={s.technologies__text}>{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className={s.blur}>
              <div className={s.blur_item}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
