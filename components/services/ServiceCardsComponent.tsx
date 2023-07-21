// ServiceCardsComponent.tsx: Головний компонент для відображення групи карток послуг
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import s from "./ServiceCardsComponent.module.scss";
import LargeServiceCardComponent from "./LargeServiceCardComponent";
import SmallServiceCardComponent from "./SmallServiceCardComponent";
import Design from "./../../images/services/ecommerce/Design.png";
import Development from "./../../images/services/ecommerce/Development.svg";
import Security from "./../../images/services/ecommerce/Security.svg";
import Vector from "./../../images/services/ecommerce/Vector.svg";

const ServiceCardsComponent: React.FC = () => {
  // Масив з даними про послуги
  const cardComponent = [
    {
      title: "Design",
      paragraph:
        "The process of making a signature for the product design block is important because it helps to create a unique identity for the product. It should be designed to reflect the brand’s values and mission, as well as the product’s purpose and features. The signature should be simple, memorable, and recognizable. It should also be versatile enough to be used in a variety of contexts, such as on the product’s packaging, website, and promotional materials. The signature should be designed to be easily recognizable and to stand out from the competition. It should also be designed to be timeless, so that it can be used for years to come",
      image: Design,
      vector: Vector,
    },
    {
      title: "Development",
      paragraph:
        "Site development and web applications offer a variety of advantages to businesses and individuals. For businesses, web applications can provide a cost-effective way to reach a larger audience, increase efficiency, and reduce operational costs. Web applications can also help businesses to improve customer service, increase sales, and gain a competitive edge. For individuals, web applications can provide a convenient way to access information, stay connected with friends and family, and even make purchases online.",
      image: Development,
      vector: Vector,
    },
    {
      title: "Security",
      paragraph:
        "We thoroughly test websites and applications to identify potential weaknesses and vulnerabilities, taking measures to address them. We also implement protective mechanisms such as data encryption, authentication, authorization, backups, and system monitoring to ensure a high level of security for our clients.",
      image: Security,
      vector: Vector,
    },
  ];

  // Стан для відображення даних про центральну, ліву та праву картки
  const [centerCardData, setCenterCardData] = useState(cardComponent[0]);
  const [leftCardData, setLeftCardData] = useState(cardComponent[1]);
  const [rightCardData, setRightCardData] = useState(cardComponent[2]);

  // Обробник події кліку на малу картку послуги
  const handleSmallCardClick = (
    title: string,
    paragraph: string,
    image: StaticImageData
  ) => {
    // Check if the clicked card is already in the center
    if (
      title === centerCardData.title &&
      paragraph === centerCardData.paragraph &&
      image === centerCardData.image
    ) {
      // If the clicked card is already in the center, no action needed
      return;
    } else if (
      title === leftCardData.title &&
      paragraph === leftCardData.paragraph &&
      image === leftCardData.image
    ) {
      // If the clicked card is the left card, swap left and center cards
      setLeftCardData(centerCardData);
      setCenterCardData(leftCardData);
    } else if (
      title === rightCardData.title &&
      paragraph === rightCardData.paragraph &&
      image === rightCardData.image
    ) {
      // If the clicked card is the right card, swap right and center cards
      setRightCardData(centerCardData);
      setCenterCardData(rightCardData);
    }
  };

  return (
    // Контейнер для групи карток послуг
    <div className={s.service}>
      {/* Ліва мала картка послуги */}
      <div className={`${s.service__card} ${s.service__card_left}`}>
        <SmallServiceCardComponent
          title={leftCardData.title}
          paragraph={leftCardData.paragraph}
          image={leftCardData.image}
          vector={leftCardData.vector}
          onClick={() =>
            handleSmallCardClick(
              leftCardData.title,
              leftCardData.paragraph,
              leftCardData.image
            )
          } // Передаємо обробник події кліку на малу картку
          isActive={leftCardData === centerCardData} // Встановлюємо активність картки
          background={
            leftCardData === centerCardData
              ? "var(--active-card-bg)" // Колір активної картки
              : "var(--left-card-bg)" // Колір неактивної картки
          }
        />
      </div>
      {/* Центральна велика картка послуги */}
      <div className={s.service__card_large}>
        <LargeServiceCardComponent
          title={centerCardData.title}
          paragraph={centerCardData.paragraph}
          image={centerCardData.image}
          isActive={true} // Встановлюємо активність для великої картки
        />
      </div>
      {/* Права мала картка послуги */}
      <div className={`${s.service__card} ${s.service__card_right}`}>
        <SmallServiceCardComponent
          title={rightCardData.title}
          paragraph={rightCardData.paragraph}
          image={rightCardData.image}
          vector={rightCardData.vector}
          onClick={() =>
            handleSmallCardClick(
              rightCardData.title,
              rightCardData.paragraph,
              rightCardData.image
            )
          } // Передаємо обробник події кліку на малу картку
          isActive={rightCardData === centerCardData} // Встановлюємо активність картки
          background={
            rightCardData === centerCardData
              ? "var(--active-card-bg)" // Колір активної картки
              : "var(--right-card-bg)" // Колір неактивної картки
          }
        />
      </div>

      <div className={s.service__mobile}>
        {cardComponent.map((card, index) => (
          <div key={index} className={s.service__card_mobile}>
            <LargeServiceCardComponent
              title={card.title}
              paragraph={card.paragraph}
              image={card.image}
              isActive={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServiceCardsComponent;
