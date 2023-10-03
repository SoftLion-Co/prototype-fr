import { FC, useState } from "react";
import s from "./ProjectCard.module.scss";
import { Button } from "../../buttons/Button";
import { ProjectData } from "../../dashboard/projects/page";

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={s.project__card}>
      <h2 className={s.project__title}>{project.title}</h2>
      <p className={s.project__descripcion}>{project.description}</p>

      <div className={s.buttons_container}>
        <Button fnc={() => {}} text="Редагувати" />
        <Button fnc={() => {}} text="Видалити" theme="delete" />
      </div>
    </div>
  );
};
