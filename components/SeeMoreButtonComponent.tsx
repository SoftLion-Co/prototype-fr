import React, { FC, ComponentProps } from "react";
import s from "./SeeMoreButtonComponent.module.scss";
import Link from "next/link";

interface SeeMoreButtonComponentProps extends ComponentProps<"button"> {
  path: "services" | "projects" | "blogs";
}

const SeeMoreButtonComponent: FC<SeeMoreButtonComponentProps> = ({ path }) => {
  return (
    <div className={s.see_more}>
      <div className={s.see_more__background}>
        <Link href={path}>
          <span className={s.see_more__text}>see more</span>
        </Link>
      </div>
    </div>
  );
};

export default SeeMoreButtonComponent;
