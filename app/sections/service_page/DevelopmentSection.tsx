import s from "./DevelopmentSection.module.scss";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import classNames from "classnames";
import Image from "next/image";
import pic1 from "../../../images/services/development/analytics-and-planning.svg"
import DevelopmentCardComponent from "@/components/services/DevelopmentCardComponent";
import DevelopmentCardMobileComponent from "@/components/services/DevelopmentCardMobileComponent"
const DevelopmentSection = () => {

  const cardItems = ['Defining project goals, studying requirements, and understanding user needs.', 'Defining project goals, studying requirements, and understanding user needs.', 'Defining project goals, studying requirements, and understanding user needs.'];
  return (
    <div className={classNames(s.container, s.develop)}>
 <DevelopmentCardComponent num={1}  path={pic1} title="Analysis and Planning" items={cardItems}/>
<DevelopmentCardMobileComponent/>



    </div>
  );
};

export default DevelopmentSection;
