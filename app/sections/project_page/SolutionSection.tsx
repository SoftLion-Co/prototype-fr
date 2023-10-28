import s from "./SolutionSection.module.scss";
import HeadingOurProjectComponent from "../../../components/project/HeadingOurProjectComponent";
import Image from "next/image";
import { FC } from "react";

interface SolutionSectionProps {
  data: {
	description:string;
    paragraphs: {
      title: string;
      description: string;
    }[];
    images: string[];
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
                <h3 className={s.solution__heading_text}>{info.title}</h3>
              )}
              <p className={s.solution__text}>{info.description}</p>
            </li>
          ))}
        </ul>
        <ul className={`${s.solution__photos} ${s.container}`}>
          <div className={s.blur}>
            <div className={s.blur_item}></div>
          </div>
          {data.images
            .filter((info) => info)
            .map((info, index) => (
              <li key={index} 
				  className={s[`solution__photo${index}`]}
				  >
                <Image
                  src={info}
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
