"use client";

import { useEffect } from "react";
import PanelNavigationComponent from "../components/PanelNavigationComponent";
import s from "./AdminLayout.module.scss";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const footer = document?.getElementById("footer");
    const layout = document?.getElementById("layout");

    if (footer) {
      footer.style.display = "none";
    }

    if (layout) {
      layout.style.marginTop = "85px";
    }

    return () => {
      if (footer) {
        footer.style.display = "block";
      }

      if (layout) {
        layout.style.marginTop = "150px";
      }
    };
  }, []);

  return (
    <div className={s.container_admin} id="adminLayout">
      <div className={s.layout}>
        <PanelNavigationComponent />
        {children}
      </div>
    </div>
  );
};
