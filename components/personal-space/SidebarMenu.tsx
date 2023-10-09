import React from "react";
import Link from "next/link";
import s from "./SidebarMenu.module.scss";

const SidebarMenu = () => {
  const response = [
    { name: "Company Move", id: 1 },
    { name: "Project Name FRANCHISE", id: 2 },
    { name: "Project Name Alaska", id: 3 },
    { name: "Project Name Simphone", id: 4 },
    { name: "Project Name Shops", id: 5 },
    { name: "Project Name Donuts", id: 6 },
    { name: "Project Name Bank", id: 7 },
    { name: "Project Name Tour", id: 8 },
    { name: "Project Name FREELANCE", id: 9 },
    { name: "Project Name FUTURE", id: 10 },
    { name: "Project Name FORECAST", id: 11 },
    { name: "Project Name COTTAGE", id: 12 },
  ];

  return (
    <div className={s.sideBar}>
      <div className={s.block}>
        <h1 className={s.block__title}>Projects</h1>
        <ul className={s.block__list}>
          {response.map((project) => (
            <li className={s.block__listItem} key={project.id}>
              <Link
                href={`/personal-space/projects/${project.name}`}
                className={s.block__link}
              >
                <h2 className={s.block__linkText}>{project.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.block}>
        <Link href={`/personal-space/settings/`} className={s.block__link}>
          <h1 className={s.block__title}>Settings</h1>
        </Link>
        <Link href={`/personal-space/#`} className={s.block__link}>
          <h1 className={s.block__title}>Privat Information</h1>
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenu;
