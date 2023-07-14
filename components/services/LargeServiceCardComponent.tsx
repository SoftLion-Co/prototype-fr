import React from "react";
import s from "./LargeServiceCardComponent.module.scss";

interface CardComponent {
  title: string;
  paragraph: string;
}

export const LargeServiceCardComponent = ({ cardComponent }: { cardComponent: CardComponent[] }) => {
  return (
    <div className={s.service}>
      {cardComponent.map((card, index) => (
        <div className={s.service__container} key={index} hidden={index > 0}>
          <div className={s.service__img}>
            <img src="" alt="" />
          </div>
          <h1 className={s.service__heading}>{card.title}</h1>
          <p className={s.service__paragraph}>{card.paragraph}</p>
        </div>
      ))}
    </div>
  );
};


// Функція на премикання карточок, НЕ ВИДАЛИ ВИПАДКОВО ІДІОТІНА!!!!

// const CardComponent: React.FC = () => {
//   const [cards, setCards] = useState<string[]>(['Card 1', 'Card 2', 'Card 3']);

//   const changeCardContent = (index: number) => {
//     const newCards = [...cards];
//     newCards[index] = `New Content ${index + 1}`;
//     setCards(newCards);
//   };

//   return (
//     <div>
//       {cards.map((content, index) => (
//         <div key={index}>
//           <div>{content}</div>
//           <button onClick={() => changeCardContent(index)}>icon</button>
//         </div>
//       ))}
//     </div>
//   );
// };

export default LargeServiceCardComponent;