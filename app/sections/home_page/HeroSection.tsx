import s from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={s.hero}>
      <div>
        <div className={s.hero__wrapperInf}>
          <h1 className={s.hero__name}>
            Embrace the Lion's Share Technological Advancements with{" "}
            <span className={s.hero__nameComp}>SoftLion</span>
          </h1>
          <p className={s.hero__description}>
            Our company provides an individual approach for each client to turn
            your ideas into reality.
          </p>
        </div>
        <div className={s.hero__warpperBtn}>
          <button className={s.hero__btns}>
            <p className={s.hero__btnText}>OUR SERVICES</p>
          </button>
          <button className={s.hero__btns}>
            <p className={s.hero__btnText}>OUR PROJECTS</p>
          </button>
        </div>
      </div>
      <div className={s.hero__wrapperSecond}>
        <div className={s.hero__foto}></div>
        <div className={s.hero__warpperBtnMob}>
          <button className={s.hero__btns}>
            <p className={s.hero__btnText}>OUR SERVICES</p>
          </button>
          <button className={s.hero__btns}>
            <p className={s.hero__btnText}>OUR PROJECTS</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
