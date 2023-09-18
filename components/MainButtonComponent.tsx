import React, { FC, ReactNode, ComponentProps } from "react";
import classNames from "classnames";
import s from "./MainButtonComponent.module.scss";
import Link from "next/link";

interface MainButtonComponentProps extends ComponentProps<"button"> {
  loading?: boolean;
  color?: "blue" | "white" | "dark-blue";
  children: ReactNode;
  path?: "services" | "projects" | "contact-us";
}

const MainButtonComponent: FC<MainButtonComponentProps> = ({
  loading = false,
  color = "blue",
  path,
  className,
  children,
  ...rest
}) => {
  const buttonClass = classNames(s.button, className, {
    [s.blueButton]: color === "blue",
    [s.whiteButton]: color === "white",
    [s.darkBlueButton]: color === "dark-blue",
  });

  return (
    <>
      {path ? (
        <Link href={`/${path}`}>
          <button
            disabled={loading || rest.disabled}
            className={buttonClass}
            {...rest}
          >
            <>{children}</>
          </button>
        </Link>
      ) : (
        <button
          disabled={loading || rest.disabled}
          className={buttonClass}
          {...rest}
        >
          <>{children}</>
        </button>
      )}
    </>
  );
};

export default MainButtonComponent;
