import s from "./ServiceHeadingComponent.module.scss";
import Image from "next/image";
import Line from "../../images/line-component.svg";

interface ServiceHeadingComponentProps {
  headingText: string;
}

const ServiceHeadingComponent: React.FC<ServiceHeadingComponentProps> = ({
  headingText,
}) => {
  return (
    <div className={s.heading}>
      <h3 className={s.heading__title}>{headingText}</h3>
      <Image src={Line} alt="Security line" className={s.heading__svg} />
    </div>
  );
};

export default ServiceHeadingComponent;
