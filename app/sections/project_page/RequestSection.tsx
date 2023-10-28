import React, { FC } from "react";
import classNames from "classnames";
import Image from "next/image";
import HeadingOurProjectComponent from "@/components/project/HeadingOurProjectComponent";
import s from "./RequestSection.module.scss";
import svg from "../../../images/project/request-list.svg";


interface RequestSectionData {
  description: string;
  list: string[];
}

interface RequestSectionProps {
  data: RequestSectionData;
}

const RequestSection: FC<RequestSectionProps> = ({ data }) => {
  const { description, list } = data;

  return (
    <section className={s.request}>
      <div className={s.request__heading}>
        <HeadingOurProjectComponent title="01" text="Request" />
      </div>
      <div className={classNames(s.container, s.request__content)}>
        <p className={s.request__text}>{description}</p>
        <ul className={s.request__list}>
          {list.map((item) => (
            <li className={s.request__list_text}>
              <Image src={svg} alt="*" className={s.request__svg_img} />
              {item}
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
