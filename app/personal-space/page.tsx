"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { useOrderProjectData } from "@/hooks/useOrderProjectData";

import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import SidebarMenu from "@/components/personal-space/SidebarMenu";
import СustomLoaderComponent from "./components/СustomLoaderComponent";

import s from "./page.module.scss";

const PersonalSpace: React.FC = () => {
  const { orderProjecData, isLoading, error } = useOrderProjectData();
  const links = [{ title: "Personal-space", href: "#" }];
  const projectName = orderProjecData?.[0]?.title;
  useEffect(() => {
    if (projectName !== undefined && projectName !== null) {
      redirect(`/personal-space/${projectName}`);
    }
  }, [projectName]);

  if (isLoading) {
    return <СustomLoaderComponent />;
  }

  if (error) {
    return (
      <div
        style={{
          width: "100%",
          height: 400,
          display: "flex",
          fontSize: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Error loading data
      </div>
    );
  }
  return (
    <div className={s.wrapper}>
      <div className={s.infoNavigat}>
        <InfoNavigationComponent links={links} />
      </div>
      <div className={s.section}>
        <div className={s.section__sidebar}>
          <SidebarMenu />
        </div>
        <div className={s.section__header}>
          <h1>Sorry, but you don't have any orders for the project :=( </h1>
        </div>
      </div>
    </div>
  );
};

export default PersonalSpace;
