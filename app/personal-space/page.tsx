"use client";
import React from "react";
import s from "./page.module.scss";

import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import ProjectSection from "@/app/sections/user_project_page/ProjectSection";
import СustomLoaderComponent from "./components/СustomLoaderComponent";
import SidebarMenu from "@/components/personal-space/SidebarMenu";
import { useOrderProjectStatus } from "@/hooks/useOrderProjectStatus";

const PersonalSpace: React.FC = () => {
  const { orderProjecData, isLoading, error } = useOrderProjectStatus();

  if (isLoading) {
    return <СustomLoaderComponent />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const projectName = orderProjecData?.[0]?.title;
  const links = [{ title: projectName, href: "#" }];

  console.log(orderProjecData);

  return (
    <div className={s.personale__space}>
      <div className={s.infoNavigat}>
        <InfoNavigationComponent links={links} />
      </div>
      <div className={s.project}>
        <SidebarMenu />
        <div className={s.project__container}>
          <ProjectSection projectName={projectName} />
        </div>
      </div>
    </div>
  );
};

export default PersonalSpace;
