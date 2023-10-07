import React from "react";
import LoginSection from "../sections/login_page/LoginSection";
import s from "../../app/sections/AuthSectionsCommon.module.scss";
export async function generateMetadata({}) {
  return { title: "SoftLion | Login" };
}

const Login = () => {
  return (
    <div className={s.container_page}>
      <LoginSection />
    </div>
  );
};

export default Login;
