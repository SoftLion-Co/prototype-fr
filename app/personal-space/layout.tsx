import s from "./page.module.scss";
import React, { ReactNode } from "react";
import classNames from "classnames";
import SidebarMenu from "@/components/personal-space/SidebarMenu";

const PersonalLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={classNames(s.personalSpace_page, s.container)}>
      <>{children}</>
    </div>
  );
};

export default PersonalLayout;
