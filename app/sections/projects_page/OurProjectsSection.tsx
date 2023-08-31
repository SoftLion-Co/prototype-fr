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
		  "https://res.cloudinary.com/dte7upwcr/image/upload/f_auto/v1653388323/blog/blog2/Business%20Website%20Templates%20to%20Help%20you%20Design%20Your%20Website/Webflow_2.png",
		title: "Creating Website for IT company",
		customer: "customer: Move",
		year: "year: 2020",
		author: "author: SoftLion",
		description:
		  "In this project, we developed the design, implemented it, and provide further support",
		  technology: "Vue.js",
    country: "Ukraine",
    countryCode: "UA",
	 },
	 {
		id: 2,
		image:"https://media.licdn.com/dms/image/D5612AQErJrHiEWZxxg/article-cover_image-shrink_720_1280/0/1672207059485?e=2147483647&v=beta&t=8xHZ8VkKb8EiJrBTWT11jtx92R5yrdSYk6E3Q-Bh-UM",
		title: "Landing page of traveling company",
		customer: "customer: Feel",
		year: "year: 2021",
		author: "author: SoftLion",
		description:
		  "In this project, we developed the design, implemented it, and provide further support",
		  technology: "Vue.js",
    country: "Ukraine",
    countryCode: "UA",
	 },
	 {
		id: 3,
		image:
		  "https://themeforest.img.customer.envatousercontent.com/files/356000339/02_home.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=7c4204b00e2c61354419a026e4651cbe",
		title: "Shop page of agency company",
		customer: "customer: Sneek",
		year: "year: 2022",
		author: "author: SoftLion",
		description:
		  "In this project, we developed the design, implemented it, and provide further support",
		  technology: "Vue.js",
    country: "Ukraine",
    countryCode: "UA",
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
	id: 1,
	image:
	  "https://res.cloudinary.com/dte7upwcr/image/upload/f_auto/v1653388323/blog/blog2/Business%20Website%20Templates%20to%20Help%20you%20Design%20Your%20Website/Webflow_2.png",
	title: "Creating Website for IT company",
	customer: "customer: Move",
	year: "year: 2020",
	author: "author: SoftLion",
	description:
	  "In this project, we developed the design, implemented it, and provide further support",
	  technology: "Vue.js",
    country: "Ukraine",
    countryCode: "UA",
 },
 {
	id: 6,
	image:"https://media.licdn.com/dms/image/D5612AQErJrHiEWZxxg/article-cover_image-shrink_720_1280/0/1672207059485?e=2147483647&v=beta&t=8xHZ8VkKb8EiJrBTWT11jtx92R5yrdSYk6E3Q-Bh-UM",
	title: "Landing page of traveling company",
	customer: "customer: Feel",
	year: "year: 2021",
	author: "author: SoftLion",
	description:
	  "In this project, we developed the design, implemented it, and provide further support",
	  technology: "Vue.js",
    country: "Ukraine",
    countryCode: "UA",
 },
 {
	id: 7,
	image:
	  "https://themeforest.img.customer.envatousercontent.com/files/356000339/02_home.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=7c4204b00e2c61354419a026e4651cbe",
	title: "Shop page of agency company",
	customer: "customer: Sneek",
	year: "year: 2022",
	author: "author: SoftLion",
	description:
	  "In this project, we developed the design, implemented it, and provide further support",
	  technology: "Vue.js",
    country: "Ukraine",
    countryCode: "UA",
 },
  {
	id: 8,
	image:
	  "https://res.cloudinary.com/dte7upwcr/image/upload/f_auto/v1653388323/blog/blog2/Business%20Website%20Templates%20to%20Help%20you%20Design%20Your%20Website/Webflow_2.png",
	title: "Creating Website for IT company",
	customer: "customer: Move",
	year: "year: 2020",
	author: "author: SoftLion",
	description:
	  "In this project, we developed the design, implemented it, and provide further support",
	  technology: "Vue.js",
    country: "Ukraine",
    countryCode: "UA",
 },
 {
	id: 9,
	image:"https://media.licdn.com/dms/image/D5612AQErJrHiEWZxxg/article-cover_image-shrink_720_1280/0/1672207059485?e=2147483647&v=beta&t=8xHZ8VkKb8EiJrBTWT11jtx92R5yrdSYk6E3Q-Bh-UM",
	title: "Landing page of traveling company",
	customer: "customer: Feel",
	year: "year: 2021",
	author: "author: SoftLion",
	description:
	  "In this project, we developed the design, implemented it, and provide further support",
	  technology: "Vue.js",
    country: "Ukraine",
    countryCode: "UA",
 },
 {
	id: 10,
	image:
	  "https://themeforest.img.customer.envatousercontent.com/files/356000339/02_home.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=7c4204b00e2c61354419a026e4651cbe",
	title: "Shop page of agency company",
	customer: "customer: Sneek",
	year: "year: 2022",
	author: "author: SoftLion",
	description:
	  "In this project, we developed the design, implemented it, and provide further support",
	  technology: "Vue.js",
    country: "Ukraine",
    countryCode: "UA",
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
  }
];

//* METHOD TO GET UNIFIED VALUES FROM sampleData AND MAKE UNIQUE ARRAYS
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
        {visibleProjects.map((project) => (
          <ProjectMobileCardComponent key={project.id} data={project} />
        ))}
      </div>
      <div className={s.projects__cards_desktop}>
        {visibleProjects.map((project) => (
          <ProjectCardComponent key={project.id} data={project} />
        ))}
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
            '&[data-active]': {
              backgroundImage: theme.fn.gradient({ from: '#308bb7', to: '#7ec2e4' }),
              border: 0,
            },
          },
        })}      
      />
    </section>
  );
};

export default OurProjectsSection;
