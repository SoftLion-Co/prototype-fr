import SocialAuthorization from "@/components/SocialAuthorizationComponent";
import s from "./RegistrationSection.module.scss";
import { LuUnlock } from "react-icons/lu";
import classNames from "classnames";
import MainButtonComponent from "@/components/MainButtonComponent";

const RegistrationSection = () => {
  return (
    <div className={classNames(s.container, s.registration)}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Registration</h2>
        <div className={s.information}>
          <LuUnlock className={s.information__icon}/>
          <p className={s.information__text}>Please fill out the form, and we will register an account for you.</p>
        </div>
        <form className={s.form}>
          <input className={s.form__input} type="text" placeholder="Name" />
          <input className={s.form__input} type="email" placeholder="E-mail" />
          <input className={s.form__input} type="tel" placeholder="Phone" />
          <input className={s.form__input} type="password" placeholder="Create your password" />
          <input className={s.form__input} type="password" placeholder="Confirm your password" />

          <MainButtonComponent className={s.form__button} type="submit">Continue</MainButtonComponent>
        </form>
      </div>

      <SocialAuthorization text="You can register with" />
    </div>
  );
};

export default RegistrationSection;
