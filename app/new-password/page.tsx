import NewPasswordSection from "../sections/new_password_page/NewPasswordSection";
import s from "../../app/sections/AuthSectionsCommon.module.scss";
export async function generateMetadata({}) {
  return { title: "SoftLion | New Password" };
}

const newPassword = () => {
  return (
    <div className={s.container_page}>
      <NewPasswordSection/>
    </div>
  );
};
export default newPassword;