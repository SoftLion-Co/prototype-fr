import React from "react";
import ServiceCardsComponent from "@/components/services/ServiceCardsComponent";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";
import TitleServicesComponent from "@/components/services/TitleServicesComponent";

import s from "./EcommerceSection.module.scss";
import st from "./WorkWithCustomersSection.module.scss";
import LaunchAndMaintenance from "@/images/services/work-with-customers/LaunchAndMaintenance.svg";
import DiscoveryStage from "@/images/services/work-with-customers/DiscoveryStage.svg";
import DesignAndDevelopmentStage from "@/images/services/work-with-customers/DesignAndDevelopmentStage.svg";
import Vector from "@/images/services/ecommerce/Vector.svg";

const EcommerceSection = () => {
  const cardComponent = [
    {
      title: "Launch and Maintenance",
      paragraph:
        "Once the discovery stage of a website or web application development project is complete, the focus shifts to the design and development phase. This critical stage involves a series of steps, starting with the creation of detailed wireframes. Wireframes are blueprints that outline the structure and layout of each page, including the arrangement and positioning of all elements.",
      image: LaunchAndMaintenance,
      vector: Vector,
    },
    {
      title: "Discovery Stage",
      paragraph:
        "The discovery phase of a website or web application development project is critical for understanding the client's specific needs and requirements. This phase involves in-depth research, data gathering, and analysis of the client's business goals and objectives. The development team actively collaborates with the client to develop a deep understanding of the project's core essence.",
      image: DiscoveryStage,
      vector: Vector,
    },
    {
      title: "Design and Development",
      paragraph:
        "Once the discovery stage is complete and project requirements are clearly defined, the team shifts its focus to the creative aspects of designing and developing the website or web application. During this stage, our designers meticulously craft wireframes and mockups, which serve as the visual foundation for the final product.",
      image: DesignAndDevelopmentStage,
      vector: Vector,
    },
  ];

  return (
    <div className={s.container}>
      <TitleServicesComponent
        position="left"
        num={"03"}
        text={"Work with Customers"}
        color={"green"}
        className={s.heading}
      />

      <ServiceCardsComponent cardData={cardComponent} />
    </div>
  );
};

export default EcommerceSection;
