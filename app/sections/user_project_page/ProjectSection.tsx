"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import DoughnutChartComponent from "@/app/personal-space/components/DoughnutChartComponent";
import LineChartComponent from "@/app/personal-space/components/LineChartComponent";

import s from "./ProjectSection.module.scss";
import ProductListComponent from "./../../personal-space/components/ProductListComponent";
import Design from "@/images/personale-space/label-icon-design.svg";
import Development from "@/images/personale-space/label-icon-development.svg";
import Security from "@/images/personale-space/label-icon-security.svg";
// import OrderBlogService from "./../../../services/order-blog-service";

interface ProjectSectionProps {
  projectName: string;
}
type Category = "design" | "development" | "security";

interface ProjectData {
  id: string;
  title: string;
  numberWeek: number;
  design: number;
  development: number;
  security: number;
}
interface CategoryValues {
  design: boolean;
  development: boolean;
  security: boolean;
}
interface OrderStatus {
  id: string;
  title: string;
  projectStatus: number;
  design: boolean;
  development: boolean;
  security: boolean;
}

const ProjectSection = ({ projectName }: ProjectSectionProps) => {
  // const handleSomeAction = async () => {
  //   try {
  //     const data = await OrderBlogService.getAllOrderBlogs();
  //     console.log(data); // Результат від сервісу
  //   } catch (error) {
  //     console.error("Помилка", error);
  //   }
  // };

  const imageList: Record<Category, string> = {
    design: Design,
    development: Development,
    security: Security,
  };
  const categoryList: Category[] = ["design", "development", "security"];

  const [categoryStates, setCategoryStates] = useState<CategoryValues>({
    design: false,
    development: false,
    security: false,
  });

  console.log(categoryStates);

  const orderStatus: { [key: string]: OrderStatus } = {
    project1: {
      id: "project1",
      title: "Company Move",
      projectStatus: 0,
      design: true,
      development: true,
      security: true,
    },
    project2: {
      id: "project2",
      title: "Project Name FRANCHISE",
      projectStatus: 0,
      design: true,
      development: true,
      security: true,
    },
    project3: {
      id: "project3",
      title: "Project Name Alaska",
      projectStatus: 0,
      design: true,
      development: true,
      security: true,
    },
    project4: {
      id: "project4",
      title: "Project Name Simphone",
      projectStatus: 0,
      design: true,
      development: true,
      security: true,
    },
    project5: {
      id: "project5",
      title: "Project Name Shops",
      projectStatus: 0,
      design: true,
      development: true,
      security: true,
    },
  };

  const dataProject: { [key: string]: ProjectData } = {
    project1: {
      id: "project1",
      title: "Company Move",
      numberWeek: 0,
      design: 50,
      development: 60,
      security: 60,
    },
    project2: {
      id: "project2",
      title: "Project Name FRANCHISE",
      numberWeek: 0,
      design: 30,
      development: 35,
      security: 40,
    },
    project3: {
      id: "project3",
      title: "Project Name Alaska",
      numberWeek: 0,
      design: 49,
      development: 60,
      security: 71,
    },
    project4: {
      id: "project4",
      title: "Project Name Simphone",
      numberWeek: 0,
      design: 100,
      development: 75,
      security: 100,
    },
    project5: {
      id: "project5",
      title: "Project Name Shops",
      numberWeek: 0,
      design: 100,
      development: 100,
      security: 100,
    },
  };

  const selectedProject = Object.values(dataProject).find(
    (project) => project.title === projectName
  );

  const selectedOrderStatus = Object.values(orderStatus).find(
    (project) => project.title === projectName
  );

  console.log(selectedOrderStatus);

  const handleCategoryClick = (category: keyof typeof categoryStates) => {
    setCategoryStates((prevState) => {
      const updatedState = { ...prevState };
      if (updatedState[category]) {
        // Якщо категорія вже активна, деактивуємо її
        updatedState[category] = false;
      } else {
        // Деактивуємо всі інші категорії і активуємо обрану
        updatedState.design = false;
        updatedState.development = false;
        updatedState.security = false;
        updatedState[category] = true;
      }
      return updatedState;
    });
  };

  const isButtonActive =
    selectedOrderStatus &&
    (selectedOrderStatus.design ||
      selectedOrderStatus.development ||
      selectedOrderStatus.security);

  return (
    <>
      <h1 className={s.project__title}>{projectName}</h1>
      <div className={s.block}>
        {categoryList.map((category) => (
          <div className={s.block__item} key={category}>
            <Image src={imageList[category]} alt={category} />
            <h2
              className={`${s.block__label} ${
                categoryStates[category] ? "" : s.active
              } ${selectedOrderStatus[category] ? "" : s.inactive}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
          </div>
        ))}
      </div>

      <section className={s.project__section}>
        <div className={s.section__container}>
          {isButtonActive ? (
            <>
              <h2 className={s.title}>General Information</h2>
              <div className={s.chart__сontainer}>
                <LineChartComponent />
                <DoughnutChartComponent
                  selectedProject={selectedProject}
                  categoryStates={categoryStates}
                  selectedOrderStatus={selectedOrderStatus}
                />
              </div>
            </>
          ) : (
            <h2 className={s.error__message}>Nothing found for your request</h2>
          )}
        </div>
        <ProductListComponent
          categoryStates={categoryStates}
          selectedOrderStatus={selectedOrderStatus}
          isButtonActive={isButtonActive}
        />
      </section>
    </>
  );
};

export default ProjectSection;
