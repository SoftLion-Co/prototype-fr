/* use client */
import Link from "next/link";
import s from "./HeaderComponent.module.scss";
import { IoIosMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "images/logo.svg";
import Image from "next/image";
import React, { useState } from "react";
import classNames from "classnames";

const HeaderComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    setBurgerOpen(!isBurgerOpen);
  };
  return (
    <header className={s.container} onClick={toggleModal}>
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
                <li>
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
        <button className={s.header__btn_burger} onClick={toggleModal}>
          {isBurgerOpen ? (
            <span>X</span>
          ) : (
            <IoIosMenu
              className={s.header__burger}
              width="18px"
              height="13px"
            />
          )}
        </button>
        {isModalOpen && (
          <div className={s.header_modal}>
            <ul className={s.header_modal__list}>
              <li className={s.header_modal__item}>
                {" "}
                <Link href="/services" className={s.header_modal__link}>
                  <p>Services</p>
                  <MdKeyboardArrowDown
                    className={s.header_modal__icon}
                    width="22px"
                    height="22px"
                  />
                </Link>
                <ul className={s.header_modal__sub_menu}>
                  <li>
                    {" "}
                    <Link
                      href="/services/design"
                      className={s.header_modal__link}
                    >
                      Design
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      href="/services/development"
                      className={s.header_modal__link}
                    >
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/apps"
                      className={s.header_modal__link}
                    >
                      Apps
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={s.header_modal__item}>
                {" "}
                <Link href="/projects" className={s.header_modal__link}>
                  Our Projects
                </Link>
              </li>
              <li className={s.header_modal__item}>
                {" "}
                <Link
                  href="/technologies"
                  className={classNames(
                    s.header_modal__link,
                    s.header_modal__link_technologies
                  )}
                >
                  <p>Technologies</p>
                  <MdKeyboardArrowDown
                    className={s.header_modal__icon}
                    width="22px"
                    height="22px"
                  />
                </Link>
                <ul className={s.header_modal__sub_menu}>
                  <li>
                    {" "}
                    <Link href="/services/java" className={s.header_modal__link}>
                      Java
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/services/react" className={s.header_modal__link}>
                      React.js
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/angular" className={s.header_modal__link}>
                      Angular
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/vue" className={s.header_modal__link}>
                      Vue.js
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/node" className={s.header_modal__link}>
                      Node.js
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/net" className={s.header_modal__link}>
                      .NET
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={s.header_modal__item}>
                {" "}
                <Link href="/blogs" className={s.header_modal__link}>
                  Blog
                </Link>
              </li>
              <li className={s.header_modal__item}>
                {" "}
                <Link href="/contact-us" className={s.header_modal__link}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
        <button className={s.header__btn_header}>
          <p className={s.header__btn_text}>Login</p>
        </button>
      </div>
      <hr className={s.header__line}></hr>
    </header>
  );
};

export default HeaderComponent;
