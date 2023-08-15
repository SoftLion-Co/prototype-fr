import s from "./HeroSection.module.scss";
import Image from "next/image";
import heroLogo from "./../../../images/hero-logo.svg";
import heroLogoMobile from "./../../../images/hero-mobile.svg";
import MainButtonComponent from "./../../../components/MainButtonComponent";
import classNames from "classnames";

const HeroSection = () => {
  return (
    <section className={classNames(s.container, s.hero)}>
      <div>
        <div className={s.hero__wrapper_inf}>
          <h1 className={s.hero__name}>
            Embrace the Lion's Share Technological Advancements with{" "}
            <span className={s.hero__name_comp}>SoftLion</span>
          </h1>
          <p className={s.hero__description}>
            Our company provides an individual approach for each client to turn
            your ideas into reality.
          </p>
        </div>
        <div className={s.hero__warpper_btn}>
          <MainButtonComponent color="white" path="services">
            OUR SERVICES
          </MainButtonComponent>
          <MainButtonComponent color="white" path="projects">
            OUR PROJECTS
          </MainButtonComponent>
        </div>
      </div>
      <div className={s.hero__wrapper_second}>
        <Image
          className={s.hero__logo}
          src={heroLogo}
          width={800}
          height={554}
          alt="SoftLion"
        />
        <Image
          className={s.hero__logo_small}
          src={heroLogoMobile}
          alt="SoftLion"
        />
        <div className={s.hero__warpper_btn_mob}>
          <MainButtonComponent color="white" path="services">
            OUR SERVICES
          </MainButtonComponent>
          <MainButtonComponent color="white" path="projects">
            OUR PROJECTS
          </MainButtonComponent>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
