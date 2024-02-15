import Image from "next/image";
import classNames from "classnames";
import s from "./HeroSection.module.scss";

import heroLogoMobile from "@/images/hero-mobile.svg";

import MainButtonComponent from "@/components/MainButtonComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

const HeroSection = () => {
  return (
    <MotionWrapper
      tag={"section"}
      className={classNames(s.container, s.hero)}
      initial
    >
      <div className={s.hero__container}>
        <MotionWrapper tag={"h1"} className={s.hero__title} variants custom={1}>
          Embrace the <span className={s.hero__word}>Lion's</span> Share
          Technological Advancements with{" "}
          <span className={s.hero__word}>SoftLion</span>
        </MotionWrapper>

        <MotionWrapper
          tag={"p"}
          className={s.hero__description}
          variants
          custom={1.5}
        >
          Our company provides an individual approach for each client to turn
          your ideas into reality.
        </MotionWrapper>

        <div className={s.hero__content}>
          <MotionWrapper
            tag={"div"}
            className={s.hero__buttons}
            variants
            custom={2}
          >
            <MainButtonComponent color="white" path="services">
              OUR SERVICES
            </MainButtonComponent>

            <MainButtonComponent color="white" path="projects">
              OUR PROJECTS
            </MainButtonComponent>
          </MotionWrapper>

          <MotionWrapper
            tag={"div"}
            variants
            custom={2}
            className={s.hero__logo}
          >
            <Image
              className={s.hero__logo_mobile}
              src={heroLogoMobile}
              alt="SoftLion"
            />
          </MotionWrapper>
        </div>
      </div>

      <MotionWrapper
        tag={"div"}
        variants
        custom={1.5}
        className={s.hero__logo_container}
      >
        <div className={s.hero__logo_shadow}></div>
        <Image
          className={s.hero__logo_desktop}
          src={heroLogoMobile}
          alt="SoftLion"
          width={800}
          height={554}
        />

        <div className={s.blur}>
          <div className={s.blur_item1}></div>
          <div className={s.blur_item2}></div>
          <div className={s.blur_item3}></div>
        </div>
      </MotionWrapper>
    </MotionWrapper>
  );
};

export default HeroSection;
