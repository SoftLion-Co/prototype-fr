"use client";
import SettingsSection from "@/app/sections/settings_page/SettingsSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import SidebarMenu from "@/components/personal-space/SidebarMenu";
import MainHeaderComponents from "@/app/personal-space/components/MainHeaderComponents";
import s from "./page.module.scss";

const PersonalS = () => {
  const links = [
    { title: "Personal-space", href: "/personal-space" },
    { title: "Settings", href: "#" },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.infoNavigat}>
        <InfoNavigationComponent links={links} />
      </div>
      <div className={s.section}>
        <MainHeaderComponents />
        <div className={s.section__settings}>
          <div className={s.section__sidebar}>
            <SidebarMenu />
          </div>
          <SettingsSection />
        </div>
      </div>
    </div>
  );
};

export default PersonalS;
