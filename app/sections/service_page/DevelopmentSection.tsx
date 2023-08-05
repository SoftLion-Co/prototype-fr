"use client"
import s from "./DevelopmentSection.module.scss";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import classNames from "classnames";
import pic1 from "../../../images/services/development/analytics-and-planning.svg";
import pic2 from "../../../images/services/development/design-and-development.svg";
import pic3 from "../../../images/services/development/testing-and-debuging.svg";
import pic4 from "../../../images/services/development/deployment-and-maintenance.svg";
import DevelopmentCardComponent from "@/components/service/DevelopmentCardComponent";
import DevelopmentCardMobileComponent from "@/components/service/DevelopmentCardMobileComponent";



const cardsData = [
  {
    num: 1,
    title: "Analysis and Planning",
    items: [
      "Defining project goals, studying requirements, and understanding user needs.",
      "Defining project goals, studying requirements, and understanding user needs.",
      "Defining project goals, studying requirements, and understanding user needs.",
    ],
    path: pic1,
    leftAligned: true,
  },
  {
    num: 2,
    title: "Design and Development",
    items: [
      "Creating sketches, defining the visual style, and designing the user interface.",
      "Developing functionality, programming, and creating a database.",
      "Implementing testing and bug fixing.",
    ],
    path: pic2,
    
  },
  {
    num: 3,
    title: "Testing and Debugging",
    items: [
      "Conducting functional and requirements-based testing.",
      "Identifying and resolving errors, optimizing the product.",
      "Performing compatibility testing, security testing, and load testing.",
    ],
    path: pic3,
    leftAligned: true,
  },
  {
    num: 4,
    title: "Design and Development",
    items: [
      "Releasing the product, launching the website or application.",
      "Monitoring, ensuring stability and security.",
      "Providing user support, updating functionality, and product development.",
    ],
    path: pic4,

  },
];

const DevelopmentSection = () => {
  return (
    <section  className={classNames(s.container, s.develop)}>
       <div className={s.develop__heading}>
       <ServiceHeadingComponent headingText={" Development"} container={false}/>
       </div>
       <div className={s.develop__mob}>
    {cardsData.map((data) => (
      <DevelopmentCardMobileComponent
        key={data.num}
        num={data.num}
        title={data.title}
        items={data.items}
        path={data.path}
      />
    ))}
    </div>
    <div className={s.develop__desktop}>
  
     {cardsData.map((data) => (
        <DevelopmentCardComponent
          key={data.num}
          num={data.num}
          title={data.title}
          items={data.items}
          path={data.path}
          leftAligned={data.leftAligned}
        /> 
      ))}
       </div>
  </section>
);
};

export default DevelopmentSection;

