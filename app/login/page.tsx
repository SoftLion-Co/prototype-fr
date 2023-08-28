
import LoginSection from "../sections/login_page/LoginSection";
import s from "./page.module.scss";

const Login = () => {
  return (
    <div className={s.login_page}>
      <LoginSection/>
    </div>
  );
};
export default Login;