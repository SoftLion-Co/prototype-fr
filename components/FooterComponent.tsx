"use client";

import s from "./FooterComponent.module.scss";

import Link from "next/link";
import Image from "next/image";

import { AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin, FiFacebook } from "react-icons/fi";
import { PiTelegramLogoDuotone } from "react-icons/pi";

import MainButtonComponent from "./MainButtonComponent";

import Logo from "./../images/logo.svg";

const FooterComponent = () => {
  const routes: { path: string; label: string }[] = [
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Our Projects" },
    { path: "#headerTop", label: "Technologies" },
    { path: "/blog", label: "Blog" },
    { path: "/contact-us", label: "Contact Us" },
  ];
  const socialLinks: { url: string; icon: JSX.Element }[] = [
    {
      url: "https://www.linkedin.com/company/softlion/",
      icon: <FiLinkedin className={s.footer__icon} />,
    },
    {
      url: "https://instagram.com/softlion_co/",
      icon: <AiOutlineInstagram className={s.footer__icon} />,
    },
    {
      url: "https://www.facebook.com/people/SoftLion/100093384261914/",
      icon: <FiFacebook className={s.footer__icon} />,
    },
    // {
    //   url: "#",
    //   icon: <PiTelegramLogoDuotone className={s.footer__icon} />,
    // },
  ];

  return (
    <footer className={`${s.footer} ${s.container}`} id="footer">
      <div className={s.blur}>
        <div className={s.blur_item}></div>
      </div>
      <div className={s.footer__block}>
        <div className={s.footer__block_first}>
          <div className={s.footer__colum_link}>
            <Link href="/">
              <Image
                alt="SoftLion"
                className={s.footer__logo}
                src={Logo}
                width={800}
                height={554}
              />
            </Link>
            <div className={s.footer__routs}>
              {routes.map((route, index) => (
                <Link key={index} href={route.path} className={s.footer__routs_name}>
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          <div className={s.footer__colum_copy}>
            <p className={s.footer__copyright}>©2023 Copyright SoftLion. All rights reserved.</p>
            <Link href="/privacy-policy" className={s.footer__colum_name}>
              Privacy policy
            </Link>
          </div>
        </div>
        <div className={s.footer__block_second}>
          <div className={s.footer__content}>
            <div className={s.footer__icons}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  className={s.footer__link}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a href="mailto:office.softlion@gmail.com" className={s.footer__email}>
              office.softlion@gmail.com
            </a>
          </div>
          <div className={s.footer__btn}>
            <MainButtonComponent color="dark-blue" path="contact-us" className={s.footer__btn_text}>
              Book Consultation
            </MainButtonComponent>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
