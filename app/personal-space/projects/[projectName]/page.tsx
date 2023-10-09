"use client";
import React from "react";
import Link from "next/link";
import s from "./page.module.scss";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import ProjectSection from "@/app/sections/user_project_page/ProjectSection";
import { strict } from "assert";

interface SidebarMenuParams {
  projectName: string;
}

const SidebarMenu = ({ params }: { params: SidebarMenuParams }) => {
  const projectName = decodeURIComponent(params.projectName);

  const links = [{ title: projectName, href: "/#" }];

  return (
    <>
      <div className={s.infoNavigat}>
        <InfoNavigationComponent links={links} />
      </div>
      <ProjectSection projectName={projectName} />
    </>
  );
};

export default SidebarMenu;
