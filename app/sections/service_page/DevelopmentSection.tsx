"use client";
import React, { FC } from "react";
import s from "./DevelopmentSection.module.scss";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import classNames from "classnames";
import pic1 from "../../../images/services/development/analytics-and-planning.svg";
import pic2 from "../../../images/services/development/design-and-development.svg";
import pic3 from "../../../images/services/development/testing-and-debuging.svg";
import pic4 from "../../../images/services/development/deployment-and-maintenance.svg";
import DevelopmentCardComponent from "@/components/service/DevelopmentCardComponent";
import DevelopmentCardMobileComponent from "@/components/service/DevelopmentCardMobileComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

const cardsData = [
  {
    num: 1,
    title: "Planning and Design",
    items: [
      "We begin each project by having a thorough consultation with you to understand your specific needs and goals.",
      "We then create a custom project plan that aligns with your budget and timeline.",
      "We also create wireframes, mockups, and prototypes to ensure that we are on the same page and that you are happy with the direction of the project.",
    ],
    path: pic1,
    leftAligned: true,
  },
  {
    num: 2,
    title: "Development and Testing",
    items: [
      "Once we have a clear understanding of your goals and requirements, we begin the development process.",
      "We use the latest technologies to create high-quality products and services that meet your specific needs.",
      "Throughout the development phase, we continuously test the product or service to ensure that it meets and exceeds your expectations.",
    ],
    path: pic2,
  },
  {
    num: 3,
    title: "Deployment",
    items: [
      "Once the product or service is ready for launch, we transition it to the production phase.",
      "This involves making the product or service available to users and ensuring that it can handle expected traffic.",
      "We manage the deployment process to ensure a smooth transition and optimal performance.",
    ],
    path: pic3,
    leftAligned: true,
  },
  {
    num: 4,
    title: "Support",
    items: [
      "After we launch your product or service, we provide continuous support to ensure that it continues to meet your needs.",
      "We monitor your product's performance and identify and address potential issues before they impact your users.",
      "We also provide regular updates and enhancements to keep your product up-to-date and competitive.",
    ],
    path: pic4,
  },
];

interface AnchorID {
  anchorID: string;
}

const DevelopmentSection: FC<AnchorID> = ({ anchorID }) => {
  return (
    <section id={anchorID} className={classNames(s.develop)}>
      <div className={s.container}>
        <ServiceHeadingComponent
          className={s.develop__heading}
          headingText={" Development"}
        />
        <MotionWrapper
          tag="div"
          initial
          viewport
          variants
          custom={2}
          className={s.develop__mob}
        >
          {cardsData.map((data) => (
            <DevelopmentCardMobileComponent
              key={data.num}
              num={data.num}
              title={data.title}
              items={data.items}
              path={data.path}
            />
          ))}
        </MotionWrapper>
        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
        <MotionWrapper
          tag="div"
          initial
          viewport
          variants
          custom={2}
          className={s.develop__desktop}
        >
          {cardsData.map((data) => (
            <DevelopmentCardComponent
              key={data.num}
              num={data.num}
              title={data.title}
              items={data.items}
              path={data.path}
              leftAligned={data.leftAligned}
            />
          ))}
        </MotionWrapper>
        <div className={s.blure}>
          <div className={s.blure_item}></div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
