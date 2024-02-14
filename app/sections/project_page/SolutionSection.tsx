import classNames from "classnames";
import s from "./SolutionSection.module.scss";
import HeadingOurProjectComponent from "../../../components/project/HeadingOurProjectComponent";
import Image from "next/image";
import { FC } from "react";

interface SolutionSectionProps {
  data: {
    paragraphs: {
      title: string;
      description: string;
    }[];
    images: {
      imageSrc: string;
    }[];
  };
}

const SolutionSection: FC<SolutionSectionProps> = ({ data }) => {
  return (
    <section className={s.solution}>
      <HeadingOurProjectComponent title="02" text="Solution" />

      <ul className={classNames(s.solution__list, s.container)}>
        {data.paragraphs.map((info, index) => (
          <li key={index} className={s.solution__item}>
            {info.title && (
              <h3 className={s.solution__heading_text}>{info.title}</h3>
            )}
            <p className={s.solution__text}>{info.description}</p>
          </li>
        ))}
      </ul>
      <div className={s.container}>
        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
      </div>
      <ul className={classNames(s.solution__photos, s.container)}>
        {data.images
          .filter((info) => info.imageSrc)
          .map((info, index) => (
            <li key={index} className={s[`solution__photo${index}`]}>
              <Image
                src={info.imageSrc}
                className={s.solution__image}
                alt="Project Photo"
                layout="fill"
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default SolutionSection;
