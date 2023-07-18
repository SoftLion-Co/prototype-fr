import s from "./OurProjectsSection.module.scss"
import ProjectHeadingComponent from "./../../../components/projects/ProjectHeadingComponent"
import ProjectCardComponent from "./../../../components/projects/ProjectCardComponent"

const OurProjectsSection = () => {
    return (
        <div>
            <ProjectHeadingComponent />
            <ProjectCardComponent />
        </div>
    )
}

export default OurProjectsSection