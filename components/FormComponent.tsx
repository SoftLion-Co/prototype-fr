"use client";

import React, { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import s from "./FormComponent.module.scss";
import Link from "next/link";
import orderProjectService from "./../services/order-project-service";

interface FormProps {
  title: string;
}

interface FormData {
  numberPhone: string;
  email: string;
  shortDescription: string;
}

const FormComponent: FC<FormProps> = ({ title }) => {
  const [numberPhone, setPhone] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      numberPhone: "",
      email: "",
      shortDescription: "",
    },
  });

  const [textareaHeight, setTextareaHeight] = useState("auto");

  const adjustTextareaHeight = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setTextareaHeight(textarea.style.height);
  };
  const watchEmail = watch("email");
  const watchDescription = watch("shortDescription");

  const handleFormSubmit = async (data: FormData) => {
    try {
      if (!data.email || !numberPhone || !data.shortDescription) {
        console.log("Please fill in all required fields");
        return;
      }

      const formData = {
        numberPhone: "+" + numberPhone,
        email: data.email,
        shortDescription: data.shortDescription,
      };
      await orderProjectService.createOrderProject(formData);

      setIsFormSubmitted(true);
      reset();
      setPhone("");
    } catch (error) {
      console.error("Error submitting form:", error);

      reset();
      setPhone("");
    }
  };

  useEffect(() => {
    setSubmitDisabled(!watchEmail || !numberPhone || !watchDescription);
  }, [watchEmail, numberPhone, watchDescription]);

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
    >
      <h2 className={s.form__title}>{title}</h2>
      <span className={s.form__line}></span>
      <div className={s.form__container}>
        <div className={s.form__input}>
          <input
            type="email"
            className={`${s.form__field} ${errors.email ? s.invalidField : ""}`}
            placeholder="E-mail"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && <p className={s.error}>{errors.email.message}</p>}
        </div>
        <div className={s.form__input}>
          <PhoneInput
            inputProps={{
              required: true,
              name: "numberPhone",
              className: `${s.form__field} ${s.phoneInput} ${
                errors.numberPhone ? s.invalidField : ""
              }`,
              placeholder: "",
            }}
            enableSearch
            disableSearchIcon
            inputClass={s.phoneInput}
            country={"us"}
            value={numberPhone}
            onChange={(numberPhone: string) => setPhone(numberPhone)}
            buttonClass={s["buttonC"]}
            searchClass={s["search"]}
            searchStyle={{
              border: "none",
              borderRadius: "0px",
              borderBottom: "1px solid #ccc",
              fontSize: "14px",
              paddingLeft: "5px",
              marginLeft: "0",
              width: "100%",
              paddingBottom: "6px",
              paddingTop: "6px",
              height: "20px",
            }}
            dropdownClass={s["drop"]}
            containerClass={s["container-input"]}
          />
          {errors.numberPhone && (
            <p className={s.error}>{errors.numberPhone.message}</p>
          )}
        </div>
        <div className={s.form__input}>
          <textarea
            placeholder="Short describe your idea"
            cols={3}
            rows={1}
            draggable={false}
            className={s.form__area}
            style={{ height: textareaHeight }}
            onInput={adjustTextareaHeight}
            {...register("shortDescription", {
              required: "Description is required",
            })}
          ></textarea>
          {errors.shortDescription && (
            <p className={s.error}>{errors.shortDescription.message}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className={`${s.form__button} ${
          submitDisabled ? s.disabledButton : ""
        }`}
        disabled={submitDisabled}
      >
        Book Consultation
      </button>
      <p className={s.form__text}>
        By clicking on this button I agree to the{" "}
        <Link href="/privacy-policy" className={s.form__text_link}>
          processing of personal data
        </Link>
      </p>
    </form>
  );
};

export default FormComponent;
