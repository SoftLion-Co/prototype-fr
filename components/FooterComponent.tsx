import Link from "next/link";
import s from "./FooterComponent.module.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin, FiFacebook } from "react-icons/fi";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import MainButtonComponent from "./MainButtonComponent";
import Logo from "./../images/logo.svg";
import Image from "next/image";

export const FooterComp = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footer__mainWrap}>
          <div className={s.footer__firstBlock}>
            <Link href="/">
              <Image
                className={s.footer__logo}
                src={Logo}
                width={800}
                height={554}
                alt="SoftLion"
              />
            </Link>
            <div className={s.footer__routeWrap2}>
              <Link href={"/services"} className={s.footer__routeName}>
                Service
              </Link>
              <Link href={"/projects"} className={s.footer__routeName}>
                Our Projects
              </Link>
              <Link href={"/technologies"} className={s.footer__routeName}>
                Technologies
              </Link>
              <Link href={"/blogs"} className={s.footer__routeName}>
                Blog
              </Link>
              <Link href={"/contact"} className={s.footer__routeName}>
                Contact Us
              </Link>
            </div>
            <div className={s.footer__routeNamePriv}>
              <Link href={"/privacy-policy"} className={s.footer__routeName}>
                Privacy policy
              </Link>
            </div>
            <p className={s.footer__logoText}>
              ©2023 Copyright SoftLion. All rights reserved.
            </p>
          </div>
          <div className={s.footer__secondBlock}>
            <div>
              <div className={s.footer__routeWrap}>
                <Link href={"/services"} className={s.footer__routeName}>
                  Service
                </Link>
                <Link href={"/projects"} className={s.footer__routeName}>
                  Our Projects
                </Link>
                <Link href={"/technologies"} className={s.footer__routeName}>
                  Technologies
                </Link>
                <Link href={"/blogs"} className={s.footer__routeName}>
                  Blog
                </Link>
                <Link href={"/contact"} className={s.footer__routeName}>
                  Contact Us
                </Link>
              </div>
              <div>
                <Link href={"/privacy-policy"} className={s.footer__routeName}>
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
          <div className={s.footer__thirdBlock}>
            <div className={s.footer__iconsWrap}>
              <a
                className={s.footer__thirdBlockLink}
                href="https://www.linkedin.com/company/softlion/"
              >
                <FiLinkedin className={s.footer__icons} />
              </a>
              <a
                className={s.footer__thirdBlockLink}
                href="https://instagram.com/softlion_co/"
              >
                <AiOutlineInstagram className={s.footer__icons} />
              </a>
              <a
                className={s.footer__thirdBlockLink}
                href="https://www.facebook.com/people/SoftLion/100093384261914/"
              >
                <FiFacebook className={s.footer__icons} />
              </a>
              <a className={s.footer__thirdBlockLink} href="#">
                <PiTelegramLogoDuotone className={s.footer__icons} />
              </a>
            </div>
            <a
              href="mailto:office.softlion@gmail.com"
              className={s.footer__email}
            >
              office.softlion@gmail.com
            </a>
            <div className={s.footer__btnFooter}>
              <MainButtonComponent
                color="dark-blue"
                path="services"
                className={s.footer__btnFooter_text}
              >
                Book Consultation
              </MainButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
