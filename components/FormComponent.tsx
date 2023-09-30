"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import s from "./FormComponent.module.scss";
import Link from "next/link";
import axios from "axios";

interface FormProps {
  title: string;
}

interface FormData {
  email: string;
  phone: string;
  description: string;
}

const FormComponent: React.FC<FormProps> = ({ title }) => {
  const [phone, setPhone] = useState("");
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
      email: "",
      phone: "",
      description: "",
    },
  });


  const [textareaHeight, setTextareaHeight] = useState('auto'); // Оголошення textareaHeight

  // Функція для встановлення висоти <textarea> в залежності від змісту
  const adjustTextareaHeight = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = 'auto'; // Спершу встановіть висоту на автоматичну
    textarea.style.height = `${textarea.scrollHeight}px`; // Встановіть висоту відповідно до змісту
    setTextareaHeight(textarea.style.height); // Збережіть висоту у стані компонента
  };
  const watchEmail = watch("email");
  const watchDescription = watch("description");

  const handleFormSubmit = async (data: FormData) => {
    try {
      if (!data.email || !phone || !data.description) {
        console.log("Please fill in all required fields");
        return;
      }

      console.log("email:", data.email);
      console.log("phone:", phone);
      console.log("description:", data.description);

      const formData = {
        email: data.email,
        phone: "+" + phone,
        description: data.description,
      };

      // Replace "https://example.com/api/submit" with your actual backend endpoint
      const response = await axios.post(
        "https://example.com/api/submit",
        formData
      );

      console.log("Form successfully submitted:", response.data);

      setIsFormSubmitted(true);
      reset();
      setPhone("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    setSubmitDisabled(!watchEmail || !phone || !watchDescription);
  }, [watchEmail, phone, watchDescription]);

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
              name: "phone",
              className: `${s.form__field} ${s.phoneInput} ${
                errors.phone ? s.invalidField : ""
              }`,
              placeholder: "",
            }}
            enableSearch
            disableSearchIcon
            inputClass={s.phoneInput}
            country={"us"}
            value={phone}
            onChange={(phone: string) => setPhone(phone)}
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
          {errors.phone && <p className={s.error}>{errors.phone.message}</p>}
        </div>
        <div className={s.form__input}>
      <textarea
        placeholder='Short describe ur idea'
        cols={3}
        rows={1}
        draggable={false}
        className={s.form__area}
        style={{ height: textareaHeight }}
        onInput={adjustTextareaHeight}
        {...register('description', {
          required: 'Description is required',
        })}
      ></textarea>
      {errors.description && (
        <p className={s.error}>{errors.description.message}</p>
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
        <Link href="privacy-policy" className={s.pr}>
        processing of personal data
      </Link>
      </p>
    </form>
  );
};

export default FormComponent;
