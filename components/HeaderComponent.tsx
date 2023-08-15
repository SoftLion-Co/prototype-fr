import Link from "next/link";
import s from "./HeaderComponent.module.scss";
import { IoIosMenu } from "react-icons/io";
import Logo from "images/logo.svg";
import Image from "next/image";
import classNames from "classnames";

const HeaderComponent = () => {
  return (
    <header className={s.container}>
      <div className={s.header}>
        <Link href="/">
          <Image className={s.header__logo} src={Logo} alt="SoftLion" />
        </Link>
        <nav className={s.header__navigation}>
          <ul className={s.header__list}>
            <li className={s.header__item}>
              {" "}
              <Link href="/services" className={s.header__link}>
                Services
              </Link>
              <ul className={s.header__sub_menu}>
                <li>
                  {" "}
                  <Link href="/services/design" className={s.header__link}>
                    Design
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/services/development" className={s.header__link}>
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/apps" className={s.header__link}>
                    Apps
                  </Link>
                </li>
              </ul>
            </li>
            <li className={s.header__item}>
              {" "}
              <Link href="/projects" className={s.header__link}>
                Our Projects
              </Link>
            </li>
            <li className={s.header__item}>
              {" "}
              <Link href="/technologies" className={s.header__link}>
                Technologies
              </Link>
              <ul className={s.header__sub_menu}>
                <li >
                  {" "}
                  <Link href="/services/java" className={s.header__link}>
                    Java
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/services/react" className={s.header__link}>
                    React.js
                  </Link>
                </li>
                <li>
                  <Link href="/services/angular" className={s.header__link}>
                    Angular
                  </Link>
                </li>
                <li>
                  <Link href="/services/vue" className={s.header__link}>
                    Vue.js
                  </Link>
                </li>
                <li>
                  <Link href="/services/node" className={s.header__link}>
                    Node.js
                  </Link>
                </li>
                <li>
                  <Link href="/services/net" className={s.header__link}>
                    .NET
                  </Link>
                </li>
              </ul>
            </li>
            <li className={s.header__item}>
              {" "}
              <Link href="/blogs" className={s.header__link}>
                Blog
              </Link>
            </li>
            <li className={s.header__item}>
              {" "}
              <Link href="/contact-us" className={s.header__link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <button className={s.header__btn_burger}>
          <IoIosMenu className={s.header__burger} width="18px" height="13px" />
        </button>
        <button className={s.header__btn_header}>
          <p className={s.header__btn_text}>Login</p>
        </button>
      </div>
      <hr className={s.header__line}></hr>
    </header>
  );
};

export default HeaderComponent;
