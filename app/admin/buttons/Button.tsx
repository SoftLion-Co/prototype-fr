import { FC } from "react";
import classNames from "classnames";

import s from "./Button.module.scss";

interface Props {
  text: string;
  theme?: "default" | "delete";
  fnc: () => void;
}

export const Button: FC<Props> = ({ text, theme = "default", fnc }) => {
  return (
    <button
      className={classNames(s.button, theme === "delete" ? s.button__delete : "")}
      type="button"
      onClick={() => fnc()}
    >
      {text}
    </button>
  );
};
