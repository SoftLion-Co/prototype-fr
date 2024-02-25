import { FC } from "react";
import classNames from "classnames";
import s from "./ResultSection.module.scss";
import HeadingOurProjectComponent from "../../../components/project/HeadingOurProjectComponent";
import Image from "next/image";

interface ResultSectionProps {
  data: string[];
  images: string[];
}

const ResultSection: FC<ResultSectionProps> = ({ data, images }) => {
  return (
    <section className={s.design}>
      <HeadingOurProjectComponent title="03" text="The Result" />

      <div className={classNames(s.container, s.design__wrapper)}>
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
          {images.map((imageUrl, index) => (
            <Image
              key={index}
              alt={`Result Image ${index}`}
              className={s.design__container_photo}
              src={imageUrl}
              width={1200}
              height={1200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
