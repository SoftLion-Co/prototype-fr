import classNames from "classnames";
import s from "./ProjectContactUs.module.scss";
import FormComponent from "@/components/FormComponent";
import HeadingComponent from "@/components/HeadingComponent";

const ProjectContactUs = () => {
  return (
    <section>
      <div className={s.container}>
        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
        <HeadingComponent text="Contact Us" customClass={s.heading} />
      </div>
      <div className={classNames(s.our_form, s.container)}>
        <FormComponent title="Share an idea with us" />
      </div>
    </section>
  );
};

export default ProjectContactUs;
