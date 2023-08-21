import React from 'react';
import s from "./page.module.scss"
import ContactUsSection from '../sections/contact_us_page/ContactUsSection';

const ContactUs: React.FC = () => {
  return (
<div className={s.contact_page}>
      <ContactUsSection/>
    </div>
  );
};

export default ContactUs;