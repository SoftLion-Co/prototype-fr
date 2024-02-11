import s from "./OurServicesHeadingComponent.module.scss";
import HeadingComponent from "./../HeadingComponent";
import classNames from "classnames";

const OurServicesHeadingComponent = () => {
  return (
    <div className={classNames(s.heading, s.container)}>
      <HeadingComponent className={s.heading__title} text="Our Services" />
      
      <p className={s.heading__text}>
        We offer comprehensive custom software development services, from
        requirements analysis and interface design to programming, testing, and
        deployment. We work with a variety of technologies and platforms,
        including JS (TS), React, Vue, Angular, Node.js, .Net, and Java, to
        ensure that we can deliver high-quality websites and apps that meet the
        unique needs of our clients.
      </p>

      <div className={s.blur}>
        <div className={s.blur_item}></div>
      </div>
    </div>
  );
};

export default OurServicesHeadingComponent;
