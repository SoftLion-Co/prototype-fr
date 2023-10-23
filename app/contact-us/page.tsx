import React from "react";
import s from "./page.module.scss";
import ContactUsSection from "../sections/contact_us_page/ContactUsSection";

import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

export async function generateMetadata({}) {
  return { title: "SoftLion | Contact Us" };
}

const ContactUs = () => {
  useGoogleAnalytics();
  
  return (
    <div className={s.contact_page}>
      <ContactUsSection />
    </div>
  );
};

export default ContactUs;
