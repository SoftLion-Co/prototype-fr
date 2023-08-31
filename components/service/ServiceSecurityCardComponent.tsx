import s from "./ServiceSecurityCardComponent.module.scss";
import Image from "next/image";
import Security from "../../images/security.svg";

interface ServiceSecurityCardComponentProps {
  title?: string;
  description?: string;
  data?: { description: string; title: string };
}

const ServiceSecurityCardComponent: React.FC<
  ServiceSecurityCardComponentProps
> = ({ title, description, data }) => {
  const cardTitle = title || (data && data.title);
  const cardDescription = description || (data && data.description);

  return (
    <div className={s.security}>
      <div className={s.main__block}>
        <div className={s.security__head}>
          <Image
            src={Security}
            alt="Security Cards"
            className={s.security__img}
          />
          <div>
            <h4 className={s.security__title}>{cardTitle}</h4>
          </div>
        </div>
      </div>
      <p className={s.security__text}>{cardDescription}</p>
    </div>
  );
};

export default ServiceSecurityCardComponent;
