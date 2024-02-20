"use client";
import classNames from "classnames";
import s from "./FooterComponent.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "./../images/logo.svg";

import MainButtonComponent from "./MainButtonComponent";

import Instagram from "@/images/social-lincs/icon-instagram.svg";
import Facebook from "@/images/social-lincs/icon-facebook.svg";
import Linkedin from "@/images/social-lincs/icon-linkedin.svg";

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
      url: "https://instagram.com/softlion_co/",
      icon: (
        <Image src={Instagram} alt="Instagram" className={s.footer__icon} />
      ),
    },
    {
      url: "https://www.facebook.com/people/SoftLion/100093384261914/",
      icon: <Image src={Facebook} alt="Facebook" className={s.footer__icon} />,
    },
    {
      url: "https://www.linkedin.com/company/softlion/",
      icon: <Image src={Linkedin} alt="Linkedin" className={s.footer__icon} />,
    },
  ];

  return (
    <footer id="footer" className={s.footer}>
      <div className={s.footer__contents}>
        <div className={classNames(s.footer__block)}>
          <div className={s.footer__container}>
            <div className={s.footer__brand}>
              <Link href="/">
                <Image
                  alt="SoftLion"
                  className={s.footer__logo}
                  src={Logo}
                  width={300}
                  height={150}
                />
              </Link>

              <p className={classNames(s.footer__text, s.footer__copyright)}>
                ©2023 Copyright SoftLion. All rights reserved.
              </p>
            </div>
          </div>

          <div className={s.footer__box}>
            <div className={s.footer__links}>
              <div className={s.footer__routs}>
                {routes.map((route, index) => (
                  <Link
                    key={index}
                    href={route.path}
                    className={classNames(s.footer__hover, s.footer__text)}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/privacy-policy"
                className={classNames(s.footer__hover, s.footer__text)}
              >
                Privacy policy
              </Link>
            </div>

            <div className={s.footer__contact}>
              <div className={s.footer__content}>
                <div className={s.footer__icons}>
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      className={s.footer__hover}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
                <a
                  href="mailto:office.softlion@gmail.com"
                  className={classNames(s.footer__hover, s.footer__text)}
                >
                  office.softlion@gmail.com
                </a>
              </div>
              <div className={s.footer__btn}>
                <MainButtonComponent
                  color="blue"
                  path="contact-us"
                  className={s.footer__btn_text}
                >
                  Book Consultation
                </MainButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
