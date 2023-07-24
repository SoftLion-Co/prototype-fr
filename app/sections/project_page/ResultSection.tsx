import s from "./ResultSection.module.scss";
import Image from "next/image";

const ResultSection = () => {
  return (
    <div className={`${s.container} ${s.design}`}>
      <ul className={s.design__texts}>
        <li className={s.design__listFirst}>
          <p className={s.design__text}>
            Attractive and modern design: We have developed an aesthetically
            appealing design that reflects the unique style of your company and
            captures the attention of visitors. The website has a clean and
            organized layout that ensures easy navigation and user-friendliness.
          </p>
        </li>
        <li className={s.design__listSecond}>
          <p className={s.design__text}>
            SEO optimization: We have taken into account search engine
            optimization (SEO) principles during the website development
            process.
          </p>
        </li>
        <li className={s.design__listThird}>
          <p className={s.design__text}>
            Our website is fully responsive and compatible with various devices
            such as smartphones and tablets. Your customers will have access to
            information and booking capabilities from any device, ensuring
            convenience and accessibility.
          </p>
        </li>
      </ul>
      <div className={s.design__photo}></div>
      {/* <Image src={foto} alt="" /> */}
    </div>
  );
};

export default ResultSection;
