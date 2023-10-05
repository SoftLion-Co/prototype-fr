"use client";
import s from "./DevelopmentSection.module.scss";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import classNames from "classnames";
import pic1 from "../../../images/services/development/analytics-and-planning.svg";
import pic2 from "../../../images/services/development/design-and-development.svg";
import pic3 from "../../../images/services/development/testing-and-debuging.svg";
import pic4 from "../../../images/services/development/deployment-and-maintenance.svg";
import DevelopmentCardComponent from "@/components/service/DevelopmentCardComponent";
import DevelopmentCardMobileComponent from "@/components/service/DevelopmentCardMobileComponent";

const cardsData = [
  {
    num: 1,
    title: "Planning and Design",
    items: [
      "At the project's outset, we engage closely with you to comprehend your specific needs and objectives.",
      "Following that, we formulate a comprehensive project plan detailing the project's scope, schedule, budget, and potential risks.",
      "Additionally, we create wireframes, mockups, and prototypes to provide a visual representation of your product or service.",
    ],
    path: pic1,
    leftAligned: true,
  },
  {
    num: 2,
    title: "Development and Testing",
    items: [
      "Once we have a comprehensive understanding of your needs and objectives, we initiate the development process.",
      "Leveraging cutting-edge technologies, we craft high-quality products and services that align with your specified requirements.",
      "Throughout the development phase, we consistently test the product or service to ensure it meets and exceeds your expectations.",
    ],
    path: pic2,
  },
  {
    num: 3,
    title: "Deployment",
    items: [
      "When the product or service is deemed ready, it's time to transition it to the production phase.",
      "This entails making the product or service readily accessible to users and confirming its capability to handle anticipated usage.",
      "We manage the deployment process to guarantee a seamless transition and optimal functionality.",
    ],
    path: pic3,
    leftAligned: true,
  },
  {
    num: 4,
    title: "Support",
    items: [
      "Following the launch of your product or service, we extend continuous support to ensure it consistently caters to your evolving needs.",
      "We assist you with maintenance tasks and provide necessary updates to enhance the product's performance and features.",
      "In the event of any issues, we offer troubleshooting assistance to swiftly address and resolve concerns.",
    ],
    path: pic4,
  },
];

const DevelopmentSection = () => {
  return (
    <section className={classNames(s.container, s.develop)}>
      <div className={s.develop__heading}>
        <ServiceHeadingComponent
          headingText={" Development"}
          container={false}
        />
      </div>
      <div className={s.develop__mob}>
        {cardsData.map((data) => (
          <DevelopmentCardMobileComponent
            key={data.num}
            num={data.num}
            title={data.title}
            items={data.items}
            path={data.path}
          />
        ))}
      </div>
      <div className={s.blur}>
        <div className={s.blur_item}></div>
      </div>
      <div className={s.develop__desktop}>
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
      </div>
      <div className={s.blure}>
        <div className={s.blure_item}></div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
