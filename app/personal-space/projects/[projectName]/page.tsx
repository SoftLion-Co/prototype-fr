import React from "react";
import Link from "next/link";
import s from "./page.module.scss";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import ProjectSection from "@/app/sections/user_project_page/ProjectSection";

interface SidebarMenuParams {
  projectName: string;
}

const SidebarMenu = ({ params }: { params: SidebarMenuParams }) => {
  const projectName = params.projectName;

  const links = [{ title: projectName, href: "/#" }];

  return (
    <div>
      <div>{projectName}</div>
      <InfoNavigationComponent links={links} />
      <ProjectSection />
    </div>
  );
};

export default SidebarMenu;
