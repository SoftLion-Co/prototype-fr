"use client";
import s from "./page.module.scss";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import ProjectSection from "@/app/sections/user_project_page/ProjectSection";
import SidebarMenu from "@/components/personal-space/SidebarMenu";
import useProjectData from "@/hooks/useProjectData";

const PersonalSpace = () => {
  const response = useProjectData();
  const projectName = decodeURIComponent(response[0].name);
  const links = [{ title: response[0].name, href: "/#" }];

  return (
    <>
      <div className={s.infoNavigat}>
        <InfoNavigationComponent links={links} />
      </div>
      <div className={s.project}>
        <SidebarMenu />
        <div className={s.project__container}>
          <ProjectSection projectName={projectName} />
        </div>
      </div>
    </>
  );
};
export default PersonalSpace;
