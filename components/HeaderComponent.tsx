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
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(-1);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    setOpenSubMenuIndex(-1);
  };

  const toggleSubMenu = (index: any) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? -1 : index);
  };

  const handleButtonClick = () => {
    toggleModal();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrollingUp(
        currentScrollPos > prevScrollPos || currentScrollPos === 0
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.classList.add(s.stop_scrolling);
    } else {
      document.documentElement.classList.remove(s.stop_scrolling);
    }
  }, [isModalOpen]);

  return (
    <div className={classNames(s.header_container,{
      [s.fixed]: !isScrollingUp,
      [s.fixed__active]: !isScrollingUp,
    })}>
      <header
        className={classNames(s.container)}
      >
        <div className={s.header}>
          <div>
            <Link href="/">
              <Image className={s.header__logo} src={Logo} alt="SoftLion" />
            </Link>
          </div>
          <nav className={s.header__navigation}>
            <ul className={s.header__list}>
              <li className={classNames(s.header__item, s.header__has_submenu)}>
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
                    <Link
                      href="/services/development"
                      className={s.header__link}
                    >
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
                <Link className={s.header__link} href="/project">
                  Our Project
                </Link>
              </li>
              <li className={classNames(s.header__item, s.header__has_submenu)}>
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
          <button className={s.header__btn_login}>
            <Link href="/login" className={s.header__btn_login__text}>
              Login
            </Link>
          </button>
          <button className={s.header__btn_burger} onClick={handleButtonClick}>
            <div className={`${s.header__icon} ${isModalOpen ? s.open : ""}`}>
              <div className={s.header__icon__div}></div>
              <div className={s.header__icon__div}></div>
              <div className={s.header__icon__div}></div>
              <div className={s.header__icon__div}></div>
            </div>
          </button>

          {/* MOBILE MENU */}
          {isModalOpen && (
            <div className={classNames(s.header_modal)}>
              <ul className={s.header_modal__list}>
                <li className={s.header_modal__item}>
                  <div className={s.header_modal__link_container}>
                    <div
                      className={`${s.header_modal__link} ${
                        openSubMenuIndex === 0 ? s.open : ""
                      }`}
                      onClick={() => toggleSubMenu(0)}
                    >
                      <p>Services</p>
                      <MdKeyboardArrowDown
                        className={s.header_modal__icon}
                        width="22px"
                        height="22px"
                      />
                    </div>
                  </div>
                  {openSubMenuIndex === 0 && (
                    <ul className={s.header_modal__sub_menu}>
                      <li>
                        <Link
                          href="/services/design"
                          className={s.header_modal__link}
                        >
                          <p>Design</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/development"
                          className={s.header_modal__link}
                        >
                          <p>Development</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/apps"
                          className={s.header_modal__link}
                        >
                          <p>Apps</p>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className={s.header_modal__item}>
                  <Link href="/projects" className={s.header_modal__link}>
                    <p>Our Projects</p>
                  </Link>
                </li>
                <li className={s.header_modal__item}>
                  <div className={s.header_modal__link_container}>
                    <div
                      className={`${s.header_modal__link} ${
                        openSubMenuIndex === 1 ? s.open : ""
                      }`}
                      onClick={() => toggleSubMenu(1)}
                    >
                      <p>Technologies</p>
                      <MdKeyboardArrowDown
                        className={s.header_modal__icon}
                        width="22px"
                        height="22px"
                      />
                    </div>
                  </div>
                  {openSubMenuIndex === 1 && (
                    <ul className={ s.header_modal__sub_menu}>
                      <li>
                        <Link
                          href="/services/java"
                          className={s.header_modal__link}
                        >
                          <p>Java</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/react"
                          className={s.header_modal__link}
                        >
                          <p>React.js</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/angular"
                          className={s.header_modal__link}
                        >
                          <p>Angular</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/vue"
                          className={s.header_modal__link}
                        >
                          <p>Vue.js</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/node"
                          className={s.header_modal__link}
                        >
                          <p>Node.js</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/net"
                          className={s.header_modal__link}
                        >
                          <p>.NET</p>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className={s.header_modal__item}>
                  <Link href="/blogs" className={s.header_modal__link}>
                    <p>Blog</p>
                  </Link>
                </li>
                <li className={s.header_modal__item}>
                  <Link href="/contact-us" className={s.header_modal__link}>
                    <p>Contact Us</p>
                  </Link>
                </li>
                <li className={s.header_modal__item}>
                  <div
                    className={classNames(
                      s.header__btn_login,
                      s.header_modal__btn_hidden
                    )}
                  >
                    <Link href="/login" className={s.header__btn_login__text}>
                      Login
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
