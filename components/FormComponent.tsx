"use client";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import s from "./FormComponent.module.scss";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const FormComponent = () => {
  const { handleSubmit, register } = useForm<FormData>();

  const handleFormSubmit: SubmitHandler<FormData> = (data) => {
    // Обробка відправки форми
  };

  return (

      <form className={s.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <h2 className={s.form__title}>Book consultation</h2>
        <span className={s.form__line}></span>
        <div className={s.form__container}>
          <div className={s.form__input}>
            <input
              type="text"
              className={s.form__field}
              placeholder=" "
              name="E-mail"
              id="name"
              required
            />
            <label className={s.form__label} htmlFor="E-mail">
              E-mail
            </label>
          </div>
          <div className={s.form__input}>
            <input
              type="number"
              className={s.form__field}
              placeholder=" "
              name="Phone"
              id="email"
              required
            />
            <label className={s.form__input_label} htmlFor="Phone">
              Phone
            </label>
          </div>
          <div className={s.form__input}>
            <input
              type="tel"
              className={s.form__field}
              placeholder=" "
              name="Short describe ur idea"
              id="phone"
              required
            />
            <label className={s.form__label} htmlFor="Short describe ur idea">
              Short describe ur idea
            </label>
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
