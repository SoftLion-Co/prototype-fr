import { FC, useState } from "react";
import s from "./ProjectCard.module.scss";
import { Button } from "../Button";
import { ProjectData } from "../../dashboard/projects/page";
import projectService from "@/services/project-service";

interface ProjectCardProps {
  project: ProjectData;
  onDelete: () => void;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, onDelete }) => {
  const deleteProject = () => {
    // projectService.deleteProject(project.id);
    onDelete();
  }
  return (
    <div className={s.project__card}>
      <h2 className={s.project__title}>{project.title}</h2>
      <p className={s.project__descripcion}>{project.description}</p>

      <div className={s.buttons_container}>
        <Button text="Редагувати" />
        <Button onClick={deleteProject} text="Видалити" theme="delete" />
      </div>
    </div>
  );
};
