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
        "The process of making a signature for the product design block is important because it helps to create a unique identity for the product. It should be designed to reflect the brand’s values and mission, as well as the product’s purpose and features. The signature should be simple, memorable, and recognizable. It should also be versatile enough to be used in a variety of contexts, such as on the product’s packaging, website, and promotional materials. The signature should be designed to be easily recognizable and to stand out from the competition. It should also be designed to be timeless, so that it can be used for years to come",
      image: Design,
      vector: Vector,
    },
    {
      title: "Development",
      paragraph:
        "Site development and web applications offer a variety of advantages to businesses and individuals. For businesses, web applications can provide a cost-effective way to reach a larger audience, increase efficiency, and reduce operational costs. Web applications can also help businesses to improve customer service, increase sales, and gain a competitive edge. For individuals, web applications can provide a convenient way to access information, stay connected with friends and family, and even make purchases online.",
      image: Development,
      vector: Vector,
    },
    {
      title: "Security",
      paragraph:
        "We thoroughly test websites and applications to identify potential weaknesses and vulnerabilities, taking measures to address them. We also implement protective mechanisms such as data encryption, authentication, authorization, backups, and system monitoring to ensure a high level of security for our clients.",
      image: Security,
      vector: Vector,
    },
  ];

  return (
    <div className={s.container}>
      <TitleServicesComponent position="left" num={"01"} text={"Ecommerce"} className={s.heading}/>
      <ServiceCardsComponent cardData={cardComponent} />
      <SeeMoreButtonComponent path="services" />
    </div>
  );
};

export default EcommerceSection;
