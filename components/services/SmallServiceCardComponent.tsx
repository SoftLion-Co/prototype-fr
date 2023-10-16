import React from "react";
import s from "./SmallServiceCardComponent.module.scss";
import Image from "next/image";

interface SmallServiceCardComponentProps {
  title: string;
  paragraph: string;
  image: string;
  vector: string;
  onClick: (title: string, paragraph: string, image: string) => void;
  isActive: boolean;
  background: string;
}

const SmallServiceCardComponent: React.FC<SmallServiceCardComponentProps> = ({
  title,
  paragraph,
  image,
  vector,
  onClick,
  isActive,
  background,
}) => {
  return (
    <div
      className={s.service}
      style={{ background }}
      onClick={() => onClick(title, paragraph, image)}
    >
      <div className={s.service__container}>
        <Image
          className={s.service__image}
          src={image}
          alt={title}
          width={100}
          height={100}
        />
        <h2 className={s.service__heading}>{title}</h2>
      </div>
      
      <Image
        className={s.service__vector}
        src={vector}
        alt={vector}
        width={100}
        height={100}
      />
    </div>
  );
};
export default SmallServiceCardComponent;
