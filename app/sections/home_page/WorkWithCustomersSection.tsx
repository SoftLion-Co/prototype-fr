import React from "react";
import ServiceCardsComponent from "@/components/services/ServiceCardsComponent";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";
import TitleServicesComponent from "@/components/services/TitleServicesComponent";

import s from "./EcommerceSection.module.scss";
import LaunchAndMaintenance from "@/images/services/work-with-customers/LaunchAndMaintenance.svg";
import DiscoveryStage from "@/images/services/work-with-customers/DiscoveryStage.svg";
import DesignAndDevelopmentStage from "@/images/services/work-with-customers/DesignAndDevelopmentStage.svg"; // Remove the extra dot before the @ symbol
import Vector from "@/images/services/ecommerce/Vector.svg";

const EcommerceSection = () => {
  const cardComponent = [
    {
      title: "Launch and Maintenance",
      paragraph:
        "Once the discovery stage is complete, the primary focus naturally shifts towards the meticulous process of designing and developing the website or web application. This significant stage involves a series of crucial steps, starting with the creation of detailed wireframes, which serve as the structural blueprint, outlining the arrangement and positioning of elements on each page. These wireframes lay the foundation for the subsequent steps, providing an essential visual representation of the product's layout and user journey.",
      image: LaunchAndMaintenance,
      vector: Vector,
    },
    {
      title: "Discovery Stage",
      paragraph:
        "During this crucial stage, the primary focus is on gaining a comprehensive understanding of the client's specific needs and requirements. This involves embarking on an in-depth and iterative process of conducting thorough research, gathering extensive information, and meticulously analyzing the client's unique business goals and objectives. The development team actively collaborates with the client, seeking to grasp the core essence of the project while gaining valuable insights into the target audience, prevailing market trends, and potential competitors.",
      image: DiscoveryStage,
      vector: Vector,
    },
    {
      title: "Design and Development",
      paragraph:
        "After the completion of the discovery stage and a clear definition of project requirements, the team shifts its attention towards the creative aspects of crafting the actual design and bringing it to life by implementing the desired functionality. During this stage, our designers meticulously work on creating wireframes and mockups that serve as the visual foundation for the final product. These wireframes illustrate the layout, placement of elements, and user flow, providing an essential roadmap for the development process.",
      image: DesignAndDevelopmentStage,
      vector: Vector,
    },
  ];

  return (
    <section className={s.container}>
      <TitleServicesComponent
        position="left"
        num={"03"}
        text={"Work with Customers"}
        color={"green"}
        className={s.heading}
      />

      <ServiceCardsComponent cardData={cardComponent} />
    </section>
  );
};

export default EcommerceSection;
