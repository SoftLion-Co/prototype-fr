import s from "./CustomAppsSection.module.scss";
import HeadingComponent from "@/components/HeadingComponent"

const CustomAppsSection = () => {
  return (
    <div className={s.customapps}>
      <p className={s.customapps__num}>02</p>
      <div className={s.heading_container}>
        <h1 className={s.heading}>Custom Apps</h1>
      </div>
      {/* <div className={s.customapps__title} >
      {/* <HeadingComponent  text="Custom Apps"/> */}
      {/* </div> */} 
    </div>
  );
};

export default CustomAppsSection;
