import React, { FC, ComponentProps } from "react";
import classNames from "classnames";
import s from "./SeeMoreButtonComponent.module.scss";
import Link from "next/link";
import MotionWrapper from "@/hooks/MotionWrapper";

interface SeeMoreButtonComponentProps extends ComponentProps<"button"> {
  path: "services" | "projects" | "blog";
  className?: string;
}

const SeeMoreButtonComponent: FC<SeeMoreButtonComponentProps> = ({
  path,
  className,
}) => {
  return (
    <MotionWrapper className={classNames(s.button, className)}>
      <MotionWrapper
        initial
        viewport
        variants
        custom={0.5}
        className={s.button__background}
      >
        <Link href={`/${path}`}>
          <span className={s.button__text}>see more</span>
        </Link>
      </MotionWrapper>
    </MotionWrapper>
  );
};

export default SeeMoreButtonComponent;
