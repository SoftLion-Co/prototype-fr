import NewPasswordSection from "../sections/new_password_page/NewPasswordSection";
import s from "./page.module.scss";

const newPassword = () => {
  return (
    <div className={s.new_password}>
      <NewPasswordSection/>
    </div>
  );
};
export default newPassword;