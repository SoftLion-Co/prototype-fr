import s from "./ResultSection.module.scss";
import HeadingOurProjectComponent from "../../../components/project/HeadingOurProjectComponent";
import Image from "next/image";
import { FC } from "react";

// Оголошуємо тип для об'єкта data

interface ResultSectionProps {
  data: string[];
}

const ResultSection: FC<ResultSectionProps> = ({ data }) => {
  return (
    <section className={s.design}>
      <div className={s.design__heading}>
        <HeadingOurProjectComponent title="03" text="The Result" />
      </div>
      <div className={`${s.container} ${s.design__wrapper}`}>
        <ul className={s.design__wrapper_texts}>
          {data.map((item, index) => (
            <li className={s.design__wrapper_list} key={index}>
              <p className={s.design__wrapper_text}>{item}</p>
            </li>
          ))}
        </ul>
        <div className={s.blur}>
            <div className={s.blur_item}></div>
          </div>
          <div className={s.blure}>
            <div className={s.blure_item}></div>
          </div>
        <div className={s.design__container}>
          <Image
            alt="Vectary-texture"
            className={s.design__container_photo}
            src={
              "https://github.com/SoftLion-Co/prototype-fr/blob/refactor/new-data/images/project/project-trend/trend-hero-in-desktop.png?raw=true"
            }
            width={800}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
