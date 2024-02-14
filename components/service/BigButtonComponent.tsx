import React, { FC } from "react";
import classNames from "classnames";
import s from "./BigButtonComponent.module.scss";
import Link from "next/link";
import MotionWrapper from "@/hooks/MotionWrapper";

interface Atribute {
  className?: string;
}

const BigButtonComponent: FC<Atribute> = ({ className }) => {
  return (
    <MotionWrapper
      tag="button"
      initial
      viewport
      variants
      custom={2}
      className={classNames(s.big__button, className)}
    >
      <Link href={"/contact-us"} className={s.link}>
        Book Consultation
      </Link>
    </MotionWrapper>
  );
};

export default BigButtonComponent;
