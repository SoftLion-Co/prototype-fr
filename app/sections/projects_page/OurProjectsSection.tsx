import ProjectMobileCardComponent from "@/components/projects/ProjectMobileCardComponent";
import s from "./OurProjectsSection.module.scss"
import ProjectHeadingComponent from "@/components/projects/ProjectHeadingComponent";
import classNames from "classnames";
import ProjectCardComponent from "@/components/projects/ProjectCardComponent";

const sampleData = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
      title: "Landing page of traveling company",
      customer: "customer: Move",
      year: "year: 2022",
      author: "author: SoftLion",
      description:
        "In this project, we developed the design, implemented it, and provide further support",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
      title: "Landing page of traveling company",
      customer: "customer: Move",
      year: "year: 2022",
      author: "author: SoftLion",
      description:
        "In this project, we developed the design, implemented it, and provide further support",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
      title: "Landing page of traveling company",
      customer: "customer: Move",
      year: "year: 2022",
      author: "author: SoftLion",
      description:
        "In this project, we developed the design, implemented it, and provide further support",
    },
  ];

const OurProjectsSection = () => {
    return (
        <div className={classNames(s.container, s.projects)}>
      <ProjectHeadingComponent centered={true} />
      <div className={s.projects__cards_mobile}>
        {sampleData.map((project) => (
          <ProjectMobileCardComponent key={project.id} data={project} />
        ))}
      </div>
      <div className={s.projects__cards_desktop}>
        {sampleData.map((project) => (
          <ProjectCardComponent key={project.id} data={project} />
        ))}
      </div>
    </div>
    )
}

export default OurProjectsSection