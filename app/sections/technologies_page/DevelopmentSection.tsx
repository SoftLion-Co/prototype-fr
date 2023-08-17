import React, { FC } from "react";
import s from "./DevelopmentSection.module.scss";
import HeadingComponent from "@/components/technologies/HeadingComponent";

interface Props {
  titleTech: string;
}

const DevelopmentSection: FC<Props> = ({ titleTech }) => {
  return (
    <section className={s.container}>
      <HeadingComponent
        color="orange"
        text={`Our development services for ${titleTech} include`}
      />
    </section>
  );
};

export default DevelopmentSection;
