'use client'

import s from "./SecuritySection.module.scss";
import ServiceSecurityCardComponent from "@/components/service/ServiceSecurityCardComponent";
import MobileSliderComponent from "@/components/MobileSliderComponent";

const securityCardsData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the description for Card 1.",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the description for Card 2.",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the description for Card 3.",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the description for Card 4.",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the description for Card 5.",
  },
];

const SecuritySection = () => {
  return (
    <div>
      <MobileSliderComponent data={securityCardsData} SlideComponent={ServiceSecurityCardComponent}/>
    </div>
  );
};

export default SecuritySection;
