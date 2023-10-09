"use client";
import s from "./ProjectSection.module.scss";

interface ProjectSectionProps {
  projectName: string;
}

const ProjectSection = ({ projectName }: ProjectSectionProps) => {
  const response = {
    graph1: {
      design: "50",
      development: "60",
    },
  };

  return (
    <>
      <h1 className={s.project__title}>{projectName}</h1>
      <div>sfdsf</div>
      <section className={s.project}></section>
    </>
  );
};

export default ProjectSection;
