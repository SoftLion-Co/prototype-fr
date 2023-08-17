import s from "./SocialAuthorizationComponent.module.scss";
import Image from "next/image";
import Google from "../../images/Google.svg";
import Facebook from "../../images/Facebook.svg";
import LinkedIn from "../../images/LinkedIn.svg";
import { FC } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

interface SocialAuthorizationProps {
  text: string;
}

const SocialAuthorization: FC<SocialAuthorizationProps> = ({ text }) => {
  const { data: session, status } = useSession();

  console.log("loggedIn, session: ", session, status);

  return (
    <div className={s.social}>
      <h3 className={s.title}>{text}</h3>
      <div className={s.social__container}>
        <button className={s.social__button} type="button" onClick={() => signIn("linkedin")}>
          <Image className={s.social__icon} width={72} height={72} src={LinkedIn} alt="LinkedIn" />
        </button>

        <button className={s.social__button} type="button" onClick={() => signIn("google")}>
          <Image className={s.social__icon} width={72} height={72} src={Google} alt="Google" />
        </button>
        <button className={s.social__button} type="button" onClick={() => signIn("facebook")}>
          <Image className={s.social__icon} width={72} height={72} src={Facebook} alt="Facebook" />
        </button>
      </div>
      {session && <button onClick={() => signOut()}>Sign Out</button>}
    </div>
  );
};

export default SocialAuthorization;
