"use client";
import MainButtonComponent from "@/components/MainButtonComponent";
import s from "./EnterCodeSection.module.scss";
import React, { useState, useEffect } from "react";
import ReactCodeInput from "react-code-input";
import classNames from "classnames";
import { useSearchParams } from "next/navigation";
import authService from "@/services/auth-service";
import CryptoJS from "crypto-js";

const EnterCodeSection = () => {
  const [countdown, setCountdown] = useState(60);
  const [isCounting, setIsCounting] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [code, setCode] = useState(localStorage.getItem("code"));

  useEffect(() => {
    let interval: number;

    if (isCounting && countdown > 0) {
      interval = window.setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsCounting(false);
    }

    return () => clearInterval(interval);
  }, [countdown, isCounting]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleButtonClick = async () => {
    if (!isCounting) {
      setIsCounting(true);
      setCountdown(60);

      try {
        console.log("Email: ", email);
        const response = await authService.sendCode(email);
        console.log(response);
        const bytes = CryptoJS.AES.decrypt(
          response.result,
          "AAECAwQFBgcICQoLDA0ODw=="
        );
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        setCode(decryptedData);
      } catch (error) {
        console.error("error");
      }
    }
  };

  return (
    <div className={classNames(s.container, s.code)}>
      <h2 className={s.title}>Please, enter your code.</h2>
      <p className={classNames(s.text, s.message)}>
        A confirmation code has been sent to the email {email}
      </p>
      <form className={s.form}>
        <ReactCodeInput
          className={s.form__input}
          name="code"
          inputMode="numeric"
          type="text"
          fields={6}
        />
        <div className={s.option}>
          <p className={s.text}>Didn't get the code?</p>

          {isCounting ? (
            <span className={classNames(s.text, s.timer)}>
              Resend cod in {formatTime(countdown)}
            </span>
          ) : (
            <button
              type="button"
              className={classNames(s.option__button, s.text)}
              onClick={handleButtonClick}
              disabled={isCounting}
            >
              Click here
            </button>
          )}
        </div>
        <MainButtonComponent className={s.auth_button}>
          Enter
        </MainButtonComponent>
      </form>
    </div>
  );
};

export default EnterCodeSection;
