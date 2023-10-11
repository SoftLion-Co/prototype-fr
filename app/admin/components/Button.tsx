import { FC } from "react";
import classNames from "classnames";
import s from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  theme?: "default" | "delete";
}

export const Button: FC<Props> = ({ text, theme = "default", ...restProps }) => {
  return (
    <button
      className={classNames(s.button, theme === "delete" ? s.button__delete : "")}
      type="button"
      {...restProps}>
      {text}
    </button>
  );
};
