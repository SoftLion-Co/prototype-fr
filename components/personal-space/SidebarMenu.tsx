import React from "react";
import Link from "next/link";
import s from "./SidebarMenu.module.scss";
import useProjectData from "@/hooks/useProjectData";

const SidebarMenu = () => {
  const response = useProjectData();

  return (
    <div className={s.sideBar}>
      <div className={s.block}>
        <h1 className={s.block__title}>Projects</h1>
        <div className={s.block__scroll}>
          <ul className={s.block__list}>
            {response.map((project) => (
              <li className={s.block__listItem} key={project.id}>
                <Link
                  href={`/personal-space/${project.name}`}
                  className={s.block__link}
                >
                  <h2 className={s.block__linkText}>{project.name}</h2>
                </Link>
              </li>
            ))}
          </ul>

          <div className={s.block}>
            <Link href={`/personal-space/settings/`} className={s.block__link}>
              <h1 className={s.block__title}>Settings</h1>
            </Link>
            <Link href={`/personal-space/#`} className={s.block__link}>
              <h1 className={s.block__title}>Privat Information</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
