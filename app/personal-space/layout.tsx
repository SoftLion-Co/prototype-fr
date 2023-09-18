import Link from "next/link";
import s from "./page.module.scss";
import React, { ReactNode } from "react";

const PersonalLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/personal-space/personal">Personal</Link>
        <Link href="/personal-space/settings">Settings</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PersonalLayout;
