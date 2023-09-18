import Link from "next/link";
import s from "./page.module.scss";
import React, { ReactNode } from "react";
 import SidebarMenu from "@/components/personal-space/SidebarMenu";

const PersonalLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <div>
        <SidebarMenu />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PersonalLayout;
