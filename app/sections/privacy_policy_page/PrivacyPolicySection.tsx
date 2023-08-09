import s from "./PrivacyPolicySection.module.scss"
import classNames from "classnames";

const PrivacyPolicySection = () => {
    return (
        <section className={classNames(s.container, s.privacy)}>
            <h1 className={s.privacy__title}>SUMMARY OF THE KEY POINTS</h1>
            <p className={s.privacy__text}><span className={s.privacy__bold}>In Short:</span> This summary highlights important points from our privacy notice, which applies to SoftLion. For more detailed information on any of these topics, please click the corresponding link or use our table of contents to find the relevant section.
</p>

           
        </section>
    )
}

export default PrivacyPolicySection