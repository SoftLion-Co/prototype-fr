import React, { FC, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { Rating } from "@mantine/core";
import s from "./ReviewsCardComponent.module.scss";

import image from "@/images/human.jpg";

interface SlideData {
  name: string;
  rating?: number | string;
  paragraph: string;
}

interface ReviewsCardProps {
  data: SlideData;
}

const ReviewsCardComponent: FC<ReviewsCardProps> = ({ data }) => {
  const [value, setValue] = useState(0);

  const { name } = data;

  return (
    <div className={classNames(s.review__card)}>
      <div className={s.review__about}>
        <Image
          className={s.review__author___img}
          src={image}
          alt={name}
          width={143}
          height={143}
        />
        <div className={s.review__info}>
          <h3 className={s.review__name}>{data.name}</h3>
          <div className={s.review__rating}>
            <Rating size="sm" value={5} onChange={setValue} readOnly={true} />
          </div>
        </div>
      </div>
      <p className={s.review__text}>{data.paragraph}</p>
    </div>
  );
};

export default ReviewsCardComponent;
