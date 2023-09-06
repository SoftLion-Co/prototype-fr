import s from "./ItemCountDisplayComponent.module.module.scss";
import Image from "next/image";

import peopleVector from "@/app/admin/images/quantity/peopleVector.svg";
import newspaperVector from "@/app/admin/images/quantity/newspaperVector.svg";
import projectsVector from "@/app/admin/images/quantity/projectsVector.svg";
import aplicationVector from "@/app/admin/images/quantity/aplicationVector.svg";

interface ItemCountDisplayProps {
  text: string;
  number: number;
  icon: string; 
}

const ItemCountDisplayComponent: React.FC<ItemCountDisplayProps> = ({
  text,
  number,
  icon,
}) => {
  return (
    <div className={s.count__container}>
      <div className={s.count__icon}>
        <Image src={icon} alt="Icon" width={24} height={24} />
      </div>
      <p className={s.count__text}>{text}</p>
      <p className={s.count__number}>{number}</p>
    </div>
  );
};

export default ItemCountDisplayComponent;
