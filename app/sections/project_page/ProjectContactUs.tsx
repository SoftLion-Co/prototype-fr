import classNames from "classnames";
import s from "./ProjectContactUs.module.scss";
import FormComponent from "@/components/FormComponent";
import HeadingComponent from "@/components/HeadingComponent";

const ProjectContactUs = () => {
  return (
    <div >
      <div className={s.container}>
      <HeadingComponent text="Contact Us" customClass={s.heading} />
      </div>
      <div className={classNames(s.our_form, s.container)}>
        <FormComponent title="Share an idea with us" />
      </div>
    </div>
  );
};

export default ProjectContactUs;
