"use client";

import React, { FC, useState, useCallback, useMemo } from "react";
import s from "./FormComponent.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import orderProjectService from "./../services/order-project-service";
import MotionWrapper from "@/hooks/MotionWrapper";

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

  const watchFields = watch();

  const submitDisabled = useMemo(() => {
    const { email, shortDescription } = watchFields;
    return !email || !numberPhone || !shortDescription;
  }, [watchFields, numberPhone]);

  const handleFormSubmit = useCallback(
    async (data: FormData) => {
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

        reset();
        setPhone("");
      } catch (error) {
        console.error("Error submitting form:", error);
        reset();
        setPhone("");
      }
    },
    [numberPhone, reset]
  );

  const adjustTextareaHeight = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textarea = event.target;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    },
    []
  );

  return (
    <MotionWrapper tag="div" initial viewport variants custom={1.5}>
      <form
        className={s.form}
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
      >
        <h3 className={s.form__title}>{title}</h3>
        <div className={s.form__container}>
          <span className={s.form__line}></span>
          <div className={s.form__input}>
            <input
              type="email"
              className={`${s.form__field} ${
                errors.email ? s.invalidField : ""
              }`}
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
              country={"us"}
              value={numberPhone}
              onChange={(numberPhone: string) => setPhone(numberPhone)}
              buttonClass={s.buttonC}
              searchClass={s.search}
              dropdownClass={s.drop}
              containerClass={s.container__input}
              dropdownStyle={{
                borderRadius: "8px",
              }}
              searchStyle={{
                backgroundColor: "#F0E6F0",
                textTransform: "capitalize",
                border: "none",
                fontSize: "14px",
                marginLeft: "0",
                width: "100%",
                padding: "6px 0",
                height: "20px",
              }}
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
          className={classNames(
            s.form__button,
            submitDisabled ? s.disabledButton : ""
          )}
          disabled={submitDisabled}
        >
          Book Consultation
        </button>
        <p className={s.form__text}>
          By clicking on this button I agree to the{" "}
          <Link href="/privacy-policy" className={s.form__link}>
            processing of personal data
          </Link>
        </p>
      </form>
    </MotionWrapper>
  );
};

export default FormComponent;
