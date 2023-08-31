import s from "./PanelNavigationComponent.module.scss";

const PanelNavigationComponent = () => {
  return (
    <div>
      <div className={s.panel}>
        <ul className={s.panel__list}>
          <li className={s.panel__item}>
            <a className={s.panel__link} href="#">
              Блог
            </a>
          </li>

          <li className={s.panel__item}>
            <a className={s.panel__link} href="#">
              Клієнти
            </a>
          </li>

          <li className={s.panel__item}>
            <a className={s.panel__link} href="#">
              Зв’язатись ContactUS
            </a>
          </li>

          <li className={s.panel__item}>
            <a className={s.panel__link} href="#">
              Зв’язатись BLOG
            </a>
          </li>

          <li className={s.panel__item}>
            <a className={s.panel__link} href="#">
              Проекти
            </a>
          </li>

          <li className={s.panel__item}>
            <a className={s.panel__link} href="#">
              Статус замовлення
            </a>
          </li>

          <li className={s.panel__item}>
            <a className={s.panel__link} href="#">
              Статистика
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PanelNavigationComponent;
