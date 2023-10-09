"use client";
import ProjectMobileCardComponent from "@/components/projects/ProjectMobileCardComponent";
import s from "./OurProjectsSection.module.scss";
import ProjectHeadingComponent from "@/components/projects/ProjectHeadingComponent";
import classNames from "classnames";
import ProjectCardComponent from "@/components/projects/ProjectCardComponent";
import { FiChevronDown } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";
import MainButtonComponent from "@/components/MainButtonComponent";
import DotImg from "@/images/project/request-list.svg";
import Image from "next/image";
import CountryFlag from "react-country-flag";
import { Pagination } from "@mantine/core";

const sampleData: Array<{
  id: number;
  image: string;
  title: string;
  customer: string;
  year: string;
  author: string;
  description: string;
  technology: string;
  country: string;
  countryCode: string;
}> = [
  {
    id: 1,
    image:
      "https://github.com/SoftLion-Co/prototype-fr/blob/test/images/project/project-trend/trend-hero.png?raw=true",
    title: "Trend company",
    customer: "customer: Trend",
    year: "year: 2023",
    author: "author: Germany",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Go",
    country: "Germany",
    countryCode: "DE",
  },
  {
    id: 1,
    image:
      "https://github.com/SoftLion-Co/prototype-fr/blob/test/images/project/project-trend/trend-hero.png?raw=true",
    title: "Trend company",
    customer: "customer: Trend",
    year: "year: 2023",
    author: "author: Germany",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Go",
    country: "Ukraine",
    countryCode: "UA",
  },
];

//* METHOD TO GET UNIFIED VALUES FROM sampleData AND MAKE UNIQUE ARRAYS
const getUniqueFieldValues = (
  data: any,
  field: any,
  defaultValues: string[] = []
) => {
  const uniqueValues = data.reduce((accumulator: any, project: any) => {
    if (!accumulator.includes(project[field])) {
      accumulator.push(project[field]);
    }
    return accumulator;
  }, []);

  // Додавання дефолтних значень
  return [...defaultValues, ...uniqueValues];
};

//* DEFAULT TECHNOLOGIES AND COUNTRIES FOR FILTER
const defaultTechnologies = ["Java", "React.js", "Angular", "Vue.js"];

const filterTechnologiesOptions = getUniqueFieldValues(
  sampleData,
  "technology",
  defaultTechnologies
);


const filterCountriesOptions = getUniqueFieldValues(sampleData, "country");
console.log(filterCountriesOptions);

const OurProjectsSection = () => {
  //* FILTER STATE
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  //* PAGINATION LOGIC
  const [paginationSize, setPaginationSize] = useState("xs");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  //* LOGIC FOR ADAPTIVE PAGINATION
  const filteredProjects = sampleData.filter(
    (project) =>
      (selectedTechnologies.length === 0 ||
        selectedTechnologies.includes(project.technology)) &&
      (selectedCountries.length === 0 ||
        selectedCountries.includes(project.country))
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  //* LOGIC FOR FILTER TOGGLING
  const toggleFilter = () => {
    setIsFilterOpened(!isFilterOpened);
  };

  //* FILTRATION LOGIC
  const handleFilterClick = (
    item: any,
    selectedItemArray: any,
    setSelectedItemArray: any
  ) => {
    if (selectedItemArray.includes(item)) {
      setSelectedItemArray(selectedItemArray.filter((t: any) => t !== item));
    } else {
      setSelectedItemArray([...selectedItemArray, item]);
    }
    setCurrentPage(1);
  };

  const handleTechnologyClick = (technology: string) => {
    handleFilterClick(
      technology,
      selectedTechnologies,
      setSelectedTechnologies
    );
  };

  const handleCountryClick = (country: string) => {
    handleFilterClick(country, selectedCountries, setSelectedCountries);
  };

  const handleFilterClear = () => {
    setSelectedTechnologies([]);
    setSelectedCountries([]);
  };

  //* PAGINATION SCROLL LOGIC (SCROLL TO FILTER SECTION +60PX FREE SPACE FOR HEADER)
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (topRef.current && window.scrollY > 0) {
      const elementPosition = topRef.current.getBoundingClientRect();
      const offset = 110;

      const targetScrollPosition =
        window.scrollY + elementPosition.top - offset;

      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  //* PAGINATION LOGIC FOR RESPONSE TO RESIZE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767.98) {
        setPaginationSize("xs");
      } else {
        setPaginationSize("md");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={classNames(s.container, s.projects)}>
      <ProjectHeadingComponent centered={true} />
      <div className={s.filter} ref={topRef}>
        <button
          onClick={toggleFilter}
          className={
            isFilterOpened
              ? classNames(s.filter__main_button, s.filter__main_button_active)
              : s.filter__main_button
          }
        >
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
          <div className={s.filter__filters}>
            <div className={s.filter__filters_block}>
              <p className={s.filter__title}>
                <Image
                  className={s.filter__title_icon}
                  src={DotImg}
                  alt={"●"}
                />{" "}
                <span>Technology</span>
              </p>
              <div className={s.filter__wrapper}>
                {filterTechnologiesOptions.map(
                  (technology: any, index: any) => (
                    <button
                      className={classNames(s.filter__button, {
                        [s.buttonActive]:
                          selectedTechnologies.includes(technology),
                      })}
                      key={index}
                      onClick={() => handleTechnologyClick(technology)}
                    >
                      {technology}
                    </button>
                  )
                )}
              </div>
            </div>
            <div className={s.filter__filters_block}>
              <div className={s.filter__title}>
                <Image
                  className={s.filter__title_icon}
                  src={DotImg}
                  alt={"●"}
                />{" "}
                Country
              </div>
              <div
                className={classNames(
                  s.filter__wrapper,
                  s.filter__wrapper___country
                )}
              >
                {filterCountriesOptions.map((country: any, index: any) => {
                  const project = sampleData.find(
                    (proj) => proj.country === country
                  );
                  if (!project) return null;
                  return (
                    <button
                      className={classNames(s.filter__button_country, {
                        [s.buttonActive]: selectedCountries.includes(country),
                      })}
                      key={index}
                      onClick={() => handleCountryClick(country)}
                    >
                      <CountryFlag
                        countryCode={project.countryCode}
                        svg
                        style={{
                          width: "1.5em",
                          height: "1em",
                          borderRadius: "0.3em",
                        }}
                      />
                      <span>{country}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={s.filter__clear}>
            <MainButtonComponent color="blue" onClick={handleFilterClear}>
              Clear Filter
            </MainButtonComponent>
          </div>
        </div>
      )}

      <div className={s.projects__cards_mobile}>
        {filteredProjects.length === 0 ? (
          <p className={s.projects__nothing}>No projects found for the selected filter.</p>
        ) : (
          visibleProjects.map((project) => (
            <ProjectMobileCardComponent key={project.id} data={project} />
          ))
        )}
      </div>
      <div className={s.projects__cards_desktop}>
        {filteredProjects.length === 0 ? (
          <p className={s.projects__nothing}>No projects found for the selected filter.</p>
        ) : (
          visibleProjects.map((project) => (
            <ProjectCardComponent key={project.id} data={project} />
          ))
        )}
      </div>

      <Pagination
        className={s.pagination}
        total={totalPages}
        value={currentPage}
        onChange={(page) => setCurrentPage(page)}
        siblings={1}
        size={paginationSize}
        styles={(theme) => ({
          control: {
            "&[data-active]": {
              backgroundImage: theme.fn.gradient({
                from: "#308bb7",
                to: "#7ec2e4",
              }),
              border: 0,
            },
          },
        })}
      />
    </section>
  );
};

export default OurProjectsSection;
