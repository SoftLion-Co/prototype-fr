import React from "react";
import s from "./PanelNavigationComponent.module.scss";
import Link from "next/link";

const PanelNavigationComponent = () => {
  return (
    <div>
      <div className={s.panel}>
        <ul className={s.panel__list}>
          <li className={s.panel__item}>
            <Link className={s.panel__link} href="/admin/dashboard/blog">
              Блог
            </Link>
          </li>

          <li className={s.panel__item}>
            <Link className={s.panel__link} href="#">
              Клієнти
            </Link>
          </li>

          <li className={s.panel__item}>
            <Link className={s.panel__link} href="/admin/dashboard/contactUs">
              Зв’язатись ContactUS
            </Link>
          </li>

          <li className={s.panel__item}>
            <Link className={s.panel__link} href="#">
              Зв’язатись BLOG
            </Link>
          </li>

          <li className={s.panel__item}>
            <Link className={s.panel__link} href="#">
              Проекти
            </Link>
          </li>

          <li className={s.panel__item}>
            <Link className={s.panel__link} href="#">
              Статус замовлення
            </Link>
          </li>

          <li className={s.panel__item}>
            <Link className={s.panel__link} href="#">
              Статистика
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PanelNavigationComponent;
