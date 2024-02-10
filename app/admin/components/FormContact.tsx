"use client";
// ContactUs.tsx
// ContactUs.tsx
import React, { FC, useState, useEffect } from "react";
import s from "./FormContact.module.scss";
import Image from "next/image";
import email from "../images/applications/mail.svg";
import phone from "../images/applications/numberOfPhone.svg";
import desc from "../images/applications/description.svg";
import time from "../images/applications/data.svg";

// Оголосіть інтерфейс для властивості ContactData
interface ContactData {
  number: number;
  data: string;
  email: string;
  description: string;
  tell: number;
}

// Оголосіть інтерфейс для властивостей компонента ContactUs
interface ContactUsProps {
  ContactData: ContactData;
}

const ContactUs: FC<ContactUsProps> = ({ ContactData }) => {
  // Встановлюємо початкове значення description
  const [description, setDescription] = useState(ContactData.description);

  // Використовуємо useEffect для оновлення description при зміні ContactData
  useEffect(() => {
    setDescription(ContactData.description);
  }, [ContactData]);
  return (
    <div>
      <div className={s.form}>
        <div className={s.form_content}>
          <div className={s.form_phone}>
            <Image src={phone} alt="phone" />
            <p className={s.form_phone_text}>
              Номер телефону: {ContactData.tell}
            </p>
          </div>
          <div className={s.form_email}>
            <Image src={email} alt="email" />
            <p className={s.form_email_text}>Email: {ContactData.email}</p>
          </div>
          <div className={s.form_description}>
            <Image src={desc} alt="description" />
            <p className={s.form_description_text}>Короткий опис: </p>
          </div>
          <textarea
            className={s.form_description__text}
            name="Area"
            id=""
            cols={30}
            rows={10}
            value={description}
          >
            {description}
          </textarea>
          <div className={s.form_data}>
            <Image src={time} alt="data" />
            <p className={s.form_data__text}>
              Дата відправлення: {ContactData.data}
            </p>
          </div>
        </div>
        <span className={s.line}></span>
        <div className={s.form_button}>
          <button className={s.form_button_text}>Прийняти</button>
          <button className={s.form_button_text}>Відхилити</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
