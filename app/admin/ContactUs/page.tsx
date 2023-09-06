"use client";

import s from "./page.module.scss";
import Image from "next/image";
import email from "../images/applications/mail.svg";
import phone from "../images/applications/numberOfPhone.svg";
import desc from "../images/applications/description.svg";
import time from "../images/applications/data.svg"

// import { ChangeEvent } from "react";

const ContactUs = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>ContactUs</h1>
      <div className={s.form}>
        <div className={s.form_content}>
          <div className={s.form_phone}>
            <Image src={phone} alt="phone" />
            <p className={s.form_phone_text}>Номер телефону:</p>
          </div>
          <div className={s.form_email}>
            <Image src={email} alt="email" />
            <p className={s.form_email_text}>Email:</p>
          </div>
          <div className={s.form_description}>
            <Image src={desc} alt="email" />
            <p className={s.form_description_text}>Короткий опис:</p>
          </div>
          <input type="text" className={s.form_input} />
          <div className={s.form_send}>
          <Image src={time} alt="email" />
          <p className={s.form_send_text}>Дата відправлення: {"21:09:12"}</p>
          </div>
          {/* <div>
          <button></button>
          <button></button>
          <button></button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
