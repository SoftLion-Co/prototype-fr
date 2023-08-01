import s from "./HeadingOurProjectComponent.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Line from "../../images/project/line-component.svg";

interface HeadingOurProjectComponentProps {
  title: string;
  text: string;
}
// props
const HeadingOurProjectComponent: React.FC<HeadingOurProjectComponentProps> = ({
  title,
  text,
}) => {
  return (
    <div className={classNames(s.container, s.heading)}>
      <h3 className={s.heading__title}>{title}</h3>
      <Image src={Line} alt="" className={s.heading__svg} />
      <p className={s.heading__text}>{text}</p>
    </div>
  );
};

export default HeadingOurProjectComponent;

