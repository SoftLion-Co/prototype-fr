import s from "./ServiceHeadingComponent.module.scss";
import Image from "next/image";
import Line from "../../images/line-component.svg";
import classNames from "classnames";

interface ServiceHeadingComponentProps {
  headingText: string;
  container?: boolean;
}

const ServiceHeadingComponent: React.FC<ServiceHeadingComponentProps> = ({
  headingText,
  container = true,
}) => {
  const headingClass = classNames(s.heading, {
    [s.container]: container === true, // Додаємо s.container, якщо container === true
  });

  return (
    <div className={headingClass}>
      <div className={s.heading__component}>
        <h2 className={s.heading__title}>{headingText}</h2>
        <Image src={Line} alt="Security line" className={s.heading__svg} />
      </div>
    </div>
  );
};

export default ServiceHeadingComponent;
