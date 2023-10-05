import s from "../../app/sections/AuthSectionsCommon.module.scss";
import ForgotPasswordSection from '../sections/forgot_password_page/ForgotPasswordSection';

const ForgotPassword = () => {
  return (
    <div className={s.container_page}>
      <ForgotPasswordSection/>
    </div>
  );
};
export default ForgotPassword;