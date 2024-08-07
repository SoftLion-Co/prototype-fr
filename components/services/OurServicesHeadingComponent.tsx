import classNames from "classnames";
import s from "./OurServicesHeadingComponent.module.scss";
import HeadingComponent from "./../HeadingComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

const OurServicesHeadingComponent = () => {
  return (
    <MotionWrapper className={classNames(s.heading, s.container)}>
      <HeadingComponent className={s.heading__title} text="Our Services" />

      <MotionWrapper
        tag="p"
        initial
        viewport
        variants
        custom={0.5}
        className={s.heading__text}
      >
        We offer comprehensive custom software development services, from
        requirements analysis and interface design to programming, testing, and
        deployment. We work with a variety of technologies and platforms,
        including JS (TS), React, Vue, Angular, Node.js, .Net, and Java, to
        ensure that we can deliver high-quality websites and apps that meet the
        unique needs of our clients.
      </MotionWrapper>

      <MotionWrapper initial viewport variants custom={2} className={s.blur}>
        <div className={s.blur_item1}></div>
        <div className={s.blur_item2}></div>
        <div className={s.blur_item3}></div>
      </MotionWrapper>
    </MotionWrapper>
  );
};

export default OurServicesHeadingComponent;
