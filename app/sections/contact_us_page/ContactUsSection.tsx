import s from "./ContactUsSection.module.scss";
import FormComponent from "../../../components/FormComponent";
import HeadingComponent from "../../../components/HeadingComponent";
import classNames from "classnames"

const ContactUsSection = () => {
  return (
    <div className={classNames(s.container, s.our_form)}>
      <div className={s.title}>
        <HeadingComponent text="Contact Us" />
        <p className={s.title__text}>
          Submit your request now, and we will get in touch with you to discuss
          the details and develop a customized solution. Together, we can create
          a powerful tool for your business and ensure your success in the
          online world.
        </p>
      </div>
      <FormComponent title="Book consultation"/>
    </div>
  );
};

export default ContactUsSection;
