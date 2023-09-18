import classNames from "classnames";
import { FC, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import s from "./PasswordInput.module.scss";

type PasswordInputProps = {
  /** Custom class that would be assigned to HTML input element*/
  inputClass: string;
  /** Should pass errors.password from the react-hook-form*/
  error?: FieldError | undefined;
  /** boolean indicates to show or hide error (red border and error message) */
  showError: boolean;
  /** react-hook-form register callback to register custom field inside your form */
  register: UseFormRegister<any>;
  /** custom placeholder text (by default: Password:) */
  placeholder?: string;
  /** custom error text (by default: Password should be at least 8 characters long) */
  errorText?: string;
  /**custom input name thet will be registered in react hook form */
  registerName?: string;
  /**boolean indicates to show or hide validation for input */
  applyValidation?: boolean;
};

const PasswordInput: FC<PasswordInputProps> = ({
  inputClass,
  error,
  showError,
  placeholder = "Password",
  register,
  registerName = "password",
  errorText = "Password should be at least 8 characters long",
  applyValidation = true,
}) => {
  const [isShown, setIsShown] = useState(false);
  const invalid = error && showError;
  const validation = applyValidation
    ? {
        minLength: { value: 8, message: errorText },
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          message: "Password should include at least one lowercase letter, one uppercase letter, and one digit",
        },
      }
    : {};

  const togglePassword = () => {
    setIsShown((isShown) => !isShown);
  };

  return (
    <>
      <div className={s.password}>
        <input
          type={isShown ? "text" : "password"}
          className={classNames(inputClass, { [s.error__input]: invalid })}
          placeholder={placeholder}
          {...register(registerName, validation)}
        />
        {isShown ? (
          <BsEyeSlash className={s.password__icon} onClick={togglePassword} />
        ) : (
          <BsEye className={s.password__icon} onClick={togglePassword} />
        )}
      </div>
      {invalid && <p className={s.error__message}>{error.message}</p>}
    </>
  );
};

export default PasswordInput;
