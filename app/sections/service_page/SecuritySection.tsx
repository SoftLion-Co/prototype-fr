"use client";

import React, { FC } from "react";
import s from "./SecuritySection.module.scss";
import ServiceSecurityCardComponent from "@/components/service/ServiceSecurityCardComponent";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import classNames from "classnames";
import BigButtonComponent from "../../../components/service/BigButtonComponent";

interface AnchorID {
  anchorID: string;
}

const securityCardsData = [
  {
    id: 1,
    title: "Discovery Stage",
    description:
      "We prioritize customer data protection when developing applications and websites. We use advanced encryption technologies to safeguard personal data and other sensitive information.",
  },
  {
    id: 2,
    title: "Protection",
    description:
      "We begin the development process by understanding the client's needs and requirements. This involves conducting research, gathering information, and analyzing the client's business goals.",
  },
  {
    id: 3,
    title: "Security Measures",
    description:
      "We implement a variety of security measures to ensure the highest level of customer data protection. This includes protection against hacking attacks, software vulnerability protection, and abuse prevention. We also regularly update systems and perform security audits.",
  },
  {
    id: 4,
    title: "Use of Secure Data Transmission",
    description:
      "We use secure data transmission protocols, such as HTTPS, to encrypt and protect information transmitted between users and the application or website. This helps prevent interception of information during transmission.",
  },
  {
    id: 5,
    title: "Reliable Servers and Hosting Providers",
    description:
      "We partner with trusted server and hosting providers to ensure a high level of data protection and system reliability. This helps minimize the risk of data loss or damage.",
  },
];

const SecuritySection: FC<AnchorID> = ({ anchorID }) => {
  const isEven = securityCardsData.length % 2 === 0;

  return (
    <section id={anchorID} className={classNames(s.container, s.security)}>
      <ServiceHeadingComponent headingText="Security" />

      <div className={s.security__slider}>
        <MobileSliderComponent
          data={securityCardsData}
          SlideComponent={ServiceSecurityCardComponent}
        />
      </div>

      <div className={s.security__container}>
        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
        {securityCardsData.map((card, index) => (
          <div
            key={card.id}
            className={classNames(s.security__card, {
              [s.centre]: !isEven && index === securityCardsData.length - 1,
            })}
          >
            <ServiceSecurityCardComponent
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>

      <div className={classNames(s.container, s.security__button)}>
        <BigButtonComponent />
      </div>
    </section>
  );
};

export default SecuritySection;
