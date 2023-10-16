"use client";

import React from "react";
import SmallServiceCardComponent from "./SmallServiceCardComponent";
import LargeServiceCardComponent from "./LargeServiceCardComponent";
import s from "./ServiceCardsComponent.module.scss";
import useSwitchingCardsService from "@/hooks/useSwitchingCardsService";

interface CardData {
  title: string;
  paragraph: string;
  image: any;
  vector: any;
}

interface ServiceCardsProps {
  cardData: CardData[];
}

const ServiceCardsComponent: React.FC<ServiceCardsProps> = ({ cardData }) => {
  const { centerCardData, leftCardData, rightCardData, handleSmallCardClick } =
    useSwitchingCardsService(cardData);

  return (
    <div className={s.service}>
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
          }
          isActive={leftCardData === centerCardData}
          background={
            leftCardData === centerCardData
              ? "var(--active-card-bg)"
              : "var(--left-card-bg)"
          }
        />
      </div>
      <div className={s.service__card_large}>
        <LargeServiceCardComponent
          title={centerCardData.title}
          paragraph={centerCardData.paragraph}
          image={centerCardData.image}
          isActive={true}
        />
      </div>
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
          }
          isActive={rightCardData === centerCardData}
          background={
            rightCardData === centerCardData
              ? "var(--active-card-bg)"
              : "var(--right-card-bg)"
          }
        />
      </div>
      <div className={s.service__mobile}>
        {cardData.map((card: CardData, index: number) => (
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
