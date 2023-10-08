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
  date: string;
  author: string;
  status: string;
}

const projects = () => {
  const projects: ProjectData[] = [
    {
      number: 1,
      title: "Lorem",
      date: "Sun Oct 15 2023 12:09:50 GMT+0300",
      author: 'Penny',
      status: 'Pending',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 3,
      title: "Lorem 3",
      date: "Fri Oct 13 2023 12:09:50 GMT+0300",
      author: 'Danny',
      status: 'Published',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 2,
      title: "Lorem 2",
      date: "Sat Oct 14 2023 12:09:50 GMT+0300",
      author: 'Rob',
      status: 'Closed',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 4,
      title: "Lorem 4",
      date: "Thu Oct 12 2023 12:09:50 GMT+0300",
      author: 'Tom',
      status: 'On Hold',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 9,
      title: "Lorem 9",
      date: "Sat Oct 7 2023 12:09:50 GMT+0300",
      author: 'Tokio',
      status: 'On Hold',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 6,
      title: "Lorem 6",
      date: "Tus Oct 10 2023 12:09:50 GMT+0300",
      author: 'John',
      status: 'Closed',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 7,
      title: "Lorem 7",
      date: "Mon Oct 9 2023 12:09:50 GMT+0300",
      author: 'Marry',
      status: 'Pending',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 5,
      title: "Lorem 5",
      date: "Wed Oct 11 2023 12:09:50 GMT+0300",
      author: 'Janny',
      status: 'Published',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 8,
      title: "Lorem 8",
      date: "Sun Oct 8 2023 12:09:50 GMT+0300",
      author: 'Merilyn',
      status: 'Published',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 10,
      title: "Lorem 10",
      date: "Fri Oct 6 2023 12:09:50 GMT+0300",
      author: 'Stelma',
      status: 'Published',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Atque, veniam nisi! Itaque animi consequatur magni aliasquaerat eveniet maxime, explicabo commodi ipsam tenetur,reprehenderit dolorum nostrum, odio pariatur sed. Ex nihilcum illum veniam.",
    },
    {
      number: 11,
      title: "Lorem 11",
      date: "Thu Oct 5 2023 12:09:50 GMT+0300",
      author: 'Welma',
      status: 'Pending',
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
        {openProject && <ProjectCard project={openProject} />}
      </div>
    
    </AdminLayout>
  );
};

export default projects;
