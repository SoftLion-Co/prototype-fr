import React, { FC, ComponentProps } from "react";
import classNames from "classnames";
import s from "./SeeMoreButtonComponent.module.scss";
import Link from "next/link";

interface SeeMoreButtonComponentProps extends ComponentProps<"button"> {
  path: "services" | "projects" | "blog";
  className?: string;
}

const SeeMoreButtonComponent: FC<SeeMoreButtonComponentProps> = ({
  path,
  className,
}) => {
  return (
    <div className={classNames(s.button, className)}>
      <div className={s.button__background}>
        <Link href={`/${path}`}>
          <span className={s.button__text}>see more</span>
        </Link>
      </div>
    </div>
  );
};

export default SeeMoreButtonComponent;
