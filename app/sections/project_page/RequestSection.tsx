import React, { FC } from "react";
import classNames from "classnames";
import s from "./RequestSection.module.scss";
import Image from "next/image";
import HeadingOurProjectComponent from "@/components/project/HeadingOurProjectComponent";
import svg from "../../../images/project/request-list.svg";

// Оголошуємо тип для об'єкта data
interface RequestSectionData {
  paragraph: string;
  arrays: { id: number; text: string }[];
}

interface RequestSectionProps {
  data: RequestSectionData;
}

const RequestSection: FC<RequestSectionProps> = ({ data }) => {
  const { paragraph, arrays } = data;

  return (
    <section className={s.request}>
      <HeadingOurProjectComponent title="01" text="Request" />

      <div className={classNames(s.container, s.request__content)}>
        <p className={s.request__text}>{paragraph}</p>
        <ul className={s.request__list}>
          {arrays.map((item) => (
            <li key={item.id} className={s.request__list_text}>
              <Image src={svg} alt="*" className={s.request__svg_img} />
              {item.text}
            </li>
          ))}
        </ul>
        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
      </div>
    </section>
  );
};

export default RequestSection;
