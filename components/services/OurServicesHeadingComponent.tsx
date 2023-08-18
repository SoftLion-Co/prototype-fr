import s from "./OurServicesHeadingComponent.module.scss"
import HeadingComponent from "./../HeadingComponent"

const OurServicesHeadingComponent = () => {
    return (
        <div className={s.heading}>
            <HeadingComponent text="Our Services"/>
            <p className={s.heading__text}>Our services encompass the entire development cycle, starting from requirements analysis and interface design to programming, testing, and deployment. We work with various technologies and platforms such as HTML/CSS, JavaScript, PHP, Python, iOS, Android, and many others to ensure the development of websites and apps that meet all the needs and requirements of our clients.</p>
        </div>
    )
}

export default OurServicesHeadingComponent

