"use client";
import SocialAuthorization from "@/components/SocialAuthorizationComponent";
import s from "./RegistrationSection.module.scss";
import { LuUnlock } from "react-icons/lu";
import classNames from "classnames";
import MainButtonComponent from "@/components/MainButtonComponent";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDisclosure } from "@mantine/hooks";
import { PasswordInput } from "@mantine/core";

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

const RegistrationSection = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setError,
    control,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    },
  });

  watch(({ name, email, phone, password, passwordConfirm }) => {
    setSubmitDisabled(!name || !email || !phone || !password || !passwordConfirm);
  });

  const onSubmit = (data: FormData): void => {
    const { name, email, phone, password, passwordConfirm } = data;

    if (password !== passwordConfirm) {
      setError("passwordConfirm", { message: "Your password do not match, please try again." });
      return;
    }

    console.log("Name: ", name, "Email: ", email, "Phone: ", phone, "Password: ", password, "PasswordConfirm: ", passwordConfirm);
    reset();
  };

  return (
    <div className={classNames(s.container, s.registration)}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Registration</h2>
        <div className={s.information}>
          <LuUnlock className={s.information__icon} />
          <p className={s.information__text}>Please fill out the form, and we will register an account for you.</p>
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          {!submitDisabled && errors.passwordConfirm && <p className={s.error__password}>{errors.passwordConfirm.message}</p>}
          <input className={s.form__input} type="text" placeholder="Name" {...register("name")} />
          <input
            className={classNames(s.form__input, { [s.error__input]: !submitDisabled && errors.email })}
            placeholder="E-mail"
            {...register("email", {
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please enter a valid email address" },
            })}
          />
          {!submitDisabled && errors.email && <p className={s.error}>{errors.email.message}</p>}
          <Controller
            name="phone"
            control={control}
            rules={{ required: "Phone number is required", minLength: { value: 11, message: " Please enter a valid number " } }}
            render={({ field: { ref, ...field } }) => (
              <PhoneInput {...field} inputClass={s.phone__input} buttonClass={s.phone__dropdown} country={"us"} />
            )}
          />
          <PasswordInput
            visible={visible}
            onVisibilityChange={toggle}
            className={classNames(s.form__input, { [s.error__input]: !submitDisabled && errors.password })}
            placeholder="Create your password"
            {...register("password", {
              minLength: { value: 8, message: "Password should be at least 8 characters long" },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message: "Password should include at least one lowercase letter, one uppercase letter, and one digit",
              },
            })}
            classNames={{
              root: s.input__root,
              wrapper: s.input__wrapper,
              input: s.input,
              innerInput: s.input__inner,
            }}
          />
          {!submitDisabled && errors.password && <p className={s.error}>{errors.password.message}</p>}
          <PasswordInput
            visible={visible}
            onVisibilityChange={toggle}
            className={s.form__input}
            placeholder="Confirm your password"
            {...register("passwordConfirm")}
            classNames={{
              root: s.input__root,
              wrapper: s.input__wrapper,
              input: s.input,
              innerInput: s.input__inner,
            }}
          />
          <MainButtonComponent disabled={submitDisabled} className={s.form__button} type="submit">
            Continue
          </MainButtonComponent>
        </form>
      </div>

      <SocialAuthorization text="You can register with" />
    </div>
  );
};

export default RegistrationSection;
