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
    reset
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      comment: ''
    }
  });

  watch(({ name, email, comment }) => {
    setSubmitDisabled(!name || !email || !comment);
  });

  const onSubmit = (data: FormData): void => {
    const { name, email, comment } = data;

    console.log("Name: ", name, "Email: ", email, "Comment: ", comment);
    reset();
  };

  return (
    <section className={classNames(s.container, s.impression)}>
      <h2 className={s.impression__title}>Hope it was interesting for you</h2>
      <div className={s.impression__container}>
        <div className={s.rating}>
          <p className={s.rating__text}>We are happy to know your opinion.</p>
          <Rating size="lg" value={value} onChange={setValue} />
        </div>

        <div className={s.feedback}>
          <h3 className={s.feedback__title}>If u have any ideas this is a place where you can share with us.</h3>
          <div className={s.feedback__container}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={classNames(s.form__input, { [s.error__input]: errors.name })}>
                <input placeholder="Name" {...register("name")} />
              </div>
              <div className={classNames(s.form__input, { [s.error__input]: !submitDisabled && errors.email })}>
                <input
                  placeholder="Email"
                  {...register("email", {
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please enter a valid email address" },
                  })}
                />
                {!submitDisabled && errors.email && <p className={s.error}>{errors.email.message}</p>}
              </div>
              <div className={classNames(s.form__textarea, { [s.error__input]: errors.comment })}>
                <textarea placeholder="Your comment" {...register("comment")} />
              </div>
              <MainButtonComponent disabled={submitDisabled} type="submit">
                SEND
              </MainButtonComponent>
            </form>
            <div className={s.image__container}>
              <Image width={340} height={450} src={BlogImpression} alt="person" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpressionSection;
