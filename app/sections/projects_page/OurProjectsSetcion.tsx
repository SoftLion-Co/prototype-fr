import s from "./OurProjectsSetcion.module.scss";
import HeadingComponent from "@/components/HeadingComponent";

const OurProjectsSetcion = () => {
  return (
    // <div className={s.services}>
      <div className={s.services}>
        <div className={s.services__title}>
        <HeadingComponent text="Our Services" />
        </div>
        <p className={s.services__text}>
          Our services encompass the entire development cycle, starting from
          requirements analysis and interface design to programming, testing,
          and deployment. We work with various technologies and platforms such
          as HTML/CSS, JavaScript, PHP, Python, iOS, Android, and many others to
          ensure the development of websites and apps that meet all the needs
          and requirements of our clients.
        </p>
      </div>
    // </div>
  );
};

export default OurProjectsSetcion;
