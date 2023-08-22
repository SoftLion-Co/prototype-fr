"use client";
import Link from "next/link";
import s from "./HeaderComponent.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "images/logo.svg";
import Image from "next/image";
import classNames from "classnames";
import React, { useState, useEffect } from "react";

const HeaderComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.classList.add(s.header_modal__modal_open);
    } else {
      document.documentElement.classList.remove(s.header_modal__modal_open);
    }
  }, [isModalOpen]);

  function handleButtonClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    toggleModal();
    e.stopPropagation();
  }

  return (
    <header className={s.container}>
      <div className={s.header}>
        <div>
          <Link href="/">
            <Image className={s.header__logo} src={Logo} alt="SoftLion" />
          </Link>
        </div>
        <nav className={s.header__navigation}>
          <ul className={s.header__list}>
            <li className={s.header__item}>
              <Link href="" className={s.header__link}>
                Services
              </Link>
              <ul className={s.header__sub_menu}>
                <li>
                  <Link href="/services/design" className={s.header__link}>
                    Design
                  </Link>
                </li>
                <li>
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
            <li>
              <Link className={s.header__link} href="/project">
                Our Project
              </Link>
            </li>
            <li className={s.header__item}>
              <Link href="" className={s.header__link}>
                Technologies
              </Link>
              <ul className={s.header__sub_menu}>
                <li>
                  <Link href="/services/java" className={s.header__link}>
                    Java
                  </Link>
                </li>
                <li>
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
              <Link href="/blogs" className={s.header__link}>
                Blogs
              </Link>
            </li>
            <li className={s.header__item}>
              <Link href="/contact-us" className={s.header__link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classNames(s.header__btn_login)}>
          <Link href="/login" className={s.header__btn_text}>
            Login
          </Link>
        </div>

        <button className={s.header__btn_burger} onClick={handleButtonClick}>
          <div className={`${s.icon} ${isModalOpen ? s.open : ""}`}>
            <span className={s.icon__span}></span>
            <span className={s.icon__span}></span>
            <span className={s.icon__span}></span>
            <span className={s.icon__span}></span>
          </div>
        </button>
        {isModalOpen && (
          <div className={classNames(s.header_modal)}>
            <ul className={s.header_modal__list}>
              <li className={s.header_modal__item}>
                <div className={s.header_modal__link} onClick={toggleSubMenu}>
                  <p>Services</p>
                  <MdKeyboardArrowDown
                    className={s.header_modal__icon}
                    width="22px"
                    height="22px"
                  />
                </div>
                {isSubMenuOpen && (
                  <ul className={s.header_modal__sub_menu}>
                    <li>
                      <Link
                        href="/services/design"
                        className={s.header_modal__link}
                      >
                        Design
                      </Link>
                    </li>
                    <li>
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
                )}
              </li>
              <li className={s.header_modal__item}>
                <Link href="/projects" className={s.header_modal__link}>
                  Our Projects
                </Link>
              </li>
              <li className={s.header_modal__item}>
                <div
                  className={classNames(
                    s.header_modal__link,
                    s.header_modal__link_technologies
                  )}
                  onClick={toggleSubMenu}
                >
                  <p>Technologies</p>
                  <MdKeyboardArrowDown
                    className={s.header_modal__icon}
                    width="22px"
                    height="22px"
                  />
                </div>
                {isSubMenuOpen && (
                  <ul className={s.header_modal__sub_menu}>
                    <li>
                      <Link
                        href="/services/java"
                        className={s.header_modal__link}
                      >
                        Java
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/react"
                        className={s.header_modal__link}
                      >
                        React.js
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/angular"
                        className={s.header_modal__link}
                      >
                        Angular
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/vue"
                        className={s.header_modal__link}
                      >
                        Vue.js
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/node"
                        className={s.header_modal__link}
                      >
                        Node.js
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/net"
                        className={s.header_modal__link}
                      >
                        .NET
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={s.header_modal__item}>
                <Link href="/blogs" className={s.header_modal__link}>
                  Blog
                </Link>
              </li>
              <li className={s.header_modal__item}>
                <Link href="/contact-us" className={s.header_modal__link}>
                  Contact Us
                </Link>
              </li>
              <li className={s.header_modal__item}>
                <div className={s.header_modal__btn_login}>
                  <Link href="/login" className={s.header_modal__btn_text}>
                    Login
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
      <hr className={s.header__line}></hr>
    </header>
  );
};

export default HeaderComponent;
