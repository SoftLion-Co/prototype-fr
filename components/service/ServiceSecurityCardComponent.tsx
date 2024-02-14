import React, { FC } from "react";
import s from "./ServiceSecurityCardComponent.module.scss";
import Image from "next/image";
import Security from "../../images/security.svg";

interface ServiceSecurityCardComponentProps {
  title?: string;
  description?: string;
  data?: { description: string; title: string };
}

const ServiceSecurityCardComponent: FC<ServiceSecurityCardComponentProps> = ({
  title,
  description,
  data,
}) => {
  const cardTitle = title || (data && data.title);
  const cardDescription = description || (data && data.description);

  return (
    <div className={s.security}>
      <div className={s.security__header}>
        <Image
          src={Security}
          alt="Security Cards"
          className={s.security__img}
        />

        <h3 className={s.security__title}>{cardTitle}</h3>
      </div>

      <p className={s.security__text}>{cardDescription}</p>
    </div>
  );
};

export default ServiceSecurityCardComponent;
