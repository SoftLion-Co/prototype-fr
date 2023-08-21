import NewPasswordSection from "../sections/new_password_page/NewPasswordSection";
import s from "./page.module.scss";

const newPassword = () => {
  return (
    <div className={s.registration_page}>
      <NewPasswordSection/>
    </div>
  );
};
export default newPassword;