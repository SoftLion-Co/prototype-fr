'use client'
import s from "./ImpressionSection.module.scss";
import { FormEvent, useState } from "react";
import { Rating } from "@mantine/core";
import { Input, Textarea } from "@mantine/core";
import MainButtonComponent from "@/components/MainButtonComponent";
import Image from "next/image";
import classNames from "classnames";
import BlogImpression from "./../../../images/BlogImpression.svg";

const ImpressionSection = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (event): void => {
    event.preventDefault();

    const {name, email, comment } = event.target.elements;

    console.log("Name: ", name.value, "Email: ", email.value, "Comment: ", comment.value);
  }

  return (
    <section className={classNames(s.container, s.impression)}>
      <h2 className={s.impression_title}>Hope it was interesting for you</h2>
      <div className={s.impression_container}>
        <div className={s.rating}>
          <p className={s.rating_text}>We are happy to know your opinion.</p>
          <Rating size="lg" value={value} onChange={setValue} />
        </div>

        <div className={s.feedback}>
          <h3 className={s.feedback_title}>If u have any ideas this is a place where you can share with us.</h3>
          <div className={s.feedback_container}>
            <form className={s.feedback_form} onSubmit={handleSubmit} >
              <Input name="name" className={s.feedback_form_input} type="text" placeholder="Name" />
              <Input name="email" className={s.feedback_form_input} type="email" placeholder="Email" />
              <Textarea name="comment" className={s.feedback_form_textarea} placeholder="Your comment" />
              <MainButtonComponent type="submit">SEND</MainButtonComponent>
            </form>
            <div className={s.feedback_images_container}>
              <Image className={s.feedback_images} width={340} height={450} src={BlogImpression} alt="person" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpressionSection;
