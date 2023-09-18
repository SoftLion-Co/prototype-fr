import LoginSection from "../sections/login_page/LoginSection";
import s from "../../app/sections/AuthSectionsCommon.module.scss";

const Login = () => {
  return (
    <div className={s.container_page}>
      <LoginSection/>
    </div>
  );
};
export default Login;