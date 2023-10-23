import RegistrationSection from "./../sections/registration_page/RegistrationSection";
import s from "../../app/sections/AuthSectionsCommon.module.scss";
export async function generateMetadata({}) {
  return { title: "SoftLion | Registration" };
}

const Registration = () => {
  return (
    <div className={s.container_page}>
      <RegistrationSection />
    </div>
  );
};
export default Registration;
