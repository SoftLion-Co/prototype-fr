"use client";
import Link from "next/link";
import s from "./HeaderComponent.module.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Logo from "images/logo.svg";
import Image from "next/image";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin, FiFacebook } from "react-icons/fi";

const HeaderComponent = () => {
  const pathname = usePathname();
  const [isModalOpen, setModalOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(-1);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [arrowDirection1, setArrowDirection1] = useState("down");
  const [arrowDirection2, setArrowDirection2] = useState("down");

  const social: { url: string; icon: JSX.Element }[] = [
    {
      url: "https://www.linkedin.com/company/softlion/",
      icon: <FiLinkedin className={s.header_modal__container__icon} />,
    },
    {
      url: "https://instagram.com/softlion_co/",
      icon: <AiOutlineInstagram className={s.header_modal__container__icon} />,
    },
    {
      url: "https://www.facebook.com/people/SoftLion/100093384261914/",
      icon: <FiFacebook className={s.header_modal__container__icon} />,
    },
  ];

  // Функція для закриття модального вікна
  const closeMobileMenu = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Функція, яка буде викликатися при зміні ширини екрану
    const handleResize = () => {
      // Перевірка, чи ширина екрану більша ніж 767.99px
      if (window.innerWidth > 767.99) {
        closeMobileMenu(); // Закрити модальне вікно
      }
    };

    // Додати слухача події resize
    window.addEventListener("resize", handleResize);

    // Під час відключення компонента видалити слухача події
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuItemClick = (index: any) => {
    if (selectedMenuItem === index) {
      setSelectedMenuItem(null);
      setOpenSubMenuIndex(-1);
    } else {
      setSelectedMenuItem(index);
      setOpenSubMenuIndex(index);
    }
  };

  const handleArrowClick1 = () => {
    setArrowDirection1(arrowDirection1 === "down" ? "up" : "down");

    setArrowDirection2("down");
  };

  const handleArrowClick2 = () => {
    setArrowDirection2(arrowDirection2 === "down" ? "up" : "down");
    setArrowDirection1("down");
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    setOpenSubMenuIndex(-1);
    setArrowDirection1("down");
    setArrowDirection2("down");
    setSelectedMenuItem(null);
  };

  const toggleSubMenu = (index: any) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? -1 : index);
  };

  const handleButtonClick = () => {
    toggleModal();
  };

  const [isHeaderVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const deltaY = currentScroll - prevScrollPos;

      if (deltaY > 0 && isHeaderVisible) {
        setHeaderVisible(currentScroll <= 20);
      } else if (deltaY < 0 && !isHeaderVisible) {
        setHeaderVisible(true);
      }

      setPrevScrollPos(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isHeaderVisible]);

  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.classList.add(s.stop_scrolling);
    } else {
      document.documentElement.classList.remove(s.stop_scrolling);
    }
  }, [isModalOpen]);

  return (
    <header
      className={classNames(s.header_container, {
        [s.header_hidden]: !isHeaderVisible,
        [s.header_visible]: isHeaderVisible,
      })}
    >
      <div className={s.header}>
        <div>
          <Link href="/" onClick={() => setModalOpen(false)}>
            <Image className={s.header__logo} src={Logo} alt="SoftLion" />
          </Link>
        </div>
        <nav className={s.header__navigation}>
          <ul className={s.header__list}>
            <li
              className={classNames(
                pathname === "/services" ? s.header__active : "",
                s.header__item,
                s.header__line
              )}
            >
              <Link href="/services" className={s.header__link}>
                Services
              </Link>
              <ul className={s.header__sub_menu}>
                <li className={s.header__item}>
                  <Link
                    href="/services#design"
                    className={classNames(s.header__link, s.header__line)}
                  >
                    Design
                  </Link>
                </li>
                <li className={s.header__item}>
                  <Link
                    href="/services#development"
                    className={classNames(s.header__link, s.header__line)}
                  >
                    Development
                  </Link>
                </li>
                <li className={s.header__item}>
                  <Link
                    href="/services#apps"
                    className={classNames(s.header__link, s.header__line)}
                  >
                    Apps
                  </Link>
                </li>
                <li className={s.header__item}>
                  <Link
                    href="/services#security"
                    className={classNames(s.header__link, s.header__line)}
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={classNames(
                pathname === "/projects" ? s.header__active : "",
                s.header__item,
                s.header__line
              )}
            >
              <Link href="/projects" className={classNames(s.header__link)}>
                Our Projects
              </Link>
            </li>
            <li
              className={classNames(
                pathname.startsWith("/technologies") ? s.header__active : "",
                s.header__item,
                s.header__line
              )}
            >
              <Link href="" className={classNames(s.header__link)}>
                Technologies
              </Link>
              <ul className={s.header__sub_menu}>
                <li className={s.header__item}>
                  <Link
                    href="/technologies/net"
                    className={classNames(s.header__link, s.header__line)}
                  >
                    .NET
                  </Link>
                </li>
                <li className={s.header__item}>
                  <Link
                    href="/technologies/java"
                    className={classNames(s.header__link, s.header__line)}
                  >
                    Java
                  </Link>
                </li>
                <li className={s.header__item}>
                  <Link
                    href="/technologies/node"
                    className={classNames(s.header__link, s.header__line)}
                  >
                    Node.js
                  </Link>
                </li>
                <li className={s.header__item}>
                  <Link
                    href="/technologies/react"
                    className={classNames(s.header__link, s.header__line)}
                  >
                    React.js
                  </Link>
                </li>
                <li className={s.header__item}>
                  <Link
                    href="/technologies/angular"
                    className={classNames(s.header__link, s.header__line)}
                  >
                    Angular
                  </Link>
                </li>
                <li className={s.header__item}>
                  <Link
                    href="/technologies/vue"
                    className={classNames(s.header__link, s.header__line)}
                  >
                    Vue.js
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={classNames(
                pathname === "/blog" ? s.header__active : "",
                s.header__item,
                s.header__line
              )}
            >
              <Link href="/blog" className={s.header__link}>
                Blog
              </Link>
            </li>
            <li
              className={classNames(
                pathname === "/contact-us" ? s.header__active : "",
                s.header__item,
                s.header__line
              )}
            >
              <Link href="/contact-us" className={s.header__link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
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
                      pathname === "/services" ? s.header__active : "",
                      s.header_modal__link,
                      s.header__line,
                      selectedMenuItem === 0 ? s.selected : ""
                    )}
                    onClick={() => {
                      toggleSubMenu(0), handleArrowClick1();
                    }}
                  >
                    <p className={s.header__text}>Services</p>
                    {arrowDirection1 === "down" ? (
                      <MdKeyboardArrowDown
                        className={s.header_modal__icon}
                        width="22px"
                        height="22px"
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        className={s.header_modal__icon}
                        width="22px"
                        height="22px"
                      />
                    )}
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
                        href="/services#design"
                        className={s.header_modal__link}
                        onClick={handleButtonClick}
                      >
                        <p className={s.header__text}>Design</p>
                      </Link>
                    </li>
                    <li
                      className={classNames(
                        s.header_modal__item,
                        s.header__line
                      )}
                    >
                      <Link
                        href="/services#development"
                        className={s.header_modal__link}
                        onClick={handleButtonClick}
                      >
                        <p className={s.header__text}>Development</p>
                      </Link>
                    </li>
                    <li
                      className={classNames(
                        s.header_modal__item,
                        s.header__line
                      )}
                    >
                      <Link
                        href="/services#apps"
                        className={s.header_modal__link}
                        onClick={handleButtonClick}
                      >
                        <p className={s.header__text}>Apps</p>
                      </Link>
                    </li>
                    <li
                      className={classNames(
                        s.header_modal__item,
                        s.header__line
                      )}
                    >
                      <Link
                        href="/services#security"
                        className={s.header_modal__link}
                        onClick={handleButtonClick}
                      >
                        <p className={s.header__text}>Security</p>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={s.header_modal__item}>
                <Link
                  href="/projects"
                  className={classNames(
                    pathname === "/projects" ? s.header__active : "",
                    s.header_modal__link,
                    s.header__line
                  )}
                  onClick={handleButtonClick}
                >
                  <p className={s.header__text}>Our Projects</p>
                </Link>
              </li>
              <li
                className={s.header_modal__item}
                onClick={() => handleMenuItemClick(1)}
              >
                <div className={s.header_modal__link_container}>
                  <div
                    className={classNames(
                      pathname.startsWith("/technologies")
                        ? s.header__active
                        : "",
                      s.header_modal__link,
                      s.header__line,
                      selectedMenuItem === 1 ? s.selected : ""
                    )}
                    onClick={() => {
                      toggleSubMenu(1), handleArrowClick2();
                    }}
                  >
                    <p className={s.header__text}>Technologies</p>
                    {arrowDirection2 === "down" ? (
                      <MdKeyboardArrowDown
                        className={s.header_modal__icon}
                        width="22px"
                        height="22px"
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        className={s.header_modal__icon}
                        width="22px"
                        height="22px"
                      />
                    )}
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
                        href="/technologies/net"
                        className={s.header_modal__link}
                        onClick={handleButtonClick}
                      >
                        <p className={s.header__text}>.NET</p>
                      </Link>
                    </li>
                    <li
                      className={classNames(
                        s.header_modal__item,
                        s.header__line
                      )}
                    >
                      <Link
                        href="/technologies/java"
                        className={s.header_modal__link}
                        onClick={handleButtonClick}
                      >
                        <p className={s.header__text}>Java</p>
                      </Link>
                    </li>
                    <li
                      className={classNames(
                        s.header_modal__item,
                        s.header__line
                      )}
                    >
                      <Link
                        href="/technologies/node"
                        className={s.header_modal__link}
                        onClick={handleButtonClick}
                      >
                        <p className={s.header__text}>Node.js</p>
                      </Link>
                    </li>
                    <li
                      className={classNames(
                        s.header_modal__item,
                        s.header__line
                      )}
                    >
                      <Link
                        href="/technologies/react"
                        className={s.header_modal__link}
                        onClick={handleButtonClick}
                      >
                        <p className={s.header__text}>React.js</p>
                      </Link>
                    </li>
                    <li
                      className={classNames(
                        s.header_modal__item,
                        s.header__line
                      )}
                    >
                      <Link
                        href="/technologies/angular"
                        className={s.header_modal__link}
                        onClick={handleButtonClick}
                      >
                        <p className={s.header__text}>Angular</p>
                      </Link>
                    </li>
                    <li
                      className={classNames(
                        s.header_modal__item,
                        s.header__line
                      )}
                    >
                      <Link
                        href="/technologies/vue"
                        className={s.header_modal__link}
                        onClick={handleButtonClick}
                      >
                        <p className={s.header__text}>Vue.js</p>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={s.header_modal__item}>
                <Link
                  href="/blog"
                  className={classNames(
                    pathname === "/blog" ? s.header__active : "",
                    s.header_modal__link,
                    s.header__line
                  )}
                  onClick={handleButtonClick}
                >
                  <p className={s.header__text}>Blog</p>
                </Link>
              </li>
              <li className={s.header_modal__item}>
                <Link
                  href="/contact-us"
                  className={classNames(
                    pathname === "/contact-us" ? s.header__active : "",
                    s.header_modal__link,
                    s.header__line
                  )}
                  onClick={handleButtonClick}
                >
                  <p className={s.header__text}>Contact Us</p>
                </Link>
              </li>
            </ul>
            <div className={s.header_modal__container}>
              {social.map((item, index) => (
                <Link key={index} href={item.url} target="_blank">
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
