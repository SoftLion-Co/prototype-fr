import s from "./SocialAuthorizationComponent.module.scss";
import Image from "next/image";
import Google from "../images/Google.svg";
import Facebook from "../images/Facebook.svg";
import LinkedIn from "../images/LinkedIn.svg";
import { FC } from "react";
import Link from "next/link";

interface SocialAuthorizationProps {
  text: string;
}

const SocialAuthorization: FC<SocialAuthorizationProps> = ({ text }) => {
  return (
    <div className={s.social}>
      <h3 className={s.title}>{text}</h3>
      <div className={s.social__container}>
        <Link href="/">
          <Image className={s.social__icon} width={72} height={72} src={LinkedIn} alt="LinkedIn" />
        </Link>
        <Link href="/">
          <Image className={s.social__icon} width={72} height={72} src={Google} alt="Google" />
        </Link>
        <Link href="/">
          <Image className={s.social__icon} width={72} height={72} src={Facebook} alt="Facebook" />
        </Link>
      </div>
    </div>
  );
};

export default SocialAuthorization;
