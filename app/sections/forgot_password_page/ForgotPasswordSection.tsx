"use client";
import { EmailInput } from "@/components/EmailInput";
import s from "./ForgotPasswordSection.module.scss";
import MainButtonComponent from "@/components/MainButtonComponent";
import { useForm } from "react-hook-form";
import { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import authService from "@/services/auth-service";

interface FormData {
  email: string;
  password: string;
}

const ForgotPasswordSection = () => {
  const router = useRouter();
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

  const onSubmit = async (data: FormData) => {
    try {
      const { email } = data;
      console.log("Email: ", email);
      const response = await authService.sendCode(email);
      localStorage.setItem("email", email);
      localStorage.setItem("code", response.code);
      router.push(`/enter-code`);
      reset();
    } catch (error) {
      console.error("error");
    }
  };

  return (
    <div className={classNames(s.container, s.section)}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Forgot password?</h2>
        <p className={classNames(s.text, s.text__indent)}>We will send you a code to restore access to your account.</p>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <EmailInput
            error={errors.email}
            inputClass={s.input_underline}
            register={register}
            showError={!submitDisabled}
          />
          <MainButtonComponent type="submit" className={classNames(s.auth_button, s.button__indent)} disabled={submitDisabled}>
            Accept
          </MainButtonComponent>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordSection;
