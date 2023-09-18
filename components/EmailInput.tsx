import { FC } from "react";
import s from "./EmailInput.module.scss";
import classNames from "classnames";
import { FieldError, UseFormRegister } from "react-hook-form";

type EmailInputProps = {
  /** Custom class that would be assigned to HTML input element*/
  inputClass: string;
  /** Should pass errors.email from the react-hook-form*/
  error: FieldError | undefined;
  /** boolean indicates to show or hide error (red border and error message) */
  showError: boolean;
  /** react-hook-form register callback to register custom field inside your form */
  register: UseFormRegister<any>;
  /** custom placeholder text (by default: E-mail:) */
  placeholder?: string;
  /** custom error text (by default: Please enter a valid email address) */
  errorText?: string;
  /**boolean indicates to show or hide validation for input */
  applyValidation?: boolean;
};

export const EmailInput: FC<EmailInputProps> = ({
  inputClass,
  error,
  showError,
  applyValidation = true,
  placeholder = "E-mail",
  register,
  errorText = "Please enter a valid email address",
}) => {
  const invalid = error && showError;
  const validation = applyValidation
    ? {
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: errorText,
        },
      }
    : {};

  return (
    <>
      <input
        className={classNames(inputClass, { [s.error__input]: invalid })}
        placeholder={placeholder}
        {...register("email", validation)}
      />
      {invalid && <p className={s.error__message}>{error.message}</p>}
    </>
  );
};
