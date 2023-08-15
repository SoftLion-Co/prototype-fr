import Link from "next/link";
import s from "./FooterComponent.module.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin, FiFacebook } from "react-icons/fi";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import MainButtonComponent from "./MainButtonComponent";
import Logo from "./../images/logo.svg";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <footer className={`${s.footer} ${s.container}`}>
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
              <Link href={"/services"} className={s.footer__routs_name}>
                Service
              </Link>
              <Link href={"/projects"} className={s.footer__routs_name}>
                Our Projects
              </Link>
              <Link href={"/technologies"} className={s.footer__routs_name}>
                Technologies
              </Link>
              <Link href={"/blogs"} className={s.footer__routs_name}>
                Blog
              </Link>
              <Link href={"/contact"} className={s.footer__routs_name}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className={s.footer__colum_copy}>
            <p className={s.footer__copyright}>
              ©2023 Copyright SoftLion. All rights reserved.
            </p>
            <Link href={"/privacy-policy"} className={s.footer__routs_name}>
              Privacy policy
            </Link>
          </div>
        </div>
        <div className={s.footer__block_third}>
          <div className={s.footer__content}>
            <div className={s.footer__icons_wrap}>
              <a
                className={s.footer__link}
                href="https://www.linkedin.com/company/softlion/"
              >
                <FiLinkedin className={s.footer__icons} />
              </a>
              <a
                className={s.footer__link}
                href="https://instagram.com/softlion_co/"
              >
                <AiOutlineInstagram className={s.footer__icons} />
              </a>
              <a
                className={s.footer__link}
                href="https://www.facebook.com/people/SoftLion/100093384261914/"
              >
                <FiFacebook className={s.footer__icons} />
              </a>
              <a className={s.footer__link} href="#">
                <PiTelegramLogoDuotone className={s.footer__icons} />
              </a>
            </div>
            <a
              href="mailto:office.softlion@gmail.com"
              className={s.footer__email}
            >
              office.softlion@gmail.com
            </a>
          </div>
          <div className={s.footer__btn}>
            <MainButtonComponent
              color="dark-blue"
              path="services"
              className={s.footer__btn_text}
            >
              Book Consultation
            </MainButtonComponent>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
