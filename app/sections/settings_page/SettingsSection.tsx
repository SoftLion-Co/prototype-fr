"use client";
import { useState, useEffect } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";

import CustomerService from "@/services/customer-service";
import AuthService from "@/services/auth-service";
import { useOrderProjectData } from "@/hooks/useOrderProjectData";

import "react-phone-input-2/lib/style.css";
import classNames from "classnames";
import s from "./SettingsSection.module.scss";

const SettingsSection: React.FC = () => {
  const { settingsData } = useOrderProjectData();

  const [userData, setUserData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [passwords, setPasswords] = useState({
    newPassword: "",
    repeatNewPassword: "",
  });

  const [passwordValidation, setPasswordValidation] = useState({
    minLengthError: "",
    patternError: "",
  });

  const [focusedField, setFocusedField] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isShownRepeat, setIsShownRepeat] = useState(false);

  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (settingsData) {
      const { id, firstName, lastName, email, phoneNumber } = settingsData;
      setUserData({
        id,
        firstName: firstName || "",
        lastName: lastName || "",
        email: email || "",
        phoneNumber: phoneNumber || "",
      });
    }
  }, []);

  const handleInputChange = (fieldName: string, value: string) => {
    if (fieldName === "email") {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const isValidEmail = emailPattern.test(value);
      if (!isValidEmail) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }

    setUserData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handlePasswordChange = (fieldName: string, value: string) => {
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    const { newPassword, repeatNewPassword } = passwords;
    const minLengthError =
      newPassword.length < 8
        ? "Password should be at least 8 characters long"
        : "";
    const patternError = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
      newPassword
    )
      ? ""
      : "Password should include at least one lowercase letter, one uppercase letter, and one digit";

    setPasswordValidation({ minLengthError, patternError });

    if (newPassword && repeatNewPassword && newPassword !== repeatNewPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  }, [passwords]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { email } = userData;
      const { newPassword } = passwords;
      await CustomerService.updateCustomer(userData);
      await AuthService.changePassword({ email, password: newPassword });
      console.log("Дані успішно оновлено!");
    } catch (error) {
      console.error("Помилка при оновленні даних:", error);
    }
  };

  const validatePassword = (password: string) => {
    const isValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password) &&
      password.length >= 8;
    setIsPasswordValid(isValid);
  };

  const togglePassword = () => {
    setIsShown((isShown) => !isShown);
  };

  const toggleRepeatPassword = () => {
    setIsShownRepeat((isShownRepeat) => !isShownRepeat);
  };
  const hasErrors = () => {
    return (
      !!emailError ||
      !!passwordError ||
      (!!passwords.newPassword &&
        !!passwords.repeatNewPassword &&
        passwords.newPassword !== passwords.repeatNewPassword) ||
      (!!passwords.newPassword && !isPasswordValid)
    );
  };

  return (
    <section className={s.settings}>
      <form className={s.form} onSubmit={handleSubmit}>
        <section className={s.formSection}>
          <h3>Personal Information</h3>
          <div className={s.formInput}>
            <div className={s.formRow}>
              <label>Change name</label>
              <input
                placeholder="Name"
                type="text"
                value={userData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
            <div className={s.formRow}>
              <label>Change surname</label>
              <input
                placeholder="Surname"
                type="text"
                value={userData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className={s.formSection}>
          <h3>Contacts</h3>
          <div className={s.formInput}>
            <div className={s.formRow}>
              <label>Change email</label>
              <input
                placeholder="Email"
                type="email"
                value={userData.email}
                className={classNames({
                  [s.invalid]: emailError,
                })}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              {emailError && <p className={s.error__message}>{emailError}</p>}
            </div>
            <div className={s.formRow}>
              <label>Change phone</label>
              <PhoneInput
                inputProps={{
                  required: true,
                  name: "phoneNumber",
                  className: s.customInput,
                }}
                value={userData.phoneNumber}
                onChange={(value) => handleInputChange("phoneNumber", value)}
                country={"us"}
                inputClass={s["input-phone"]}
                buttonClass={s["btn-flag"]}
                dropdownClass={s["drop"]}
                containerClass={s["container-input"]}
              />
            </div>
          </div>
        </section>

        <section className={classNames(s.formSection, s.security)}>
          <h3>Security</h3>
          <div className={s.formRow}>
            <label>New password</label>
            <div className={s.password}>
              <input
                placeholder="New password"
                type={isShown ? "text" : "password"}
                value={passwords.newPassword}
                onChange={(e) =>
                  handlePasswordChange("newPassword", e.target.value)
                }
                onFocus={() => setFocusedField(true)}
                onBlur={() => {
                  setFocusedField(false);
                  validatePassword(passwords.newPassword);
                }}
                className={
                  !focusedField && passwords.newPassword && !isPasswordValid
                    ? s.invalid
                    : ""
                }
              />
              {isShown ? (
                <BsEyeSlash
                  className={s.password__icon}
                  onClick={togglePassword}
                />
              ) : (
                <BsEye className={s.password__icon} onClick={togglePassword} />
              )}
            </div>
            {(passwordValidation.minLengthError ||
              passwordValidation.patternError) &&
              focusedField && (
                <div className={s.error__message}>
                  {passwordValidation.minLengthError && (
                    <span>{passwordValidation.minLengthError}</span>
                  )}
                  {passwordValidation.patternError &&
                    !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(
                      passwords.newPassword
                    ) && <span>{passwordValidation.patternError}</span>}
                </div>
              )}

            <div className={s.password}>
              <input
                placeholder="Repeat new password"
                type={isShownRepeat ? "text" : "password"}
                value={passwords.repeatNewPassword}
                onChange={(e) =>
                  handlePasswordChange("repeatNewPassword", e.target.value)
                }
                onFocus={() => setFocusedField(true)}
                onBlur={() => {
                  setFocusedField(false);
                  validatePassword(passwords.repeatNewPassword);
                }}
                className={
                  !focusedField &&
                  passwords.repeatNewPassword &&
                  !isPasswordValid
                    ? s.invalid
                    : ""
                }
              />
              {isShownRepeat ? (
                <BsEyeSlash
                  className={s.password__icon}
                  onClick={toggleRepeatPassword}
                />
              ) : (
                <BsEye
                  className={s.password__icon}
                  onClick={toggleRepeatPassword}
                />
              )}
            </div>
            {passwordError && (
              <span className={s.error__message}>{passwordError}</span>
            )}
          </div>
        </section>
        <div className={s.formBtn}>
          <button type="submit" disabled={hasErrors()}>
            Save changes
          </button>
        </div>
      </form>
    </section>
  );
};

export default SettingsSection;
