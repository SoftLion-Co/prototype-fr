import s from "./ServiceSecurityCardComponent.module.scss";
import Image from "next/image";
import Security from "../../images/security.svg";

interface ServiceSecurityCardComponentProps {
  title?: string;
  description?: string;
  data?: { description: string; title: string }; // Combine both description and title properties inside data
}

const ServiceSecurityCardComponent: React.FC<
  ServiceSecurityCardComponentProps
> = ({ title, description, data }) => {
  const cardTitle = title || (data && data.title);
  const cardDescription = description || (data && data.description);

  return (
    <div className={s.security}>
      <div className={s.security__head}>
        <Image
          src={Security}
          alt="Security Cards"
          className={s.security__img}
        />
        <h4 className={s.security__title}>{cardTitle}</h4>
      </div>
      <p className={s.security__text}>{cardDescription}</p>
    </div>
  );
};

export default ServiceSecurityCardComponent;
