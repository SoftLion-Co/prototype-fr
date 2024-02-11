import React, { FC } from "react";
import classNames from "classnames";
import s from "./BigButtonComponent.module.scss";
import Link from "next/link";

interface Atribute {
  className?: string;
}

const BigButtonComponent: FC<Atribute> = ({ className }) => {
  return (
    <button className={classNames(s.big__button, className)}>
      <Link href={"/contact-us"} className={s.link}>
        Book Consultation
      </Link>
    </button>
  );
};

export default BigButtonComponent;
