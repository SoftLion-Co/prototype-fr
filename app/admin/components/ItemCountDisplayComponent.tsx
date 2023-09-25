import React from "react";
import s from "./ItemCountDisplayComponent.module.scss";
import Image from "next/image";

import peopleVector from "@/app/admin/images/quantity/peopleVector.svg";
import newspaperVector from "@/app/admin/images/quantity/newspaperVector.svg";
import projectsVector from "@/app/admin/images/quantity/projectsVector.svg";
import aplicationVector from "@/app/admin/images/quantity/aplicationVector.svg";

export enum IconType {
  People = "peopleVector",
  Newspaper = "newspaperVector",
  Projects = "projectsVector",
  Application = "aplicationVector",
}

interface ItemCountDisplayProps {
  text: string;
  number: number;
  icon: IconType;
}

const ItemCountDisplayComponent: React.FC<ItemCountDisplayProps> = ({
  text,
  number,
  icon: iconString,
}) => {
  let iconSrc;

  switch (iconString) {
    case IconType.People:
      iconSrc = peopleVector;
      break;
    case IconType.Newspaper:
      iconSrc = newspaperVector;
      break;
    case IconType.Projects:
      iconSrc = projectsVector;
      break;
    case IconType.Application:
      iconSrc = aplicationVector;
      break;
    default:
      iconSrc = peopleVector;
      break;
  }

  return (
    <div className={s.count}>
      <div className={s.count__icon}>
        <Image src={iconSrc} alt="Icon" width={24} height={24} />
      </div>
      <p className={s.count__text}>{text}:</p>
      <p className={s.count__number}>{number}</p>
    </div>
  );
};

export default ItemCountDisplayComponent;
