import s from "./HeaderComponent.module.scss";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import Logo from "images/logo.svg";
import Image from "next/image";

const HeaderComponent = () => {
  return (
    <header className={s.container} id="headerTop">
      <div className={s.header}>
        <Link href="/">
          <Image className={s.header__logo} src={Logo} alt="SoftLion" />
        </Link>
        <nav className={s.header__navigation}>
          <Link href="/services" className={s.header__link}>
            Services
          </Link>
          <Link href="/projects" className={s.header__link}>
            Our Projects
          </Link>
          <Link href="/technologies" className={s.header__link}>
            Technologies
          </Link>
          <Link href="/blogs" className={s.header__link}>
            Blog
          </Link>
          <Link href="/contact-us" className={s.header__link}>
            Contact Us
          </Link>
        </nav>
        <button className={s.header__btnBurger}>
          <IoIosMenu className={s.header__burger} width="18px" height="13px" />
        </button>
        <button className={s.header__btnHeader}>
          <p className={s.header__btnText}>Login</p>
        </button>
      </div>
      <hr className={s.header__line}></hr>
    </header>
  );
};

export default HeaderComponent;
