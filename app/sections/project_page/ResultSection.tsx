import s from "./ResultSection.module.scss";
import Image from "next/image";
import Photo from "../../../images/project/Vectary-texture.svg";

const info = [
  {
    title:
      "Attractive and modern design: We have developed an aesthetically appealing design that reflects the unique style of your company and captures the attention of visitors. The website has a clean and organized layout that ensures easy navigation and user-friendliness.",
  },
  {
    title:
      "SEO optimization: We have taken into account search engine optimization (SEO) principles during the website development process.",
  },
  {
    title:
      "Our website is fully responsive and compatible with various devices such as smartphones and tablets. Your customers will have access to information and booking capabilities from any device, ensuring convenience and accessibility.",
  },
];

const ResultSection = () => {
  return (
    <div className={`${s.container} ${s.design}`}>
      <ul className={s.design__texts}>
        {info.map((item, index) => (
          <li className={s.design__list} key={index}>
            <p className={s.design__text}>{item.title}</p>
          </li>
        ))}
      </ul>
      <Image src={Photo} alt="" className={s.design__photo} />
    </div>
  );
};

export default ResultSection;
