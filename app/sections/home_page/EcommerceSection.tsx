import React from "react";
import ServiceCardsComponent from "@/components/services/ServiceCardsComponent";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";
import TitleServicesComponent from "@/components/services/TitleServicesComponent";

import s from "./EcommerceSection.module.scss";
import Design from "@/images/services/ecommerce/Design.svg";
import Development from "@/images/services/ecommerce/Development.svg";
import Security from "@/images/services/ecommerce/Security.svg";
import Vector from "@/images/services/ecommerce/Vector.svg";

const EcommerceSection = () => {
  const cardComponent = [
    {
      title: "Design",
      paragraph:
        "A product design signature is a unique visual element that helps to identify a product and distinguish it from its competitors. It should be designed to reflect the brand's values and mission, as well as the product's purpose and features. An effective product design signature is simple, memorable, recognizable, and versatile. It should be able to be used in a variety of contexts, such as on the product's packaging, website, and promotional materials.",
      image: Design,
      vector: Vector,
    },
    {
      title: "Development",
      paragraph:
        "Web development and web applications offer a range of benefits to businesses and individuals. For businesses, web applications can provide a cost-effective way to reach a global audience, improve operational efficiency, and reduce costs. They can also help businesses to improve customer service, increase sales, and gain a competitive advantage.",
      image: Development,
      vector: Vector,
    },
    {
      title: "Security",
      paragraph:
        "We offer comprehensive website and application security testing services to identify and mitigate potential vulnerabilities. We also implement a variety of security measures, including data encryption, authentication, authorization, backups, and system monitoring, to protect our clients' data and systems.",
      image: Security,
      vector: Vector,
    },
  ];

  return (
    <section className={s.container}>
      <TitleServicesComponent
        position="left"
        num={"01"}
        text={"Ecommerce"}
        className={s.heading}
      />
      <ServiceCardsComponent cardData={cardComponent} />
      <SeeMoreButtonComponent path="services" />
      <div className={s.blur}>
        <div className={s.blur_item}></div>
      </div>
    </section>
  );
};

export default EcommerceSection;
