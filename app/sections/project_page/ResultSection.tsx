import s from "./ResultSection.module.scss";
import HeadingOurProjectComponent from "../../../components/project/HeadingOurProjectComponent";
import Image from "next/image";

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
    <section className={s.desig}>
      <div className={s.design__heading}>
        <HeadingOurProjectComponent title="03" text="The Result" />
      </div>
      <div className={`${s.container} ${s.design__wrapper}`}>
        <ul className={s.design__wrapper_texts}>
          {info.map((item, index) => (
            <li className={s.design__wrapper_list} key={index}>
              <p className={s.design__wrapper_text}>{item.title}</p>
            </li>
          ))}
        </ul>
        <div className={s.design__sadasd}>
          <Image
            alt="Vectary-texture"
            className={s.design__wrapper_photo}
            src={"https://i.ibb.co/bbXrmNK/Vectary-texture.png"}
            width={800}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
