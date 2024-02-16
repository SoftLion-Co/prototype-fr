import Link from "next/link";
import s from "./SidebarMenu.module.scss";

import СustomLoaderComponent from "@/app/personal-space/components/СustomLoaderComponent";
import { useOrderProjectData } from "@/hooks/useOrderProjectData";
import { statusProject } from "@/app/personal-space/components/useDynamicComponents";
import CustomVectorSVG from "@/app/personal-space/components/CustomVectorSVG";
import classNames from "classnames";
interface props {
  className?: string;
}
const SidebarMenu: React.FC<props> = ({ className }) => {
  const { sidebarMenuData, isLoading } = useOrderProjectData();

  if (isLoading) {
    return <СustomLoaderComponent />;
  }

  const currentURL =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className={classNames(s.sideBar, className)}>
      <div className={s.sideBar__header}>
        <Link
          href={`/personal-space`}
          className={`${s.sideBar__link} ${
            currentURL !== "/personal-space/settings" &&
            currentURL !== "/personal-space/#"
              ? s.actHome
              : ""
          }`}
        >
          <h1 className={s.title}>Projects</h1>
        </Link>
      </div>
      <div className={s.block}>
        <ul className={s.block__list}>
          {sidebarMenuData?.map((project, index) => (
            <div className={s.block__inner} key={project.title}>
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
              <li
                className={s.block__listItem}
                key={project.id}
                data-custom-title={statusProject.status[project.projectStatus]}
              >
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
            </div>
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
            className={`${s.sideBar__link}
            ${currentURL === "/personal-space/#" ? s.actHome : ""}
            `}
          >
            <h1 className={s.title}>Private information</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
