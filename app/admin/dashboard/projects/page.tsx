"use client";

import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import ProjectsInfoComponent from "../../components/projects/ProjectsInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";
import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";
import { AdminLayout } from "../AdminLayout";
import MainPageHeading from "../../components/MainPageHeading";
import { ProjectCard } from "../../components/projects/ProjectCard";
import { useRouter } from "next/navigation";
import projectsService from '../../../../services/project-service';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  status: string;
}

const projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);
  const [openProject, setOpenProject] = useState<ProjectData | null>(null);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const router = useRouter()

  useEffect(() => {
    (async () => {
      try {
        const projectsReponse = await projectsService.getAllProjects();

        setProjects(projectsReponse.result);
      } catch (e) {
        console.error(`Error restrieving projects: ${e}`);
      }
    })();
  }, []);

  const handleEditButtonClick = () => {
    router.push('/admin/dashboard/newProject')
  };

  useEffect(() => {
    const count = projects.filter((project) => project.description.toLowerCase().includes(searchTerm.toLowerCase())).length;
    setSearchResultCount(count);
  }, [searchTerm, projects]);

  return (
    <AdminLayout>
      <div className={s.contact}>
        <ProjectsInfoComponent
          projects={projects}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onCardClick={(project) => {
            setOpenProject(project);
          }}
          onEditButtonClick={handleEditButtonClick}
        />

        <ItemCountDisplayComponent
          text="Кількість проектів"
          number={projects.length}
          icon={IconType.People}
          searchResultCount={searchResultCount}
        />
      </div>

      <div className={s.content_editor}>
        <MainPageHeading initialText="Проекти" />
        {openProject && <ProjectCard project={openProject} onDelete={() => setOpenProject(null)} />}
      </div>

    </AdminLayout>
  );
};

export default projects;
