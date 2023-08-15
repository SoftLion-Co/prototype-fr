import classNames from "classnames";
import s from "./ProjectContactUs.module.scss";
import FormComponent from "@/components/FormComponent";
import HeadingComponent from "@/components/HeadingComponent";

const ProjectContactUs = () => {
  return (
    <div className={s.container}>
      <HeadingComponent text="Contact Us" customClass={s.heading} />

      <div className={classNames(s.our_form)}>
        <FormComponent title="Share an idea with us" />
      </div>
    </div>
  );
};

export default ProjectContactUs;
