"use client"
import MainButtonComponent from "@/components/MainButtonComponent"
import s from "./EnterCodeSection.module.scss"
import React, { useState } from 'react';
import ReactCodeInput from 'react-code-input';
import classNames from "classnames";

const EnterCodeSection = () => {
    return (
        <div className={classNames(s.container, s.code)}>
            <h2 className={s.title}>Please, enter your code.</h2>
            <p className={classNames(s.text, s.message)}>A confirmation code has been sent to the email...</p>
            <form className={s.form} >
            <ReactCodeInput className={s.form__input} name="code" inputMode="numeric" type="text" fields={6} />
            <div className={s.option}>
                <p className={s.text}>Didn't get the code?</p>
                <button className={classNames(s.option__button, s.text)}>Click here</button>
            </div>
            <MainButtonComponent className={s.auth_button}>Enter</MainButtonComponent>
            </form>
        </div>
    )
}

export default EnterCodeSection