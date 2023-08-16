import React from "react";
import s from "./DevelopmentSection.module.scss";
import HeadingComponent from "@/components/technologies/HeadingComponent";

const DevelopmentSection = () => {
  return (
    <section className={s.container}>
      <h2>
        <HeadingComponent
          color="orange"
          text="Our development services for Java include"
        />
      </h2>
    </section>
  );
};

export default DevelopmentSection;
