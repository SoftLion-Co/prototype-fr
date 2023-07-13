import Link from "next/link";
import s from "./HeaderComponent.module.scss";
import MainButtonComponent from "./MainButtonComponent";

const HeaderComponent = () => {
  return (
    <header className={s.container}>
      <div className={s.header}>
        <div className={s.header__logo}></div>
        <nav  className={s.header__navigation}>
          <Link href="/Servise" className={s.header__link}>
            Servise
          </Link>
          <Link href="/OurProjects" className={s.header__link}>
            Our Projects
          </Link>
          <Link href="/Technologies" className={s.header__link}>
            Technologies
          </Link>
          <Link href="/Blog" className={s.header__link}>
            Blog
          </Link>
          <Link href="/ContuctUs" className={s.header__link}>
            Contuct Us
          </Link>
        </nav>
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
        <MainButtonComponent loading={false} className={s.header__btnHeader}>
          <p className={s.header__btnText}>Login</p>
        </MainButtonComponent>
       
      </div>
    </header>
  );
};

export default HeaderComponent;
