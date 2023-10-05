import React from "react";
import s from "./page.module.scss";
import ContactUsSection from "../sections/contact_us_page/ContactUsSection";
import UseClientComponent from "@/hooks/useClientComponent";

const ContactUs = (argument?: string) => {
  const title = "Contact Us";

  return (
    <div className={s.contact_page}>
      <UseClientComponent argument={argument} title={title} />
      <ContactUsSection />
    </div>
  );
};

export default ContactUs;
