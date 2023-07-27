import s from "./ResultSection.module.scss";
import Image from "next/image";
import Photo from "../../../images/project/Vectary-texture.svg";

const info = [
  {
    titleFirst:
      "Attractive and modern design: We have developed an aesthetically appealing design that reflects the unique style of your company and captures the attention of visitors. The website has a clean and organized layout that ensures easy navigation and user-friendliness.",
  },
  {
    titleSecond:
      "SEO optimization: We have taken into account search engine optimization (SEO) principles during the website development process.",
  },
  {
    titleThird:
      "Our website is fully responsive and compatible with various devices such as smartphones and tablets. Your customers will have access to information and booking capabilities from any device, ensuring convenience and accessibility.",
  },
];

const ResultSection = () => {
  return (
    <div className={`${s.container} ${s.design}`}>
      <ul className={s.design__texts}>
        <li className={s.design__listFirst}>
          <p className={s.design__text}>{info[0].titleFirst}</p>
        </li>
        <li className={s.design__listSecond}>
          <p className={s.design__text}>{info[1].titleSecond}</p>
        </li>
        <li className={s.design__listThird}>
          <p className={s.design__text}>{info[2].titleThird}</p>
        </li>
      </ul>
      <Image src={Photo} alt="" className={s.design__photo} />
    </div>
  );
};

export default ResultSection;
