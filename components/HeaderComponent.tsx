"use client";
import Link from "next/link";
import s from "./HeaderComponent.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import Logo from "images/logo.svg";
import Image from "next/image";
import classNames from "classnames";
import React, { useState, useEffect } from "react";

const HeaderComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(-1);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemClick = (index:any) => {
    if (selectedMenuItem === index) {
      setSelectedMenuItem(null);
    } else {
      setSelectedMenuItem(index); 
    }
  };

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
      const currentPrevScroll = window.scrollY;
      console.log(currentPrevScroll);
      const headerContainer = document.querySelector(
        `.${s.header_container}`
      ) as HTMLElement;

      if (headerContainer) {
        if (currentPrevScroll === 0) {
          headerContainer.classList.remove(s.header_container__visible);
        } else if (prevScrollPos > currentPrevScroll) {
          headerContainer.classList.add(s.header_container__visible);
        } else {
          headerContainer.classList.remove(s.header_container__visible);
        }
      }
      setPrevScrollPos(currentPrevScroll);
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
    <header className={s.header_container}>
      <div className={s.container}>
        <div className={s.header}>
          <div>
            <Link href="/">
              <Image className={s.header__logo} src={Logo} alt="SoftLion" />
            </Link>
          </div>
          <nav className={s.header__navigation}>
            <ul className={s.header__list}>
              <li className={classNames(s.header__item, s.header__line)}>
                <Link href="" className={s.header__link}>
                  Services
                </Link>
                <ul className={s.header__sub_menu}>
                  <li className={s.header__item}>
                    <Link
                      href="/services/design"
                      className={classNames(s.header__link, s.header__line)}
                    >
                      Design
                    </Link>
                  </li>
                  <li className={s.header__item}>
                    <Link
                      href="/services/development"
                      className={classNames(s.header__link, s.header__line)}
                    >
                      Development
                    </Link>
                  </li>
                  <li className={s.header__item}>
                    <Link
                      href="/services/apps"
                      className={classNames(s.header__link, s.header__line)}
                    >
                      Apps
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={classNames(s.header__item, s.header__line)}>
                <Link href="/projects" className={`${s.header__link}`}>
                  Our Projects
                </Link>
              </li>
              <li className={classNames(s.header__item, s.header__line)}>
                <Link href="" className={s.header__link}>
                  Technologies
                </Link>
                <ul className={s.header__sub_menu}>
                  <li className={s.header__item}>
                    <Link
                      href="/services/java"
                      className={classNames(s.header__link, s.header__line)}
                    >
                      Java
                    </Link>
                  </li>
                  <li className={s.header__item}>
                    <Link
                      href="/services/react"
                      className={classNames(s.header__link, s.header__line)}
                    >
                      React.js
                    </Link>
                  </li>
                  <li className={s.header__item}>
                    <Link
                      href="/services/angular"
                      className={classNames(s.header__link, s.header__line)}
                    >
                      Angular
                    </Link>
                  </li>
                  <li className={s.header__item}>
                    <Link
                      href="/services/vue"
                      className={classNames(s.header__link, s.header__line)}
                    >
                      Vue.js
                    </Link>
                  </li>
                  <li className={s.header__item}>
                    <Link
                      href="/services/node"
                      className={classNames(s.header__link, s.header__line)}
                    >
                      Node.js
                    </Link>
                  </li>
                  <li className={s.header__item}>
                    <Link
                      href="/services/net"
                      className={classNames(s.header__link, s.header__line)}
                    >
                      .NET
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={classNames(s.header__item, s.header__line)}>
                <Link href="/blogs" className={s.header__link}>
                  Blogs
                </Link>
              </li>
              <li className={classNames(s.header__item, s.header__line)}>
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
            <div className={s.header_modal}>
              <ul className={s.header_modal__list}>
                <li
                  className={s.header_modal__item}
                  onClick={() => handleMenuItemClick(0)}
                >
                  <div className={classNames(s.header_modal__link_container)}>
                    <div
                      className={classNames(
                        s.header_modal__link,
                        s.header__line,
                        selectedMenuItem === 0 ? s.selected : ""
                      )}
                      onClick={() => {
                        toggleSubMenu(0);
                      }}
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
                      <li
                        className={classNames(
                          s.header_modal__item,
                          s.header__line
                        )}
                      >
                        <Link
                          href="/services/design"
                          className={s.header_modal__link}
                          onClick={handleButtonClick}
                        >
                          <p>Design</p>
                        </Link>
                      </li>
                      <li
                        className={classNames(
                          s.header_modal__item,
                          s.header__line
                        )}
                      >
                        <Link
                          href="/services/development"
                          className={s.header_modal__link}
                          onClick={handleButtonClick}
                        >
                          <p>Development</p>
                        </Link>
                      </li>
                      <li
                        className={classNames(
                          s.header_modal__item,
                          s.header__line
                        )}
                      >
                        <Link
                          href="/services/apps"
                          className={s.header_modal__link}
                          onClick={handleButtonClick}
                        >
                          <p>Apps</p>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className={s.header_modal__item}>
                  <Link
                    href="/projects"
                    className={classNames(s.header_modal__link, s.header__line)}
                    onClick={handleButtonClick}
                  >
                    <p>Our Projects</p>
                  </Link>
                </li>
                <li className={s.header_modal__item} onClick={() => handleMenuItemClick(1)}>
                  <div className={s.header_modal__link_container}>
                    <div
                       className={classNames(
                        s.header_modal__link,
                        s.header__line,
                        selectedMenuItem === 1 ? s.selected : ""
                      )}
                      onClick={() => {
                        toggleSubMenu(1);
                      }}
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
                    <ul className={s.header_modal__sub_menu}>
                      <li
                        className={classNames(
                          s.header_modal__item,
                          s.header__line
                        )}
                      >
                        <Link
                          href="/services/java"
                          className={s.header_modal__link}
                          onClick={handleButtonClick}
                        >
                          <p>Java</p>
                        </Link>
                      </li>
                      <li
                        className={classNames(
                          s.header_modal__item,
                          s.header__line
                        )}
                      >
                        <Link
                          href="/services/react"
                          className={s.header_modal__link}
                          onClick={handleButtonClick}
                        >
                          <p>React.js</p>
                        </Link>
                      </li>
                      <li
                        className={classNames(
                          s.header_modal__item,
                          s.header__line
                        )}
                      >
                        <Link
                          href="/services/angular"
                          className={s.header_modal__link}
                          onClick={handleButtonClick}
                        >
                          <p>Angular</p>
                        </Link>
                      </li>
                      <li
                        className={classNames(
                          s.header_modal__item,
                          s.header__line
                        )}
                      >
                        <Link
                          href="/services/vue"
                          className={s.header_modal__link}
                          onClick={handleButtonClick}
                        >
                          <p>Vue.js</p>
                        </Link>
                      </li>
                      <li
                        className={classNames(
                          s.header_modal__item,
                          s.header__line
                        )}
                      >
                        <Link
                          href="/services/node"
                          className={s.header_modal__link}
                          onClick={handleButtonClick}
                        >
                          <p>Node.js</p>
                        </Link>
                      </li>
                      <li
                        className={classNames(
                          s.header_modal__item,
                          s.header__line
                        )}
                      >
                        <Link
                          href="/services/net"
                          className={s.header_modal__link}
                          onClick={handleButtonClick}
                        >
                          <p>.NET</p>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className={s.header_modal__item}>
                  <Link
                    href="/blogs"
                    className={classNames(s.header_modal__link, s.header__line)}
                    onClick={handleButtonClick}
                  >
                    <p>Blog</p>
                  </Link>
                </li>
                <li className={s.header_modal__item}>
                  <Link
                    href="/contact-us"
                    className={classNames(s.header_modal__link, s.header__line)}
                    onClick={handleButtonClick}
                  >
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
                    <Link
                      href="/login"
                      className={s.header__btn_login__text}
                      onClick={handleButtonClick}
                    >
                      Login
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
