import s from "./ContactUsSection.module.scss";
import FormComponent from "../../../components/FormComponent";
import HeadingComponent from "../../../components/HeadingComponent";
import classNames from "classnames";

const ContactUsSection = () => {
  return (
    <div className={classNames(s.container, s.our_form)}>
      <div className={s.heading}>
        <div className={s.heading__title}>
          <HeadingComponent text="Contact Us" />
        </div>
        <p className={s.heading__text}>
          Submit your request now, and we will get in touch with you to discuss
          the details and develop a customized solution. Together, we can create
          a powerful tool for your business and ensure your success in the
          e-commerce world.
        </p>
      </div>
      <FormComponent title="Book consultation" />
      <div className={s.blur}>
        <div className={s.blur_item}></div>
      </div>
    </div>
  );
};

export default ContactUsSection;
