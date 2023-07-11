import s from "./CookiesComponent.module.scss"
import MainButtonComponent from "./MainButtonComponent"

const CookiesComponent = () => {
    return (
        <div className={s.cookies}>
            <p className={s.cookies_text}>We use cookies in this website to give you the best experience on our site and show you relevant ads. To find out more, read our privacy policy rules.</p>
            <MainButtonComponent loading={false} color='blue'>ACCEPT</MainButtonComponent>
        </div>
    )
}

export default CookiesComponent
