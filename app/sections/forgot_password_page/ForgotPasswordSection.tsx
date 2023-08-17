"use client"

import { EmailInput } from "@/components/EmailInput";
import s from "./ForgotPasswordSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import SocialAuthorization from "@/components/login-registration/SocialAuthorizationComponent";
import { useForm } from "react-hook-form";
import { useState } from "react";
import classNames from "classnames";

interface FormData {
  email: string;
  password: string;
}

const ForgotPasswordSection = () => {
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
    },
  });

  watch(({ email }) => {
    setSubmitDisabled(!email);
  });
  const onSubmit = (data: FormData) => {
    const { email } = data;
    console.log("Email: ", email);
    reset();
  };
  return (
    <div className={classNames (s.container, s.forgot)}>
        <div className={s.wrapper}>
        <h2 className={s.title}>Forgot password?</h2>
      <p className={s.text}>We will send you a link to top up your account by mail and phone number.</p>
      <form className={s.form}>
        <EmailInput
          applyValidation={false}
          error={errors.email}
          inputClass={s.form__input}
          register={register}
          showError={!submitDisabled}
        />
           <MainButtonComponent disabled={submitDisabled} className={s.form__button} type="submit">
      Accept
      </MainButtonComponent>
      </form>
        </div>
      <SocialAuthorization text="You can login with" />
    </div>
  );
};

export default ForgotPasswordSection;
