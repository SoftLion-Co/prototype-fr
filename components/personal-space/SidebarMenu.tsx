import React from "react";
import Link from "next/link";
import s from "./SidebarMenu.module.scss";

const SidebarMenu = () => {
  const response = [
    { name: "Project1", id: 1 },
    { name: "Project2", id: 2 },
    { name: "Project3", id: 3 },
  ];

  return (
    <div className={s.settings}>
      <div>
        <h1>Project</h1>
        <ul>
          {response.map((project) => (
            <li key={project.id}>
              <Link href={`/personal-space/projects/${project.name}`}>
                <h2>{project.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Settings</h1>
        <h1>Private Information</h1>
      </div>
    </div>
  );
};

export default SidebarMenu;
