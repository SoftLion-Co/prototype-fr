import s from "./PrivacyPolicySection.module.scss";
import classNames from "classnames";

const PrivacyPolicySection = () => {
  return (
    <section className={classNames(s.container, s.privacy)}>
      <p className={classNames(s.privacy___bold, s.privacy___date)}>
        This version of Privacy Policy was published __/__/____
      </p>
      <h1 className={s.privacy__title}>SUMMARY OF THE KEY POINTS</h1>
      <p className={s.privacy__text}>
        <span className={s.privacy___bold}>In Short:</span> This summary
        highlights important points from our privacy notice, which applies to
        SoftLion. For more detailed information on any of these topics, please
        click the corresponding link or use our table of contents to find the
        relevant section.
      </p>
      <ul className={classNames(s.privacy__list, s.privacy__list___tab)}>
        <li className={s.privacy__item}>
          What personal information do we collect? We collect personal
          information based on your interactions with SoftLion and our Services,
          as well as the choices you make and the features you use. Please click
          here to learn more.
        </li>
        <li className={s.privacy__item}>
          Do we process sensitive personal information? No, we don’t process
          sensitive personal information.
        </li>
        <li className={s.privacy__item}>
          Do we receive information from third parties? No, we don’t receive
          information from third parties.
        </li>
        <li className={s.privacy__item}>
          How do we process your information? We process your information to
          provide, improve, and manage our Services, communicate with you,
          prevent security breaches and fraud, and comply with legal
          requirements. With your consent, we may also process your information
          for other purposes. We process your information only when it is
          legally permitted to do so. Please click here to learn more.
        </li>
        <li className={s.privacy__item}>
          In what circumstances do we share personal information and with whom?
          We may share personal information in specific circumstances and with
          specific categories of third parties. Please click here to learn more.
        </li>
        <li className={s.privacy__item}>
          How do we safeguard your information? We have technical and
          organizational measures in place to protect your personal information.
          However, there is no entirely secure system yet, so we cannot
          guarantee that unauthorized third parties will not be able to access
          your information. Please click here to learn more.
        </li>
        <li className={s.privacy__item}>
          What are your rights? Depending on your location, you may have certain
          rights regarding your personal information under applicable privacy
          laws. Please click here to learn more.
        </li>
        <li className={s.privacy__item}>
          How do you exercise your rights? The simplest way to exercise your
          rights is by completing our data subject request form, available here,
          or by contacting us. We will review and address any request in
          compliance with applicable data protection laws.
        </li>
        <li className={s.privacy__item}>
          To learn more about how SoftLion handles the information we collect,
          please click here to read our full privacy notice.
        </li>
      </ul>
      <h2 className={s.privacy__title}>TABLE OF CONTENTS:</h2>
      <ul className={classNames(s.privacy__list, s.privacy__list___tab, s.privacy__list___color )}>
        <li className={s.privacy__item}>
          <a href="#item1" className={s.privacy__title___color}>
            {" "}
            WHAT TYPE OF INFORMATION IS COLLECTED BY SOFTLION?{" "}
          </a>
        </li>
        <li className={s.privacy__item}>
          <a href="#item2" className={s.privacy__title___color}>
            WHAT IS THE METHOD OF PROCESSING YOUR INFORMATION?
          </a>
        </li>
        <li className={s.privacy__item}>
          <a href="#item3" className={s.privacy__title___color}>
            {" "}
            WHEN AND TO WITH IS YOUR PERSONAL INFORMATION SHARED?
          </a>
        </li>
        <li className={s.privacy__item}>
          <a href="#item4" className={s.privacy__title___color}>
            {" "}
            IS THE USAGE OF COOKIES AND OTHER TRACKING TECHNOLOGIES IMPLEMENTED?
          </a>
        </li>
        <li className={s.privacy__item}>
          <a href="#item5" className={s.privacy__title___color}>
            {" "}
            WHAT IS THE DURATION OF INFORMATION RETENTION?
          </a>
        </li>
        <li className={s.privacy__item}>
          <a href="#item6" className={s.privacy__title___color}>
            WHAT ARE THE MEASURES TAKEN TO ENSURE THE SAFETY OF YOUR
            INFORMATION?
          </a>
        </li>
        <li className={s.privacy__item}>
          <a href="#item7" className={s.privacy__title___color}>
            {" "}
            IS INFORMATION COLLECTED FROM MINORS?
          </a>
        </li>
        <li className={s.privacy__item}>
          <a href="#item8" className={s.privacy__title___color}>
            {" "}
            WHAT ARE YOUR RIGHTS REGARDING PRIVACY?
          </a>
        </li>
        <li className={s.privacy__item}>
          <a href="#item9" className={s.privacy__title___color}>
            {" "}
            CONTROLS REGARDING “DO-NOT-TRACK FEATURES”
          </a>
        </li>
        <li className={s.privacy__item}>
          <a href="#item10" className={s.privacy__title___color}>
            {" "}
            ARE UPDATES MADE TO THIS NOTICE?
          </a>
        </li>
        <li className={s.privacy__item}>
          <a href="#item11" className={s.privacy__title___color}>
            WHAT ARE THE WAYS TO CONTACT US REGARDING THIS NOTICE?
          </a>
        </li>
      </ul>
      {/* =========== 1 ========== */}
      <ol className={s.privacy__list}>
        <li>
          <h2
            id="item1"
            className={s.privacy__title}
          >
            1. WHAT TYPE OF INFORMATION IS COLLECTED BY SOFTLION?
          </h2>
          <h3 className={s.privacy__title}>
            Personal information voluntarily provided to SoftLion
          </h3>
          <p className={s.privacy__text}>
            SoftLion collects personal information that users voluntarily
            provide when expressing interest in obtaining information about
            their products and services, participating in activities on the
            website, or contacting SoftLion. The personal information collected
            depends on the user's interaction with SoftLion, their choices, and
            the products and features they use. The information collected may
            include:
          </p>
          <ul className={classNames(s.privacy__list, s.privacy__list___tab)}>
            <li className={s.privacy__item}>names</li>
            <li className={s.privacy__item}>email addresses</li>
            <li className={s.privacy__item}>contact or authentication data</li>
          </ul>
          <p className={s.privacy__text}>
            SoftLion does not process sensitive information, and users must
            ensure that all personal information provided is true, complete, and
            accurate and notify SoftLion of any changes.
          </p>
          <h3 className={s.privacy__title}>
            Automatically collected information
          </h3>
          <p className={s.privacy__text}>
            When users visit SoftLion's website, certain information such as the
            user's IP address and/or browser and device characteristics are
            automatically collected. This information does not reveal the user's
            specific identity but may include device and usage information, such
            as operating systems, language preferences, referring URLs, device
            names, country, location, information about how and when users use
            SoftLion's services, and other technical information. SoftLion
            collects information through cookies and similar technologies, and
            the information collected includes log and usage data and device
            data.
          </p>
          <ul className={classNames(s.privacy__list, s.privacy__list___tab)}>
            <li className={s.privacy__item}>
              Log and usage data includes service-related, diagnostic, usage,
              and performance information automatically collected by SoftLion's
              servers when users access or use their services. This data may
              include the user's IP address, device information, browser type
              and settings, and information about their activity on the website,
              such as pages and files viewed, searches, and other actions taken.
            </li>
            <li className={s.privacy__item}>
              Device data collected by SoftLion includes information about the
              user's computer, phone, tablet, or other device used to access
              their services. Depending on the device, this may include the
              user's IP address or proxy server, device and application
              identification numbers, location, browser type, hardware model,
              internet service provider and/or mobile carrier, operating system,
              and system configuration information.
            </li>
            <li className={s.privacy__item}>
              SoftLion also collects location data, such as information about
              the user's device location, which can be either precise or
              imprecise. The amount of information collected depends on the
              device used and its settings. SoftLion may collect geolocation
              data using GPS and other technologies that tell them the user's
              current location based on their IP address. Users can opt out of
              allowing SoftLion to collect this information by refusing access
              or disabling the location setting on their device, but this may
              prevent them from using certain aspects of SoftLion's services.
            </li>
          </ul>
        </li>
        {/* =========== 2 ========== */}
        <li className={s.privacy__item___num}>
          <h2
            id="item2"
            className={s.privacy__title}
          >
            2. WHAT IS THE METHOD OF PROCESSING YOUR INFORMATION?
          </h2>
          <p className={s.privacy__text}>
            <span className={s.privacy___bold}>In Short:</span> To summarize, we
            use your personal information for various purposes including
            providing and improving our Services, communication with you,
            ensuring the security of our Services, preventing fraud, and
            complying with legal obligations. We may also use your information
            for other purposes if you provide your consent.
          </p>
          <p className={s.privacy__text}>
            We may use your information for other purposes with your consent.
          </p>
          <p className={s.privacy__text}>
            We process your personal information for various reasons related to
            how you interact with our Services, including:
          </p>
          <ul className={classNames(s.privacy__list, s.privacy__list___tab)}>
            <li className={s.privacy__item}>
              Providing and improving SoftLion Services. We process your
              information to operate, maintain, and improve our Services,
              including personalizing your experience and making it more
              user-friendly.
            </li>
            <li className={s.privacy__item}>
              Communication with you. We may process your information to respond
              to your inquiries, provide customer support and keep you updated
              about SoftLion Services.
            </li>
            <li className={s.privacy__item}>
              Ensuring security and preventing fraud. We process your
              information to protect the security and integrity of our Services
              and prevent fraudulent activities.
            </li>

            <li className={s.privacy__item}>
              Respect the law. We may process your information to comply with
              legal obligations, such as responding to lawful requests from
              authorities or to comply with applicable laws and regulations.
            </li>
            <li className={s.privacy__item}>
              Advertisement and content personalization. We may process your
              information to develop and display personalized advertisement and
              content according to your interests, location and other factors.
            </li>
            <li className={s.privacy__item}>
              Usage trends analysis. We may process information about how you
              use SoftLion Services for better understanding of how they are
              being used and to improve them.
            </li>
          </ul>
        </li>
        {/* =========== 3 ========== */}
        <li className={s.privacy__item___num}>
          <h2
            id="item3"
            className={s.privacy__title}
          >
            {" "}
            3. WHEN AND TO WITH IS YOUR PERSONAL INFORMATION SHARED?
          </h2>
          <p className={s.privacy__text}>
            <span className={s.privacy___bold}>In Short:</span> SoftLion may
            share information in specific situations described in this section
            and/or with the following categories of third parties. Vendors,
            Consultants, and Other Third-Party Service Providers. SoftLion may
            share your data with third-party vendors, service providers,
            contractors, or agents ('third parties') who perform services for us
            or on our behalf and require access to such information to do that
            work. We have contracts in place with our third parties, which are
            designed to help safeguard your personal information. This means
            that they cannot do anything with your personal information unless
            SoftLion has instructed them to do it. They will also not share your
            personal information with any organization apart from SoftLion. They
            also commit to protecting the data they hold on SoftLion's behalf
            and to retain it for the period SoftLion instructs. The categories
            of third parties SoftLion may share personal information with are as
            follows:
          </p>
          <ul className={classNames(s.privacy__list, s.privacy__list___tab)}>
            <li className={s.privacy__item}>Sales & Marketing Tools</li>
          </ul>
          <h3 className={s.privacy__title}>
            SoftLion may also need to share your personal information in the
            following situations:
          </h3>
          <ul className={classNames(s.privacy__list, s.privacy__list___tab)}>
            <li className={s.privacy__item}>
              Business Transfers. SoftLion may share or transfer your
              information in connection with or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </li>
          </ul>
        </li>
        {/* =========== 4 ========== */}
        <li className={s.privacy__item___num}>
          <h2
            id="item4"
            className={s.privacy__title}
          >
            4. IS THE USAGE OF COOKIES AND OTHER TRACKING TECHNOLOGIES
            IMPLEMENTED?
          </h2>
          <p className={s.privacy__text}>
            <span className={s.privacy___bold}>In Short:</span> SoftLion may use
            cookies and other tracking technologies to collect and store your
            information. SoftLion may use cookies, web beacons, and pixels to
            access or store information. For specific details on how we use
            these technologies and how you can refuse certain cookies, please
            see our Cookie Notice.
          </p>
        </li>
        {/* =========== 5 ========== */}
        <li className={s.privacy__item___num}>
          <h2
            id="item5"
            className={s.privacy__title}
          >
            5. WHAT IS THE DURATION OF INFORMATION RETENTION?
          </h2>
          <p className={s.privacy__text}>
            <span className={s.privacy___bold}>In Short:</span> SoftLion retains
            your personal information only as long as it is needed to achieve
            the purposes described in this privacy notice unless the law
            requires or allows for a longer retention period. We will retain
            your personal information only for as long as it is necessary to
            fulfill the purposes outlined in this privacy notice, unless a
            longer retention period is required or permitted by law, such as for
            tax, accounting, or other legal requirements. We will not keep your
            personal information for any purpose outlined in this notice for
            more than 2 years. If we have no legitimate business need to process
            your personal information, we will either delete or anonymize it. If
            this is not possible, we will securely store your personal
            information and isolate it from any further processing until it can
            be deleted.
          </p>
        </li>
        {/* =========== 6 ========== */}
        <li className={s.privacy__item___num}>
          <h2
            id="item6"
            className={s.privacy__title}
          >
            6. HAT ARE THE MEASURES TAKEN TO ENSURE THE SAFETY OF YOUR
            INFORMATION?
          </h2>
          <p className={s.privacy__text}>
            <span className={s.privacy___bold}>In Short:</span> SoftLion has
            implemented security measures to protect personal information, but
            no electronic transmission or storage can be completely secure.
            Therefore, there is a risk of unauthorized access or modification of
            personal information. We have implemented reasonable technical and
            organizational security measures to protect any personal information
            processed by SoftLion. However, while we make efforts to protect
            your information, no electronic transmission or storage technology
            can be guaranteed to be completely secure. As a result, we cannot
            guarantee or promise that unauthorized third parties like hackers or
            cybercriminals will not be able to compromise the security measures
            we have in place and unlawfully collect, access, steal, or modify
            your personal information. While we will do our best to protect your
            personal information, any transmission of personal information to
            and from our Services is at your own risk. It is recommended that
            you only access the Services within a secure environment.
          </p>
        </li>
        {/* =========== 7 ========== */}
        <li className={s.privacy__item___num}>
          <h2
            id="item7"
            className={s.privacy__title}
          >
            7. IS INFORMATION COLLECTED FROM MINORS?
          </h2>
          <p className={s.privacy__text}>
            <span className={s.privacy___bold}>In Short:</span> Our company does
            not intently gather information or promote to individuals who are
            under the age of 18. We do not intentionally collect data or market
            to individuals under the age of 18. By utilizing our Services, you
            affirm that you are at least 18 years old or that you are the parent
            or legal guardian of a minor who is using our Services and give
            consent for such minor's use of our Services. If we discover we have
            collected personal information from someone under 18 years old, we
            will deactivate the account and take appropriate measures to
            promptly delete such data from our records. If you become aware that
            we may have collected data from a person under the age of 18, please
            contact us at office.softlion@gmail.com.
          </p>
        </li>
        {/* =========== 8 ========== */}
        <li className={s.privacy__item___num}>
          <h2
            id="item8"
            className={s.privacy__title}
          >
            8. WHAT ARE YOUR RIGHTS REGARDING PRIVACY?
          </h2>
          <p className={s.privacy__text}>
            <span className={s.privacy___bold}>In Short:</span> You can review,
            modify or terminate your account at any point in time. If you are
            based in the EEA or UK and believe that we are processing your
            personal information unlawfully, you have the right to file a
            complaint with your local data protection supervisory authority. You
            can find their contact details at
            https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
            If you are based in Switzerland, you can find the contact details
            for the data protection authorities at
            https://www.edoeb.admin.ch/edoeb/en/home.html. If we are relying on
            your consent to process your personal information, you can withdraw
            your consent at any time by contacting us at
            office.softlion@gmail.com. However, this will not affect the
            lawfulness of the processing conducted before withdrawal or any
            processing based on lawful grounds other than consent. Most web
            browsers accept cookies by default, but you can choose to reject or
            remove them, which may affect certain features or services of our
            Services. To opt out of interest-based advertising, visit
            http://www.aboutads.info/choices/. If you have any questions or
            comments about your privacy rights, please email us at
            office.softlion@gmail.com.
          </p>
        </li>
        {/* =========== 9 ========== */}
        <li className={s.privacy__item___num}>
          <h2
            id="item9"
            className={s.privacy__title}
          >
            9. CONTROLS REGARDING “DO-NOT-TRACK FEATURES”
          </h2>
          <p className={s.privacy__text}>
            Websites and mobile apps sometimes include a feature called
            Do-Not-Track (DNT) that lets you indicate that you do not want your
            online browsing activity to be monitored or collected. However,
            there is no standard technology for recognizing and implementing DNT
            signals, so we currently do not respond to them. If a standard is
            established in the future that we must follow, we will let you know
            in an updated version of this privacy notice. If you have any
            questions or concerns, you can contact us at
            office.softlion@gmail.com.
          </p>
        </li>
        {/* =========== 10 ========== */}
        <li className={s.privacy__item___num}>
          <h2
            id="item10"
            className={s.privacy__title}
          >
            10. ARE UPDATES MADE TO THIS NOTICE?
          </h2>
          <p className={s.privacy__text}>
            <span className={s.privacy___bold}>In Short:</span> Yes, they are.
            We will make updates to this notice as needed to ensure our
            compliance with applicable laws. We reserve the right to update this
            privacy notice periodically, and the revised version will be
            effective upon its availability, which will be indicated by an
            updated "Revised" date. In case of any significant changes to this
            privacy notice, we may notify you either through a prominent posting
            of the changes or by sending a direct notification. We encourage you
            to review this privacy notice frequently to stay informed about how
            SoftLion is protecting your information.
          </p>
        </li>
        {/* =========== 11 ========== */}
        <li className={s.privacy__item___num}>
          <h2
            id="item11"
            className={s.privacy__title}
          >
            11. WHAT ARE THE WAYS TO CONTACT US REGARDING THIS NOTICE?
          </h2>
          <p className={s.privacy__text}>
            If you have some questions or comments about your privacy rights,
            you may email us at office.softlion@gmail.com or by post to:
          </p>

          <address className={s.privacy___no_italic}>
            <p>SoftLion LLC</p>
            <p>“our address…”</p>
            <p>Chernivtsi, Chernivetska 58000</p>
            <p>Ukraine</p>
          </address>
        </li>
      </ol>
    </section>
  );
};

export default PrivacyPolicySection;
