"use client";

import classNames from "classnames";
import s from "./LoginSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EmailInput } from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import SocialAuthorization from "@/components/SocialAuthorizationComponent";
import Link from "next/link";

interface FormData {
  email: string;
  password: string;
}

const LoginSection = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  watch(({ email, password }) => {
    setSubmitDisabled(!email || !password);
  });
  const onSubmit = (data: FormData) => {
    const { email, password } = data;
    console.log("Email: ", email, "Password: ", password);
    reset();
  };
  return (
    <div className={classNames(s.container, s.login)}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Login</h2>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <EmailInput
            applyValidation={false}
            error={errors.email}
            inputClass={s.form__input}
            register={register}
            showError={!submitDisabled}
          />
          <PasswordInput
            inputClass={classNames(s.form__input, { [s.error__input]: !submitDisabled && errors.password })}
            error={errors.password}
            showError={!submitDisabled}
            register={register}
            applyValidation={false}
          />
          <MainButtonComponent disabled={submitDisabled} className={s.form__button} type="submit">
            Log in
          </MainButtonComponent>
        </form>
        <Link className={s.option} href="/forgot-password">
          Forgot password?
        </Link>
        <div className={s.registration}>
          <span className={classNames(s.option, s.option__text)}>Don't you have an account?</span>
          <Link className={s.option} href="/registration">
            Registration
          </Link>
        </div>
      </div>
      <SocialAuthorization text="You can login with" />
    </div>
  );
};

export default LoginSection;
