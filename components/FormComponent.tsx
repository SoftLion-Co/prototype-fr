
import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import s from "./FormComponent.module.scss";
import Link from "next/link";

interface FormData {
  email: string;
  phone: string;
  description: string;
}

const FormComponent = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<FormData>();

  const handleFormSubmit: SubmitHandler<FormData> = (data) => {
    console.log("email:", data.email);
    console.log("phone:", data.phone);
    console.log("description:", data.description);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className={s.form__title}>Book consultation</h2>
      <span className={s.form__line}></span>
      <div className={s.form__container}>
        <div className={s.form__input}>
          <input
            type="email"
            className={s.form__field}
            placeholder=" "
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
          <label className={s.form__label} htmlFor="email">
            E-mail
          </label>
          {errors.email && (
            <p className={s.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={s.form__input}>
          <input
            type="tel"
            className={s.form__field}
            placeholder=" "
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9+\-\s]+$/i,
                message: "Please enter a valid phone number",
              },
            })}
          />
          <label className={s.form__input_label} htmlFor="phone">
            Phone
          </label>
          {errors.phone && (
            <p className={s.error}>{errors.phone.message}</p>
          )}
        </div>
        <div className={s.form__input}>
          <input
            type="text"
            className={s.form__field}
            placeholder=" "
            {...register("description", { required: "Description is required" })}
          />
          <label className={s.form__label} htmlFor="description">
            Short describe ur idea
          </label>
          {errors.description && (
            <p className={s.error}>{errors.description.message}</p>
          )}
        </div>
      </div>
      <button type="submit" className={s.form__button}>
        Book Consultation
      </button>
      <p className={s.form__text}>
        By clicking on this button I agree to the{" "}
        <Link href={''}>
          <span className={s.pr}>processing of personal data</span>
        </Link>
      </p>
    </form>
  );
};

export default FormComponent;



