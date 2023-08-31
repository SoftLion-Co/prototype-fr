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
  id: string;
  className: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
  name: string;
  isOpen: boolean;
}

const TechnologiesSection = () => {
  const [technologiesData, setTechnologiesData] = useState<Technology[]>([
    {
      id: "UIUX",
      className: s.technologies__image_uiux,
      imgSrc: UIUX,
      imgAlt: "UI/UX",
      description:
        "UI/UX focuses on designing intuitive and visually appealing interfaces that provide users with a positive experience when interacting with digital products.",
      name: "UI/UX",
      isOpen: false,
    },
    {
      id: "Ecommerce",
      className: s.technologies__image_ecommerce,
      imgSrc: Ecommerce,
      imgAlt: "Ecommerce",
      description:
        "Ecommerce refers to the buying and selling of goods and services online. It involves the creation and management of online stores or platforms where businesses and consumers can engage in transactions.",
      name: "Ecommerce",
      isOpen: false,
    },
    {
      id: "SEO",
      className: s.technologies__image_seo,
      imgSrc: SEO,
      imgAlt: "SEO",
      description:
        "SEO optimization includes the use of keywords, improving website structure, internal and external linking, and other strategies to ensure high organic visibility and attract more visitors to the site. SEO",
      name: "SEO",
      isOpen: false,
    },
    {
      id: "API",
      className: s.technologies__image_api,
      imgSrc: API,
      imgAlt: "API",
      description:
        "APIs provide the ability to exchange data and functionality between various software applications, allowing for enhanced functionality and integration of different services.",
      name: "API",
      isOpen: false,
    },
  ]);

  const toggleIsOpen = (id: string) => {
    setTechnologiesData((prevData) =>
      prevData.map((tech) =>
        tech.id === id ? { ...tech, isOpen: !tech.isOpen } : tech
      )
    );
  };

  return (
    <section className={`${s.container} ${s.technologies}`}>
      <div className={s.technologies__wrapper}>
        <div className={s.technologies__name_header}>
          <HeadingComponent text="Technologies" />
        </div>
        <div className={s.technologies__header_wrapper}>
          <div className={s.technologies__images_wrapper}>
            {technologiesData.map((tech) => (
              <div
                key={tech.id}
                className={`${s.technologies__image_wrapper} ${
                  tech.isOpen ? s.hovered : ""
                }`}
                onClick={() => toggleIsOpen(tech.id)}
              >
                <div className={s.technologies__icon_wrapper}>
                  <BiExpandAlt className={s.technologies__icon_open} />
                </div>
                <div className={s.technologies__card_container}>
                  <Image
                    className={tech.className}
                    src={tech.imgSrc}
                    alt={tech.imgAlt}
                  />
                  <p className={s.technologies__description_photo}>
                    {tech.name}
                  </p>
                  <p className={s.technologies__text_ecommerce}>
                    {tech.description}
                  </p>
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
