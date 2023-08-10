import s from "./PrivacyPolicySection.module.scss";
import classNames from "classnames";

const PrivacyPolicySection = () => {
  return (
    <section className={classNames(s.container, s.privacy)}>
      <h1 className={s.privacy__title}>SUMMARY OF THE KEY POINTS</h1>
      <p className={s.privacy__text}>
        <span className={s.privacy___bold}>In Short:</span> This summary
        highlights important points from our privacy notice, which applies to
        SoftLion. For more detailed information on any of these topics, please
        click the corresponding link or use our table of contents to find the
        relevant section.
      </p>
      <ul className={s.privacy__list}>
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
      <ul className={s.privacy__list}>
        <li className={s.privacy__item}>
          WHAT TYPE OF INFORMATION IS COLLECTED BY SOFTLION?
        </li>
        <li className={s.privacy__item}>
          WHAT IS THE METHOD OF PROCESSING YOUR INFORMATION?
        </li>
        <li className={s.privacy__item}>
          WHEN AND TO WITH IS YOUR PERSONAL INFORMATION SHARED?
        </li>
        <li className={s.privacy__item}>
          IS THE USAGE OF COOKIES AND OTHER TRACKING TECHNOLOGIES IMPLEMENTED?
        </li>
        <li className={s.privacy__item}>
          WHAT IS THE DURATION OF INFORMATION RETENTION?
        </li>
        <li className={s.privacy__item}>
          HAT ARE THE MEASURES TAKEN TO ENSURE THE SAFETY OF YOUR INFORMATION?
        </li>
        <li className={s.privacy__item}>
          IS INFORMATION COLLECTED FROM MINORS?
        </li>
        <li className={s.privacy__item}>
          WHAT ARE YOUR RIGHTS REGARDING PRIVACY?
        </li>
        <li className={s.privacy__item}>
          CONTROLS REGARDING “DO-NOT-TRACK FEATURES”
        </li>
      </ul>

      <ol className={s.privacy__list}>
        <li className={s.privacy__item___num}>
          <h2 className={s.privacy__title}>
            WHAT TYPE OF INFORMATION IS COLLECTED BY SOFTLION?
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
          <ul className={s.privacy__list}>
            <li className={s.privacy__item}>names</li>
            <li className={s.privacy__item}>email addresses</li>
            <li className={s.privacy__item}>contact or authentication data</li>
          </ul>
          <p className={s.privacy__text}>
            SoftLion does not process sensitive information, and users must
            ensure that all personal information provided is true, complete, and
            accurate and notify SoftLion of any changes.
          </p>
        </li>
        <li className={s.privacy__item___num}>
          <h2 className={s.privacy__title}>
            WHAT IS THE METHOD OF PROCESSING YOUR INFORMATION?
          </h2>
        </li>
        <li className={s.privacy__item___num}>
          <h2 className={s.privacy__title}>
            {" "}
            WHEN AND TO WITH IS YOUR PERSONAL INFORMATION SHARED?
          </h2>
        </li>
        <li className={s.privacy__item___num}>
          <h2 className={s.privacy__title}>
            IS THE USAGE OF COOKIES AND OTHER TRACKING TECHNOLOGIES IMPLEMENTED?
          </h2>
        </li>
        <li className={s.privacy__item___num}>
          <h2 className={s.privacy__title}>
            WHAT IS THE DURATION OF INFORMATION RETENTION?
          </h2>
        </li>
        <li className={s.privacy__item___num}>
          <h2 className={s.privacy__title}>
            HAT ARE THE MEASURES TAKEN TO ENSURE THE SAFETY OF YOUR INFORMATION?
          </h2>
        </li>
        <li className={s.privacy__item___num}>
          <h2 className={s.privacy__title}>
            IS INFORMATION COLLECTED FROM MINORS?
          </h2>
        </li>
        <li className={s.privacy__item___num}>
          <h2 className={s.privacy__title}>
            WHAT ARE YOUR RIGHTS REGARDING PRIVACY?
          </h2>
        </li>
        <li className={s.privacy__item___num}>
          <h2 className={s.privacy__title}>
            CONTROLS REGARDING “DO-NOT-TRACK FEATURES”
          </h2>
        </li>
      </ol>
    </section>
  );
};

export default PrivacyPolicySection;
