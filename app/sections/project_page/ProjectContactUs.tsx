import classNames from "classnames";
import s from "./ProjectContactUs.module.scss";
import FormComponent from "@/components/FormComponent";


const ProjectContactUs = () =>{
    return(
        <div className={classNames(s.container, s.our_form)}>
            <FormComponent title="Share an idea with us"/>
        </div>
    )
}

export default ProjectContactUs;