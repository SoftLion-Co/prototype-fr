import EnterCodeSection from "../sections/enter_code_page/EnterCodeSection";
import s from "../../app/sections/AuthSectionsCommon.module.scss";

const EnterCode = () => {
    return (
      <div className={s.container_page}>
        <EnterCodeSection/>
      </div>
    );
  };
  export default EnterCode;