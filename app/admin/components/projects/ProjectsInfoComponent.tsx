import React from "react";
import s from "./ProjectsInfoComponent.module.scss";
import SearchInputComponent from "@/app/admin/components/SearchInputComponent";
import { ProjectData } from "../../dashboard/projects/page";

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
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = projects.filter(project =>
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={s.user}>
      <div className={s.user__search}>
        <SearchInputComponent
          placeholderText="Для пошуку за заголовком"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          onEditButtonClick={onEditButtonClick}
        />
      </div>

      <ul className={s.user__list}>
        {filteredUsers.map(user => (
          <li className={s.user__list__item} key={user.number} onClick={() => onCardClick(user)}>
            <div className={s.user__list__information}>
              <p>{user.number}</p>
              <p>{user.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsInfoComponent;
