import React, { FC } from "react";
import classNames from "classnames";
import s from "./ProjectContactUs.module.scss";
import FormComponent from "@/components/FormComponent";
import HeadingComponent from "@/components/HeadingComponent";

interface Atribute {
  className?: string;
}

const ProjectContactUs: FC<Atribute> = ({ className }) => {
  return (
    <section className={className}>
      <div className={s.container}>
        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
        <HeadingComponent className={s.heading} text="Contact Us" />
      </div>
      <div className={classNames(s.our_form, s.container)}>
        <FormComponent title="Share an idea with us" />
      </div>
    </section>
  );
};

export default ProjectContactUs;
