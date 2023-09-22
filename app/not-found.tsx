import Link from "next/link";
import s from "./not-found.module.scss";
import logo_monochrome from "./../images/logo_monochrome.svg";
import Image from "next/image";
import classNames from "classnames";

export default function NotFound() {
  return (
    <div className={classNames(s.container, s.error)}>
      <div className={s.error__image}>
        <Image src={logo_monochrome} alt="SoftLion" height={600} width={600} />
      </div>

      <p className={s.error__paragraph}>Lion's Roar 404: Page Not Found</p>
      <Link href="/" className={s.error__link}>
        Return Home
      </Link>
    </div>
  );
}
