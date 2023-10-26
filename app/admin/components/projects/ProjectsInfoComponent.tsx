import React, { useEffect, useState } from "react";
import s from "./ProjectsInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";
import { ProjectData } from "../../dashboard/projects/page";
import { useDateFormat } from "@/hooks/useDateFormat";
import { SortMenuOption } from "../SortMenuComponent";

interface Props {
  projects: ProjectData[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onCardClick: (ProjectData: ProjectData) => void;
  onEditButtonClick: () => void;
}


const ProjectsInfoComponent: React.FC<Props> = ({
  projects,
  searchTerm,
  setSearchTerm,
  onCardClick,
  onEditButtonClick,
 
}) => {
  const {formatDMY} = useDateFormat();
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>(projects.filter(project =>
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects])

  const sortOptions: SortMenuOption[] = [
    {
      name: "Дата",
      action: (): void => {
        setFilteredProjects([...filteredProjects]
          .sort((project1, project2) => new Date(project1.date).getTime() - new Date(project2.date).getTime()));
      },
    },
    {
      name: "Назва проекту",
      action: (): void => {
        setFilteredProjects(
          [...filteredProjects].sort((project1, project2) => {
            return project1.title.toLowerCase().localeCompare(project2.title.toLowerCase());
          })
        );
      },
    },
    {
      name: "Автор",
      action: (): void => {
        setFilteredProjects(
          [...filteredProjects].sort((project1, project2) => {
            return project1.author.toLowerCase().localeCompare(project2.author.toLowerCase());
          })
        );
      },
    },
    {
      name: "Статус",
      action: (): void => {
        setFilteredProjects(
          [...filteredProjects].sort((project1, project2) => {
            return project1.status.toLowerCase().localeCompare(project2.status.toLowerCase());
          })
        );
      },
    }
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSortChange = (): void => {
    setFilteredProjects([...filteredProjects].reverse());
  }



  return (
    <div className={s.user}>
      <div className={s.user__search}>
        <SearchInputComponent
          placeholderText="Для пошуку за заголовком"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          onEditButtonClick={onEditButtonClick}
          sortOptions={sortOptions}
          sortOrderChange={onSortChange}
        />
      </div>

      <ul className={s.user__list}>
        {filteredProjects.map((project, index) => (
          <li className={s.user__list__item} key={project.id} onClick={() => onCardClick(project)}>
            <div className={s.user__list__information}>
              <p>{index + 1}</p>
              <p>{project.title}</p>
              <p>{formatDMY(new Date(project.date))}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsInfoComponent;
