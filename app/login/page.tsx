"use client";

import React, { useEffect } from "react";
import LoginSection from "../sections/login_page/LoginSection";
import s from "../../app/sections/AuthSectionsCommon.module.scss";

const Login = () => {
  useEffect(() => {
    // Google tag (gtag.js)
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-YPC94QJXCN";

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-YPC94QJXCN');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);
  }, []);

  return (
    <div className={s.container_page}>
      <LoginSection />
    </div>
  );
};

export default Login;
