import NewPasswordSection from "../sections/new_password_page/NewPasswordSection";
import s from "../../app/sections/AuthSectionsCommon.module.scss";

const newPassword = () => {
  return (
    <div className={s.container_page}>
      <NewPasswordSection/>
    </div>
  );
};
export default newPassword;