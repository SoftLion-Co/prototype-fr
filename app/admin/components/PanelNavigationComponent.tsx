"use client";

import React from "react";
import s from "./PanelNavigationComponent.module.scss";
import Link from "next/link";
import classNames from "classnames";

const PanelNavigationComponent = () => {
  const getLocation = () => {
    const urlArr = window.location.href.split("/");

    return urlArr[urlArr.length - 1];
  };

  return (
    <div>
      <div className={s.panel}>
        <ul className={s.panel__list}>
          <li className={s.panel__item}>
            <Link
              className={classNames(s.panel__link, getLocation() === "blog" ? s.active : "")}
              href="/admin/dashboard/blog"
            >
              Блог
            </Link>
          </li>

          <li className={s.panel__item}>
            <Link
              className={classNames(s.panel__link, getLocation() === "clients" ? s.active : "")}
              href="/admin/dashboard/clients"
            >
              Клієнти
            </Link>
          </li>

          <li className={s.panel__item}>
            <Link
              className={classNames(s.panel__link, getLocation() === "contactUs" ? s.active : "")}
              href="/admin/dashboard/contactUs"
            >
              Зв’язатись ContactUS
            </Link>
          </li>

          <li className={s.panel__item}>
            <Link
              className={classNames(s.panel__link, getLocation() === "contactBlog" ? s.active : "")}
              href="/admin/dashboard/contactBlog"
            >
              Зв’язатись BLOG
            </Link>
          </li>

          <li className={s.panel__item}>
            <Link
              className={classNames(s.panel__link, getLocation() === "projects" ? s.active : "")}
              href="/admin/dashboard/projects"
            >
              Проекти
            </Link>
          </li>

          <li className={s.panel__item}>
            <Link
              className={classNames(s.panel__link, getLocation() === "orderStatus" ? s.active : "")}
              href="/admin/dashboard/orderStatus"
            >
              Статус замовлення
            </Link>
          </li>

          <li className={s.panel__item}>
            <Link
              className={classNames(s.panel__link, getLocation() === "statistics" ? s.active : "")}
              href="/admin/dashboard/statistics"
            >
              Статистика
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PanelNavigationComponent;
