import s from "./DevelopmentSection.module.scss"
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";

const DevelopmentSection = () => {
    return (
        <div>
     <div className={s.custom_title}>
      <ServiceHeadingComponent headingText={"Development"} container={false}/>
      </div>
        </div>
    )
}

export default DevelopmentSection