import s from "./HeroSection.module.scss";
import Image from "next/image";
import heroLogoMobile from "./../../../images/hero-mobile.svg";
import heroShadow from "@/images/hero-shadow.svg";
import MainButtonComponent from "./../../../components/MainButtonComponent";
import classNames from "classnames";

const HeroSection = () => {
  return (
    <section className={classNames(s.container, s.hero)}>
      <div className={s.hero__container}>
        <h1 className={s.hero__title}>
          Embrace the <span className={s.hero__word}>Lion's</span> Share
          Technological Advancements with{" "}
          <span className={s.hero__word}>SoftLion</span>
        </h1>

        <p className={s.hero__description}>
          Our company provides an individual approach for each client to turn
          your ideas into reality.
        </p>

        <div className={s.hero__content}>
          <div className={s.hero__buttons}>
            <MainButtonComponent color="white" path="services">
              OUR SERVICES
            </MainButtonComponent>

            <MainButtonComponent color="white" path="projects">
              OUR PROJECTS
            </MainButtonComponent>
          </div>

          <div className={s.hero__logo}>
            <Image
              className={s.hero__logo_mobile}
              src={heroLogoMobile}
              alt="SoftLion"
            />
          </div>
        </div>
      </div>

      <div className={s.hero__logo_container}>
        <Image
          className={s.hero__logo_desktop}
          src={heroLogoMobile}
          alt="SoftLion"
          width={800}
          height={554}
        />

        <Image className={s.hero__logo_shadow} src={heroShadow} alt="shadow" />

        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
