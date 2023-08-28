import s from "./page.module.scss";
import ForgotPasswordSection from '../sections/forgot_password_page/ForgotPasswordSection';

const ForgotPassword = () => {
  return (
    <div className={s.forgot_password}>
      <ForgotPasswordSection/>
    </div>
  );
};
export default ForgotPassword;