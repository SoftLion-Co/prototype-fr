"use client";
import s from "./ImpressionSection.module.scss";
import { Rating } from "@mantine/core";
import MainButtonComponent from "@/components/MainButtonComponent";
import Image from "next/image";
import classNames from "classnames";
import BlogImpression from "./../../../images/BlogImpression.svg";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  comment: string;
}

const ImpressionSection = () => {
  const [value, setValue] = useState(0);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  watch(({ name, email, comment }) => {
    setSubmitDisabled(!name || !email || !comment);
  });

  const onSubmit = (data: FormData): void => {
    const { name, email, comment } = data;

    console.log("Name: ", name, "Email: ", email, "Comment: ", comment);
  };

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
            <form className={s.feedback_form} onSubmit={handleSubmit(onSubmit)}>
              <div className={classNames(s.feedback_form_input, { [s.error_input]: errors.name })}>
                <input placeholder="Name" {...register("name")} />
              </div>
              <div className={classNames(s.feedback_form_input, { [s.error_input]: !submitDisabled && errors.email })}>
                <input
                  placeholder="Email"
                  {...register("email", {
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please enter a valid email address" },
                  })}
                />
                {!submitDisabled && errors.email && <p className={s.error}>{errors.email.message}</p>}
              </div>
              <div className={classNames(s.feedback_form_textarea, { [s.error_input]: errors.comment })}>
                <textarea placeholder="Your comment" {...register("comment")} />
              </div>
              <MainButtonComponent disabled={submitDisabled} type="submit">
                SEND
              </MainButtonComponent>
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
