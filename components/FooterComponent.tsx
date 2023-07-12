import Link from "next/link";
import s from "./FooterComponent.module.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin, FiFacebook } from "react-icons/fi";
import { PiTelegramLogoDuotone } from "react-icons/pi";

export const FooterComp = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__mainWrap}>
        <div className={s.footer__firstBlock}>
          <div className={s.footer__logo}></div>
          <div className={s.footer__routeWrap2}>
            <Link href={"/services"} className={s.footer__routeName}>
              Service
            </Link>
            <Link href={"/ourlink"} className={s.footer__routeName}>
              Our Projects
            </Link>
            <Link href={"/technologies"} className={s.footer__routeName}>
              Technologies
            </Link>
            <Link href={"/blog"} className={s.footer__routeName}>
              Blog
            </Link>
            <Link href={"/contact"} className={s.footer__routeName}>
              Contact Us
            </Link>
          </div>
          <div>
            <p className={s.footer__routeNamePriv}>Privacy policy</p>
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
              <Link href={"/ourlink"} className={s.footer__routeName}>
                Our Projects
              </Link>
              <Link href={"/technologies"} className={s.footer__routeName}>
                Technologies
              </Link>
              <Link href={"/blog"} className={s.footer__routeName}>
                Blog
              </Link>
              <Link href={"/contact"} className={s.footer__routeName}>
                Contact Us
              </Link>
            </div>
            <div>
              <p className={s.footer__routeName}>Privacy policy</p>
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
          <button className={s.footer__btnFooter}>
            <p className={s.footer__btnText}>Book Consultation</p>
          </button>
        </div>
      </div>
    </footer>
  );
};
