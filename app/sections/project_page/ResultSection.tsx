import s from "./ResultSection.module.scss";
import Image from "next/image";
import Photo from "../../../images/project/Vectary-texture.svg";
import HeadingOurProjectComponent from "../../../components/project/HeadingOurProjectComponent";

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
    <section className={`${s.container} ${s.design}`}>
      <div className={s.design__heading}>
        <HeadingOurProjectComponent title="03" text="The Result" />
      </div>
      <div className={s.design__wrapper}>
        <ul className={s.design__wrapper___texts}>
          {info.map((item, index) => (
            <li className={s.design__wrapper___list} key={index}>
              <p className={s.design__wrapper___text}>{item.title}</p>
            </li>
          ))}
        </ul>
        <Image
          src={Photo}
          alt="Project Design Photo"
          className={s.design__wrapper___photo}
        />
      </div>
    </section>
  );
};

export default ResultSection;
