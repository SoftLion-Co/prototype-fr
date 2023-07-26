import s from "./ServiceDesignCardComponent.module.scss";
import React, {FC} from "react"
import Image from "next/image";

interface DesignCardProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

const ServiceDesignCardComponent: FC<DesignCardProps> = ({
  title,
  description,
  imageSrc,
  alt,
}) => {
  return (
    <li className={s.design__listItem}>
      <div className={s.design__wrapperInfImg}>
        <Image alt={alt} src={imageSrc} className={s.design__image} />
        <h3 className={s.design__descriptionVisual}>{description}</h3>
      </div>
      <p className={s.design__text}>{title}</p>
    </li>
  );
};

export default ServiceDesignCardComponent;
