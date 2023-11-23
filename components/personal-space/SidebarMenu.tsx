import Link from "next/link";
import s from "./SidebarMenu.module.scss";

import СustomLoaderComponent from "@/app/personal-space/components/СustomLoaderComponent";
import { useOrderProjectData } from "@/hooks/useOrderProjectData";
import { statusProject } from "@/app/personal-space/components/useDynamicComponents";
import CustomVectorSVG from "@/app/personal-space/components/CustomVectorSVG";

const SidebarMenu: React.FC = () => {
  const { sidebarMenuData, isLoading } = useOrderProjectData();

  if (isLoading) {
    return <СustomLoaderComponent />;
  }

  const currentURL =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className={s.sideBar}>
      <div className={s.sideBar__header}>
        <Link
          href={`/personal-space`}
          className={`${s.sideBar__link} ${
            currentURL !== "/personal-space/settings" ? s.actHome : ""
          }`}
        >
          <h1 className={s.title}>Projects</h1>
        </Link>
      </div>
      <div className={s.block}>
        <ul className={s.block__list}>
          {sidebarMenuData?.map((project, index) => (
            <li
              className={s.block__listItem}
              key={project.id}
              data-custom-title={statusProject.status[project.projectStatus]}
            >
              <div
                className={`${s.vectorTile} ${
                  currentURL === `/personal-space/${project.title}` ||
                  (currentURL === "/personal-space" && index === 0)
                    ? s.vectorTileVisible
                    : s.vectorTileHidden
                }`}
              >
                <CustomVectorSVG projectStatus={project.projectStatus} />
              </div>
              <Link
                href={`/personal-space/${project.title}`}
                className={`${s.sideBar__link} ${
                  currentURL === `/personal-space/${project.title}` ||
                  (currentURL === "/personal-space" && index === 0)
                    ? ""
                    : s.active
                }`}
              >
                <h2 className={s.title}>{project.title}</h2>
              </Link>
            </li>
          ))}
        </ul>

        <div className={s.block__settings}>
          <Link
            href={`/personal-space/settings/`}
            className={`${s.sideBar__link} ${
              currentURL === "/personal-space/settings" ? s.actHome : ""
            }`}
          >
            <h1 className={s.title}>Settings</h1>
          </Link>
          <Link
            href={`/personal-space/#`}
            className={s.sideBar__link}
            // className={`${s.sideBar__link}
            // ${
            //   currentURL === "/personal-space/#" ? s.actHome : ""
            // }
            // `}
          >
            <h1 className={s.title}>Privat Information</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
