"use client";
import classNames from "classnames";
import s from "./NewPasswordSection.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MainButtonComponent from "@/components/MainButtonComponent";
import PasswordInput from "@/components/PasswordInput";

interface FormData {
  password: string;
  passwordConfirm: string;
}

const NewPasswordSection = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setError,
  } = useForm<FormData>({
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  watch(({ password, passwordConfirm }) => {
    setSubmitDisabled(!password || !passwordConfirm);
  });

  const onSubmit = (data: FormData): void => {
    const { password, passwordConfirm } = data;

    if (password !== passwordConfirm) {
      setError("passwordConfirm", { message: "Your password do not match, please try again." });
      return;
    }

    console.log("Password: ", password, "PasswordConfirm: ", passwordConfirm);
    reset();
  };
  return (
    <div className={classNames(s.container, s.password)}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Create new password.</h2>
        {!submitDisabled && errors.passwordConfirm && <p className={s.error__password}>{errors.passwordConfirm.message}</p>}
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <PasswordInput
            inputClass={classNames(s.form__input, { [s.error__input]: !submitDisabled && errors.passwordConfirm })}
            error={errors.password}
            showError={!submitDisabled}
            register={register}
            registerName="password"
            placeholder="Password"
          />
          <PasswordInput
            inputClass={classNames(s.form__input, { [s.error__input]: !submitDisabled && errors.passwordConfirm })}
            showError={!submitDisabled}
            register={register}
            registerName="passwordConfirm"
            applyValidation={false}
            placeholder="Confirm your password"
          />
          <MainButtonComponent disabled={submitDisabled} className={s.form__button} type="submit">
            Accept
          </MainButtonComponent>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordSection;
