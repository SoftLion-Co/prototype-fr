import React, { FC } from "react";
import classNames from "classnames";
import s from "./ContactUsSection.module.scss";
import FormComponent from "../../../components/FormComponent";
import HeadingComponent from "../../../components/HeadingComponent";
import MotionWrapper from "@/hooks/MotionWrapper";

interface Attributes {
  className?: string;
}

const ContactUsSection: FC<Attributes> = ({ className }) => {
  return (
    <section className={classNames(className)}>
      <div className={classNames(s.container, s.our__form)}>
        <div className={s.heading}>
          <HeadingComponent
            className={s.heading__title}
            text="Contact Us"
            tag="h2"
          />
          <MotionWrapper
            tag="p"
            initial
            viewport
            variants
            custom={2}
            className={s.heading__text}
          >
            Submit your request now, and we will get in touch with you to
            discuss the details and develop a customized solution. Together, we
            can create a powerful tool for your business and ensure your success
            in the e-commerce world.
          </MotionWrapper>
        </div>

        <FormComponent title="Book consultation" />

        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
