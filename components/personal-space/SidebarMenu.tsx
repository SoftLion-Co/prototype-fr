import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./SidebarMenu.module.scss";

import СustomLoaderComponent from "@/app/personal-space/components/СustomLoaderComponent";
import { useOrderProjectStatus } from "@/hooks/useOrderProjectStatus";
import InProgress from "@/images/personale-space/Vector-inProgress.svg";
import Completed from "@/images/personale-space/Vector-completed.svg";
import OnHold from "@/images/personale-space/Vector-onHold.svg";
import Canceled from "@/images/personale-space/Vector-canceled.svg";

const SidebarMenu: React.FC = () => {
  const { sidebarMenuData, isLoading } = useOrderProjectStatus();

  if (isLoading) {
    return <СustomLoaderComponent />;
  }

  const securityImages: any = {
    img: {
      InProgress: InProgress,
      Completed: Completed,
      OnHold: OnHold,
      Canceled: Canceled,
    },
    status: ["InProgress", "Completed", "OnHold", "Canceled"],
  };
  console.log(sidebarMenuData);

  const currentURL =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className={s.sideBar}>
      <div className={s.block}>
        <h1
          className={`${s.block__title} ${
            currentURL !== "/personal-space/settings" ? s.actHome : ""
          }`}
        >
          Projects
        </h1>
        {/* <h1 className={s.block__title}>Projects</h1> */}
        <div className={s.block__scroll}>
          <ul className={s.block__list}>
            {sidebarMenuData?.map((project, index) => (
              <li className={s.block__listItem} key={project.id}>
                <Image
                  src={
                    securityImages.img[
                      securityImages.status[project.projectStatus]
                    ]
                  }
                  alt={securityImages.status[project.projectStatus]}
                  style={{
                    position: "absolute",
                    left: "-40px",
                    display:
                      currentURL === `/personal-space/${project.title}` ||
                      (currentURL === "/personal-space" && index === 0)
                        ? "block"
                        : "none",
                  }}
                />
                <Link
                  href={`/personal-space/${project.title}`}
                  // className={s.block__link}
                  className={`${s.block__link} ${
                    currentURL === `/personal-space/${project.title}` ||
                    (currentURL === "/personal-space" && index === 0)
                      ? ""
                      : s.active
                  }`}
                >
                  <h2 className={s.block__linkText}>{project.title}</h2>
                </Link>
              </li>
            ))}
          </ul>

          <div className={s.block}>
            <Link
              href={`/personal-space/settings/`}
              // className={s.block__link}
              className={`${s.block__link} ${
                currentURL === "/personal-space/settings" ? s.actHome : ""
              }`}
            >
              <h1 className={s.block__title}>Settings</h1>
            </Link>
            <Link
              href={`/personal-space/#`}
              className={s.block__link}
              // className={`${s.block__link}
              // ${
              //   currentURL === "/personal-space/#" ? s.actHome : ""
              // }
              // `}
            >
              <h1 className={s.block__title}>Privat Information</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
