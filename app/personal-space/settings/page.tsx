"use client";
import SettingsSection from "@/app/sections/settings_page/SettingsSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import SidebarMenu from "@/components/personal-space/SidebarMenu";
import MainHeaderComponents from "@/app/personal-space/components/MainHeaderComponents";
import s from "./page.module.scss";

const PersonalS = () => {
  const links = [
    { title: "Personal-space", href: "/personal-space" },
    { title: "Settings", href: "/#" },
  ];

  return (
    <>
      <div className={s.infoNavigat}>
        <InfoNavigationComponent links={links} />
      </div>
      <div className={s.settings}>
        <SidebarMenu />
        <div className={s.settings__container}>
          <MainHeaderComponents />
          <SettingsSection />
        </div>
      </div>
    </>
  );
};

export default PersonalS;
