import s from "./HeaderComponent.module.scss";

const HeaderComponent = () => {
  return (
    <header className={s.container}>
      <div className={s.header}>
        <div className={s.header__logo}></div>
        <button className={s.header__btnBurger}>
          <svg
            width="17"
            height="13"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1H22" stroke="#858598"></path>
            <path d="M0 8H22" stroke="#858598"></path>
            <path d="M0 15H22" stroke="#858598"></path>
          </svg>
        </button>
        <button className={s.header__btnHeader}>
          <p className={s.header__btnText}>Login</p>
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
