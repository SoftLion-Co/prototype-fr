"use client";
import { useState, useEffect, useRef } from "react";
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

  const [surNameError, setSurNameError] = useState({
    firstName: "",
    lastName: "",
  });

  const [focusedField, setFocusedField] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isShownRepeat, setIsShownRepeat] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    if (fieldName === "firstName" || fieldName === "lastName") {
      const isValidCharLength = value.length >= 2;
      if (!isValidCharLength) {
        setSurNameError((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "Please enter more than 2 characters",
        }));
      } else {
        setSurNameError((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "",
        }));
      }
    }

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

  // const [isMatch, setIsMatch] = useState(true);

  const isMatchRef = useRef(false);

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

    // if (newPassword && repeatNewPassword && newPassword !== repeatNewPassword) {
    //   setPasswordError("Passwords do not match");
    // } else {
    //   setPasswordError("");
    // }
    if (newPassword.length >= repeatNewPassword.length) {
      isMatchRef.current = true;
      for (let i = 0; i < repeatNewPassword.length; i++) {
        if (newPassword[i] !== repeatNewPassword[i]) {
          isMatchRef.current = false;
          break;
        }
      }
      if (!isMatchRef.current) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    } else {
      setPasswordError("Passwords do not match");
    }
  }, [passwords]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { email } = userData;
      const { newPassword } = passwords;
      await CustomerService.updateCustomer(userData);
      await AuthService.changePassword({ email, password: newPassword });
    } catch (error) {
      console.error("Помилка при оновленні даних:", error);
    }
  };

  const togglePassword = () => {
    setIsShown((isShown) => !isShown);
  };

  const toggleRepeatPassword = () => {
    setIsShownRepeat((isShownRepeat) => !isShownRepeat);
  };

  const hasErrors = () => {
    return (
      !!surNameError.firstName ||
      !!surNameError.lastName ||
      !!emailError ||
      (!!passwordError && passwords.newPassword.trim().length > 0) ||
      (!!passwordValidation.patternError &&
        passwords.newPassword.trim().length > 0) ||
      (!!passwords.newPassword &&
        !!passwords.repeatNewPassword &&
        passwords.newPassword !== passwords.repeatNewPassword) ||
      (!passwords.newPassword && !!passwords.repeatNewPassword) ||
      (!!passwords.newPassword && !passwords.repeatNewPassword)
    );
  };

  return (
    <section className={s.settings}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.formSection}>
          <h3>Personal Information</h3>
          <div className={s.formInput}>
            <div className={s.formRow}>
              <label>Change name</label>
              <input
                placeholder="Name"
                type="text"
                value={userData.firstName}
                className={classNames({
                  [s.invalid]: surNameError.firstName,
                })}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              {surNameError.firstName && (
                <p className={s.error__message}>{surNameError.firstName}</p>
              )}
            </div>
            <div className={s.formRow}>
              <label>Change surname</label>
              <input
                placeholder="Surname"
                type="text"
                value={userData.lastName}
                className={classNames({
                  [s.invalid]: surNameError.lastName,
                })}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
              {surNameError.lastName && (
                <p className={s.error__message}>{surNameError.lastName}</p>
              )}
            </div>
          </div>
        </div>

        <div className={s.formSection}>
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
                  name: "phone",
                  required: true,
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
        </div>

        <div className={classNames(s.formSection, s.security)}>
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
                onFocus={() => {
                  if (
                    ((passwords.newPassword.length > 0 &&
                      passwordValidation.minLengthError) ||
                      (passwords.newPassword.length >= 8 &&
                        passwordValidation.patternError)) &&
                    !focusedField
                  ) {
                    setFocusedField(false);
                    console.log("1");
                  } else {
                    setFocusedField(true);
                    console.log("2");
                  }
                }}
                onBlur={() => {
                  setFocusedField(false);
                }}
                // className={classNames({
                //   [s.invalid]:
                //     ((passwordValidation.minLengthError ||
                //       passwordValidation.patternError) &&
                //       passwords.newPassword.trim().length > 0 &&
                //       focusedField) ||
                //     passwords.newPassword !== passwords.repeatNewPassword,
                // })}
                className={classNames({
                  [s.invalid]:
                    (passwordValidation.minLengthError ||
                      passwordValidation.patternError) &&
                    passwords.newPassword.trim().length > 0 &&
                    !focusedField,
                })}
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
            <div className={s.error__message}>
              {passwords.newPassword.length > 0 &&
                !focusedField &&
                passwordValidation.minLengthError && (
                  <span>{passwordValidation.minLengthError}</span>
                )}

              {!focusedField &&
                passwords.newPassword.length >= 8 &&
                passwordValidation.patternError && (
                  <span>{passwordValidation.patternError}</span>
                )}
            </div>

            <div className={s.password}>
              <input
                placeholder="Repeat new password"
                type={isShownRepeat ? "text" : "password"}
                value={passwords.repeatNewPassword}
                onChange={(e) =>
                  handlePasswordChange("repeatNewPassword", e.target.value)
                }
                onBlur={() => {
                  if (
                    passwords.newPassword !== passwords.repeatNewPassword &&
                    isMatchRef.current
                  ) {
                    setPasswordError("Passwords do not match");
                  }
                }}
                className={classNames({
                  [s.invalid]:
                    passwordError ||
                    (passwords.newPassword !== passwords.repeatNewPassword &&
                      !isMatchRef.current),
                })}
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
        </div>
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
