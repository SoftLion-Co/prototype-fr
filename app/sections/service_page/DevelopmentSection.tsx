import s from "./DevelopmentSection.module.scss";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import classNames from "classnames";
import Image from "next/image";
import pic1 from "../../../images/services/development/analytics-and-planning.svg"
import DevelopmentCardComponent from "@/components/services/DevelopmentCardComponent";

const DevelopmentSection = () => {

  const cardItems = ['Defining project goals, studying requirements, and understanding user needs.', 'Defining project goals, studying requirements, and understanding user needs.', 'Defining project goals, studying requirements, and understanding user needs.'];
  return (
    <div className={classNames(s.container, s.develop)}>
 <DevelopmentCardComponent num={1}  path={pic1} title="Analysis and Planning" items={cardItems}/>



      {/* <ServiceHeadingComponent headingText={"Development"} container={false} />
      <div className={s.develop__cards}>
        <div className={s.develop__card}>
          <div className={s.develop__upsection}>
            <div className={s.develop__wrap}>
            <p className={s.develop__num}>1</p>
            <Image
              className={s.develop__pic1}
              src={pic1}
              alt="Analysis and Planning"
            />
            </div>
            <h3 className={s.develop__title}>Analysis and Planning</h3>
          </div>
          <div className={s.develop__downsection}></div>
        </div>
      </div> */}
    </div>
  );
};

export default DevelopmentSection;
