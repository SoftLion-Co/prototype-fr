"use client";
import ProjectMobileCardComponent from "@/components/projects/ProjectMobileCardComponent";
import s from "./OurProjectsSection.module.scss";
import ProjectHeadingComponent from "@/components/projects/ProjectHeadingComponent";
import classNames from "classnames";
import ProjectCardComponent from "@/components/projects/ProjectCardComponent";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const sampleData = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Java",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Java",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: React.js",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "React.js",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Angular",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Angular",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Vue.js",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Vue.js",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Node.js",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Node.js",
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: .NET",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: ".NET",
  },
  {
    id: 7,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Java2",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Java",
  },
  {
    id: 8,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: React.js2",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "React.js",
  },
  {
    id: 9,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Angular2",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Angular",
  },
  {
    id: 10,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Vue.js2",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Vue.js",
  },
  {
    id: 11,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Node.js2",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Node.js",
  },
  {
    id: 12,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: .NET2",
    year: "year: 2022",
    author: "author: SoftLion",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: ".NET",
  },
];

const filterTechnologiesOptions = [
  "Java",
  "React.js",
  "Angular",
  "Vue.js",
  "Node.js",
  ".NET",
];

const OurProjectsSection = () => {
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const toggleFilter = () => {
    setIsFilterOpened(!isFilterOpened);
    setSelectedTechnology(null);
  };

  const handleTechnologyClick = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <section className={classNames(s.container, s.projects)}>
      <ProjectHeadingComponent centered={true} />

      <div className={s.filter}>
        <button onClick={toggleFilter} className={s.filter__main_button}>
          Filter{" "}
          <FiChevronDown
            className={classNames(s.filter__icon, {
              [s.opened]: isFilterOpened,
            })}
          />
        </button>
      </div>
      {isFilterOpened && (
        <div className={s.filter__opened}>
          <div className={s.filter__technology}>
            {filterTechnologiesOptions.map((technology, index) => (
              <button key={index} onClick={() => handleTechnologyClick(technology)}>{technology}</button>
            ))}
          </div>
          <div className={s.filter__country}></div>
        </div>
      )}

      <div className={s.projects__cards_mobile}>
        {sampleData
          .filter(
            (project) =>
              !selectedTechnology || project.technology === selectedTechnology
          ) // Фільтруємо проекти
          .map((project) => (
            <ProjectMobileCardComponent key={project.id} data={project} />
          ))}
      </div>
      <div className={s.projects__cards_desktop}>
        {sampleData
          .filter(
            (project) =>
              !selectedTechnology || project.technology === selectedTechnology
          ) // Фільтруємо проекти
          .map((project) => (
            <ProjectCardComponent key={project.id} data={project} />
          ))}
      </div>
    </section>
  );
};

export default OurProjectsSection;
