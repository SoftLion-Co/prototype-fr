"use client";

import React, { FC } from "react";
import s from "./SecuritySection.module.scss";
import ServiceSecurityCardComponent from "@/components/service/ServiceSecurityCardComponent";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import classNames from "classnames";
import BigButtonComponent from "../../../components/service/BigButtonComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

interface AnchorID {
  anchorID: string;
}

const securityCardsData = [
  {
    id: 1,
    title: "Discovery Stage",
    description:
      "During the Discovery Stage, we prioritize customer data protection in application and website development. Using advanced encryption technologies, we ensure the confidentiality of personal data. Additionally, we conduct thorough risk assessments to identify and mitigate vulnerabilities, guaranteeing secure data throughout development.",
  },
  {
    id: 2,
    title: "Protection and Security Measures",
    description:
      "We start development by deeply understanding client needs, requirements, and business goals through thorough research. Simultaneously, we implement strong security measures to protect customer data, including defense against hacking, vulnerability mitigation, abuse prevention, regular updates, and security audits for ongoing protection.",
  },
  {
    id: 3,
    title: "Use of Secure Data Transmission",
    description:
      "We use secure data transmission protocols, such as HTTPS, to encrypt and protect information transmitted between users and the application or website. This helps prevent interception of information during transmission.",
  },
  {
    id: 4,
    title: "Reliable Servers and Hosting Providers",
    description:
      "We partner with trusted server and hosting providers to ensure a high level of data protection and system reliability. This helps minimize the risk of data loss or damage.",
  },
];

const SecuritySection: FC<AnchorID> = ({ anchorID }) => {
  return (
    <section id={anchorID} className={s.security}>
      <ServiceHeadingComponent
        className={classNames(s.container, s.security__heading)}
        headingText="Security"
      />

      <MotionWrapper
        tag="div"
        initial
        viewport
        variants
        custom={0.5}
        className={s.security__slider}
      >
        <MobileSliderComponent
          data={securityCardsData}
          SlideComponent={ServiceSecurityCardComponent}
        />
      </MotionWrapper>

      <div className={s.blur}>
        <div className={s.blur_item}></div>
      </div>

      <MotionWrapper
        tag="div"
        initial
        viewport
        variants
        custom={0.5}
        className={classNames(s.container, s.security__container)}
      >
        {securityCardsData.map((card) => (
          <ServiceSecurityCardComponent
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </MotionWrapper>

      <div className={classNames(s.container, s.security__button)}>
        <BigButtonComponent />
      </div>
    </section>
  );
};

export default SecuritySection;
