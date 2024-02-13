import s from "./OurServicesHeadingComponent.module.scss";
import HeadingComponent from "./../HeadingComponent";
import classNames from "classnames";
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
        custom={1.5}
        className={s.heading__text}
      >
        We offer comprehensive custom software development services, from
        requirements analysis and interface design to programming, testing, and
        deployment. We work with a variety of technologies and platforms,
        including JS (TS), React, Vue, Angular, Node.js, .Net, and Java, to
        ensure that we can deliver high-quality websites and apps that meet the
        unique needs of our clients.
      </MotionWrapper>

      <div className={s.blur}>
        <div className={s.blur_item}></div>
      </div>
    </MotionWrapper>
  );
};

export default OurServicesHeadingComponent;
