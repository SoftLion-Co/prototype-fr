import { useState } from "react";

// Define the type for the card data objects
interface CardData {
  title: string;
  paragraph: string;
  image: any;
  vector: any; 
}

// Define the type for the initial card data array
type InitialCardData = CardData[];

const useSwitchingCardsService = (initialCardData: InitialCardData) => {
  const [centerCardData, setCenterCardData] = useState(initialCardData[0]);
  const [leftCardData, setLeftCardData] = useState(initialCardData[1]);
  const [rightCardData, setRightCardData] = useState(initialCardData[2]);

  const handleSmallCardClick = (
    title: string,
    paragraph: string,
    image: any 
  ) => {
    // Check if the clicked card is already in the center
    if (
      title === centerCardData.title &&
      paragraph === centerCardData.paragraph &&
      image === centerCardData.image
    ) {
      // If the clicked card is already in the center, no action needed
      return;
    } else if (
      title === leftCardData.title &&
      paragraph === leftCardData.paragraph &&
      image === leftCardData.image
    ) {
      // If the clicked card is the left card, swap left and center cards
      setLeftCardData(centerCardData);
      setCenterCardData(leftCardData);
    } else if (
      title === rightCardData.title &&
      paragraph === rightCardData.paragraph &&
      image === rightCardData.image
    ) {
      // If the clicked card is the right card, swap right and center cards
      setRightCardData(centerCardData);
      setCenterCardData(rightCardData);
    }
  };

  return {
    centerCardData,
    leftCardData,
    rightCardData,
    handleSmallCardClick,
  };
};

export default useSwitchingCardsService;
