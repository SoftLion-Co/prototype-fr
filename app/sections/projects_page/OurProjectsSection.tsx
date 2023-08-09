"use client";
import ProjectMobileCardComponent from "@/components/projects/ProjectMobileCardComponent";
import s from "./OurProjectsSection.module.scss";
import ProjectHeadingComponent from "@/components/projects/ProjectHeadingComponent";
import classNames from "classnames";
import ProjectCardComponent from "@/components/projects/ProjectCardComponent";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import MainButtonComponent from "@/components/MainButtonComponent";
import DotImg from "@/images/project/request-list.svg";
import Image from "next/image";
import CountryFlag from "react-country-flag";

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
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Java",
    year: "year: 2022",
    author: "author: Belgium",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Java",
    country: "Belgium",
    countryCode: "BE",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: React.js",
    year: "year: 2022",
    author: "author: Germany",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "React.js",
    country: "Germany",
    countryCode: "DE",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Angular",
    year: "year: 2022",
    author: "author: Canada",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Angular",
    country: "Canada",
    countryCode: "CA",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Vue.js",
    year: "year: 2022",
    author: "author: Ukraine",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Vue.js",
    country: "Ukraine",
    countryCode: "UA",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Node.js",
    year: "year: 2022",
    author: "author: Sweden",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Node.js",
    country: "Sweden",
    countryCode: "SE",
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: .NET",
    year: "year: 2022",
    author: "author: United Kingdom",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: ".NET",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    id: 7,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Java2",
    year: "year: 2022",
    author: "author: Israel",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Java",
    country: "Israel",
    countryCode: "IL",
  },
  {
    id: 8,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: React.js2",
    year: "year: 2022",
    author: "author: Ireland",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "React.js",
    country: "Ireland",
    countryCode: "IE",
  },
  {
    id: 9,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Angular2",
    year: "year: 2022",
    author: "author: Germany",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Angular",
    country: "Germany",
    countryCode: "DE",
  },
  {
    id: 10,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Vue.js2",
    year: "year: 2022",
    author: "author: Germany",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Vue.js",
    country: "Germany",
    countryCode: "DE",
  },
  {
    id: 11,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: Node.js2",
    year: "year: 2022",
    author: "author: Germany",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: "Next",
    country: "Germany",
    countryCode: "DE",
  },
  {
    id: 12,
    image:
      "https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=2000&t=st=1689761442~exp=1689762042~hmac=764807ff7ce02e9377fd4137c6e335816a5e066d40244b6dd7f13aca2a9fd9b9",
    title: "Landing page of traveling company",
    customer: "customer: .NET2",
    year: "year: 2022",
    author: "author: USA",
    description:
      "In this project, we developed the design, implemented it, and provide further support",
    technology: ".NET",
    country: "USA",
    countryCode: "US",
  },
];

const getUniqueFieldValues = (data: any, field: any) => {
  return data.reduce((accumulator: any, project: any) => {
    if (!accumulator.includes(project[field])) {
      accumulator.push(project[field]);
    }
    return accumulator;
  }, []);
};

const filterTechnologiesOptions = getUniqueFieldValues(
  sampleData,
  "technology"
);
const filterCountriesOptions = getUniqueFieldValues(sampleData, "country");

const OurProjectsSection = () => {
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const toggleFilter = () => {
    setIsFilterOpened(!isFilterOpened);
  };

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
          <div className={s.filter__filters}>
            <div>
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
            <div>
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
            <MainButtonComponent onClick={handleFilterClear}>
              Clear Filter
            </MainButtonComponent>
          </div>
        </div>
      )}

      <div className={s.projects__cards_mobile}>
        {sampleData
          .filter(
            (project) =>
              (selectedTechnologies.length === 0 ||
                selectedTechnologies.includes(project.technology)) &&
              (selectedCountries.length === 0 ||
                selectedCountries.includes(project.country))
          )
          .map((project) => (
            <ProjectMobileCardComponent key={project.id} data={project} />
          ))}
      </div>
      <div className={s.projects__cards_desktop}>
        {sampleData
          .filter(
            (project) =>
              (selectedTechnologies.length === 0 ||
                selectedTechnologies.includes(project.technology)) &&
              (selectedCountries.length === 0 ||
                selectedCountries.includes(project.country))
          )
          .map((project) => (
            <ProjectCardComponent key={project.id} data={project} />
          ))}
      </div>
    </section>
  );
};

export default OurProjectsSection;
