"use client";

import Image from "next/image";
import classNames from "classnames";
import React, { useState, useCallback } from "react";
import s from "./TechnologiesSection.module.scss";

import UIUX from "../../../images/technologies/UI-UX.svg";
import Ecommerce from "../../../images/technologies/Ecommerce.svg";
import SEO from "../../../images/technologies/SEO.svg";
import Studio from "../../../images/technologies/Studio.svg";

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
      imgSrc: Studio,
      imgAlt: "Web-Studio",
      description:
        "SoftLion - your partner in web development. We create captivating landing pages to enhance your online presence and conversion. Trust your business to SoftLion professionals and impress the world with your unique style!",
      isOpen: false,
    },
    {
      id: 4,
      imgSrc: SEO,
      imgAlt: "SEO",
      description:
        "SEO optimization is a critical tool for businesses that want to be found online. By optimizing their websites for relevant keywords, businesses can improve their chances of ranking high in search results and attracting more visitors.",
      isOpen: false,
    },
  ]);

  const toggleIsOpen = useCallback((id: number) => {
    setTechnologiesData((prevData) =>
      prevData.map((tech) =>
        tech.id === id ? { ...tech, isOpen: !tech.isOpen } : tech
      )
    );
  }, []);

  return (
    <section className={s.technologies}>
      <div className={s.container}>
        <HeadingComponent text="Technologies" />
        <div className={classNames(s.technologies__cards_wrapper)}>
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
                className={classNames(s.flip_card_inner, s.technologies__cards)}
              >
                <div className={s.flip_card_front}>
                  <div className={s.technologies__icon_wrapper}>
                    <BiExpandAlt className={s.technologies__icon_open} />
                  </div>
                  <div className={s.technologies__images}>
                    <Image
                      className={s.technologies__image}
                      src={tech.imgSrc}
                      alt={tech.imgSrc}
                    />
                  </div>
                  <h3 className={s.technologies__description_photo}>
                    {tech.imgAlt}
                  </h3>
                </div>
                <div className={s.flip_card_back}>
                  <p className={s.technologies__text}>{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={s.blur}>
        <div className={s.blur_item}></div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
