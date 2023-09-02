import s from "./SolutionSection.module.scss";
import HeadingOurProjectComponent from "../../../components/project/HeadingOurProjectComponent";
import Image from "next/image";
import { FC } from "react";

// Оголошуємо тип для даних, які приходять в SolutionSection
interface SolutionSectionProps {
  data: {
    paragraphs: {
      title: string;
      description: string;
    }[];
    images: {
      imageSrc: string;
      class: string;
    }[];
  };
}

const SolutionSection: FC<SolutionSectionProps> = ({ data }) => {
  return (
    <section className={s.solution}>
      <div className={s.solution__heading}>
        <HeadingOurProjectComponent title="02" text="Solution" />
      </div>
      <div className={s.solution__lists}>
        <ul className={`${s.solution__list} ${s.container}`}>
          {data.paragraphs.map((info, index) => (
            <li key={index} className={s.solution__item}>
              {info.title && (
                <h3
                  className={`${s.solution__heading_text} ${
                    s[`solution__heading_${index + 1}`]
                  }`}
                >
                  {info.title}
                </h3>
              )}
              <p
                className={`${s.solution__text} ${
                  s[`solution__description_${index + 1}`]
                }`}
              >
                {info.description}
              </p>
            </li>
          ))}
        </ul>
        <ul className={`${s.solution__photos} ${s.container}`}>
          {data.images
            .filter((info) => info.imageSrc)
            .map((info, index) => (
              <li key={index} className={s[`solution__${info.class}`]}>
                <Image
                  src={info.imageSrc}
                  className={s.solution__image}
                  alt="Project Photo"
                  layout="fill"
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default SolutionSection;
