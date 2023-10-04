"use client";

import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import s from "./page.module.scss";
import ContactUsSection from "../sections/contact_us_page/ContactUsSection";

const ContactUs: React.FC = () => {
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
    <div className={s.contact_page}>
      <Helmet key={window.location.pathname}>
        <title>SoftLion | Contact Us</title>
      </Helmet>

      <ContactUsSection />
    </div>
  );
};

export default ContactUs;
