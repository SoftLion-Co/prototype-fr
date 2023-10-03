"use client";

import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import ProjectsInfoComponent from "../../components/projects/ProjectsInfoComponent";
import ItemCountDisplayComponent from "@/app/admin/components/ItemCountDisplayComponent";
import { IconType } from "@/app/admin/components/ItemCountDisplayComponent";
import { AdminLayout } from "../AdminLayout";
import MainPageHeading from "../../components/MainPageHeading";
import { ProjectCard } from "../../components/projects/ProjectCard";

export interface ProjectData {
  number: number;
  title: string;
  description: string;
}

const projects = () => {
  const projects: ProjectData[] = [
    {
      number: 1,
      title: "Lorem",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 2,
      title: "Lorem 2",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 3,
      title: "Lorem 3",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 4,
      title: "Lorem 4",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 5,
      title: "Lorem 5",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 6,
      title: "Lorem 6",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 7,
      title: "Lorem 7",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 8,
      title: "Lorem 8",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 9,
      title: "Lorem 9",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 10,
      title: "Lorem 10",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 11,
      title: "Lorem 11",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [isContentEditorVisible, setIsContentEditorVisible] = useState(false);
  const [openProject, setOpenProject] = useState<ProjectData | null>(null);

  const handleEditButtonClick = () => {
    setIsContentEditorVisible(!isContentEditorVisible);
  };

  // useEffect(() => {
  //   const count = projects.filter((project) => project.email.toLowerCase().includes(searchTerm.toLowerCase())).length;
  //   setSearchResultCount(count);
  // }, [searchTerm, projects]);

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
        {openProject && <ProjectCard project={openProject} />}
      </div>
    
    </AdminLayout>
  );
};

export default projects;
