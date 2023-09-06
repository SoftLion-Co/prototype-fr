import { ComponentProps, FC } from "react";
import s from "./ActionButton.module.scss";

interface ActionButtonProps extends ComponentProps<"button"> {
  text: string;
}

const ActionButton: FC<ActionButtonProps> = ({ text, ...rest }) => {

  return <button className={s.button} {...rest}>{text}</button>;
};

export default ActionButton;
