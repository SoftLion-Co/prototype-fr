import s from "./MainButtonComponent.module.scss"

const MainButtonComponent = (text:string, color:string) => {
    return (
        <div>
            <button className={s.button}>{text}</button>
        </div>
    )
}

export default MainButtonComponent
