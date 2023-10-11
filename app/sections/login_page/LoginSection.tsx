"use client";
import classNames from "classnames";
import s from "./LoginSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EmailInput } from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import Link from "next/link";
import authService from "@/services/auth-service";

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
    authService.signIn(data);
    console.log("Email: ", email, "Password: ", password);
    reset();
  };

  return (
    <div className={classNames(s.container, s.section)}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Login</h1>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <EmailInput
            applyValidation={false}
            error={errors.email}
            inputClass={s.input_underline}
            register={register}
            showError={!submitDisabled}
          />
          <PasswordInput
            inputClass={classNames(s.input_underline, {
              [s.error__input]: !submitDisabled && errors.password,
            })}
            error={errors.password}
            showError={!submitDisabled}
            register={register}
            applyValidation={false}
          />
          <MainButtonComponent
            disabled={submitDisabled}
            className={s.auth_button}
            type="submit"
          >
            Log in
          </MainButtonComponent>
        </form>
        <Link className={s.option} href="/forgot-password">
          Forgot password?
        </Link>
      </div>
    </div>
  );
};

export default LoginSection;
