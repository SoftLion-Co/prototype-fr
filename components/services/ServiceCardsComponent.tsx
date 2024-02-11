"use client";

import React, { FC, useCallback, useMemo } from "react";
import classNames from "classnames";
import s from "./ServiceCardsComponent.module.scss";
import SmallServiceCardComponent from "./SmallServiceCardComponent";
import LargeServiceCardComponent from "./LargeServiceCardComponent";
import useSwitchingCardsService from "@/hooks/useSwitchingCardsService";

interface CardData {
  title: string;
  paragraph: string;
  image: string;
  vector: string;
}

interface ServiceCardsProps {
  cardData: CardData[];
}

const ServiceCardsComponent: FC<ServiceCardsProps> = ({ cardData }) => {
  const { centerCardData, leftCardData, rightCardData, handleSmallCardClick } =
    useSwitchingCardsService(cardData);

  const handleLeftCardClick = useCallback(() => {
    handleSmallCardClick(
      leftCardData.title,
      leftCardData.paragraph,
      leftCardData.image
    );
  }, [leftCardData, handleSmallCardClick]);

  const handleRightCardClick = useCallback(() => {
    handleSmallCardClick(
      rightCardData.title,
      rightCardData.paragraph,
      rightCardData.image
    );
  }, [rightCardData, handleSmallCardClick]);

  const isLeftCardActive = useMemo(
    () => leftCardData === centerCardData,
    [leftCardData, centerCardData]
  );
  const isRightCardActive = useMemo(
    () => rightCardData === centerCardData,
    [rightCardData, centerCardData]
  );

  return (
    <div className={s.service}>
      <div className={classNames(s.service__card, s.service__card_left)}>
        <SmallServiceCardComponent
          title={leftCardData.title}
          paragraph={leftCardData.paragraph}
          image={leftCardData.image}
          vector={leftCardData.vector}
          onClick={handleLeftCardClick}
          isActive={isLeftCardActive}
          background={
            isLeftCardActive ? "var(--active-card-bg)" : "var(--left-card-bg)"
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
      <div className={classNames(s.service__card, s.service__card_right)}>
        <SmallServiceCardComponent
          title={rightCardData.title}
          paragraph={rightCardData.paragraph}
          image={rightCardData.image}
          vector={rightCardData.vector}
          onClick={handleRightCardClick}
          isActive={isRightCardActive}
          background={
            isRightCardActive ? "var(--active-card-bg)" : "var(--right-card-bg)"
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
