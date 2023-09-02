"use client";
import React, { Fragment } from "react";
import s from "./InfoNavigationComponent.module.scss";
import { BsHouseDoor } from "react-icons/bs";
import classNames from "classnames";
import Link from "next/link";

interface InfoNavigationComponentProps {
  links: { title: string; href: string }[];
}

const InfoNavigationComponent = ({ links }: InfoNavigationComponentProps) => {
  const allLinks = [
    {
      title: <BsHouseDoor className={s.custom_breadcrumbs__home} />,
      href: "/",
    },
    ...links,
  ];

  const separator = "—";
  const totalLinks = allLinks.length;

  const items = allLinks.map(({ title, href }, index) => (
    <Link
      href={href}
      key={index}
      className={classNames(s.custom_breadcrumbs__link, {
        [s.custom_breadcrumbs__active]: index === totalLinks - 1,
      })}
    >
      {title}
    </Link>
  ));

  return (
    <div className={classNames(s.container, s.custom_breadcrumbs)}>
      {items.map((item, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <span className={s.custom_breadcrumbs__separator}>{separator}</span>
          )}
          {item}
        </Fragment>
      ))}
    </div>
  );
};

export default InfoNavigationComponent;
