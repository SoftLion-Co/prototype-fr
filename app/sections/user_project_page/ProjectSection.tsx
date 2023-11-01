"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import DoughnutChartComponent from "@/app/personal-space/components/DoughnutChartComponent";
import LineChartComponent from "@/app/personal-space/components/LineChartComponent";

import s from "./ProjectSection.module.scss";
import { useOrderProjectStatus } from "@/hooks/useOrderProjectStatus";
import ProductListComponent from "@/app/personal-space/components/ProductListComponent";
import Design from "@/images/personale-space/label-icon-design.svg";
import Development from "@/images/personale-space/label-icon-development.svg";
import Security from "@/images/personale-space/label-icon-security.svg";

interface ProjectSectionProps {
  projectName: string;
}
type Category = "design" | "development" | "security";

interface CategoryValues {
  design: boolean;
  development: boolean;
  security: boolean;
}

const ProjectSection = ({ projectName }: ProjectSectionProps) => {
  const { orderProjecData, isLoading, error } = useOrderProjectStatus();

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

  const OrderProjectStatus = Object.values(orderProjecData).find(
    (project) => project.title === projectName
  );

  // console.log("BACKEND");
  // console.log(OrderProjectStatus?.periodProgresses);

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
    OrderProjectStatus &&
    (OrderProjectStatus.design ||
      OrderProjectStatus.development ||
      OrderProjectStatus.security);

  if (isLoading) {
    return <></>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }
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
              } ${
                OrderProjectStatus && OrderProjectStatus[category]
                  ? ""
                  : s.inactive
              }`}
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
                <LineChartComponent
                  OrderProjectStatus={OrderProjectStatus}
                  categoryStates={categoryStates}
                />
                <DoughnutChartComponent
                  OrderProjectStatus={OrderProjectStatus}
                  categoryStates={categoryStates}
                />
              </div>
            </>
          ) : (
            <h2 className={s.error__message}>Nothing found for your request</h2>
          )}
        </div>
        <ProductListComponent
          categoryStates={categoryStates}
          isButtonActive={isButtonActive}
          OrderProjectStatus={OrderProjectStatus}
        />
      </section>
    </>
  );
};

export default ProjectSection;
