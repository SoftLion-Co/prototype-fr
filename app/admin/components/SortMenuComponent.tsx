import { FC, useState } from "react";
import s from "./SortMenuComponent.module.scss";
import classNames from "classnames";

interface SortMenuProps {
  options: SortMenuOption[];
}

export interface SortMenuOption {
  name: string;
  action: () => void;
}

const SortMenu: FC<SortMenuProps> = ({ options }) => {
  const [activeSortIndex, setActiveSortIndex] = useState<number | null>(null);

  const handleSortOptionClick = (activeIndex: number): void => {
    setActiveSortIndex(activeIndex);

    options[activeIndex].action();
  };

  return (
    <div className={s.options__container}>
      <ul className={s.options__list}>
        {options.map((option, index) => (
          <li
            className={classNames(s.options__item, activeSortIndex === index ? s.active : "")}
            key={index}
            onClick={() => handleSortOptionClick(index)}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SortMenu;
