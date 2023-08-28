import EnterCodeSection from "../sections/enter_code_page/EnterCodeSection";
import s from "./page.module.scss";

const EnterCode = () => {
    return (
      <div className={s.container}>
        <EnterCodeSection/>
      </div>
    );
  };
  export default EnterCode;