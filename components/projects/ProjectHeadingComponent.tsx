import s from "./ProjectHeadingComponent.module.scss"
import HeadingComponent from "./../HeadingComponent"

const ProjectHeadingComponent = () => {
    return (
        <div className={s.heading}>
            <HeadingComponent className={s.heading__title} text="Our Projects"/>
            <p className={s.heading__text}>Our team encourages all your ideas and works as hard as possible to improve your service. For inspiration, you can view our previous projects.</p>
        </div>
    )
}

export default ProjectHeadingComponent

