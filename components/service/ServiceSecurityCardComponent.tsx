import s from "./ServiceSecurityCardComponent.module.scss";
import Image from "next/image";
import Security from "../../images/security.svg";

const ServiceSecurityCardComponent = () => {

  return (
    <div className={s.security}>
      <div className={s.security__head}>
        <Image src={Security} alt="Security Cards" className={s.security__img}/>
        <h4 className={s.security__title}>Discovery Stage</h4>
      </div>
      <p className={s.security__text}>
        When developing applications or websites, we pay great attention to
        protecting the customer's confidential information. We employ advanced
        encryption technologies to safeguard personal data and other sensitive
        information.
      </p>
    </div>
  );
};

export default ServiceSecurityCardComponent;
