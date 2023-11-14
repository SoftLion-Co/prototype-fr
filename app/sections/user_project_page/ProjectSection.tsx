"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import DoughnutChartComponent from "@/app/personal-space/components/DoughnutChartComponent";
// import LineChartComponent from "@/app/personal-space/components/LineChartComponent";

import s from "./ProjectSection.module.scss";
import { useOrderProjectStatus } from "@/hooks/useOrderProjectStatus";
import ProductListComponent from "@/app/personal-space/components/ProductListComponent";

import Vector from "@/images/personale-space/label-icon-vector.svg";

interface ProjectSectionProps {
  projectName: string;
}

const ProjectSection = ({ projectName }: ProjectSectionProps) => {
  const { orderProjecData, isLoading, error } = useOrderProjectStatus();
  const [isGeneralInformationActive, setIsGeneralInformationActive] =
    useState(true);

  const OrderProjectStatus = Object.values(orderProjecData).find(
    (project) => project.title === projectName
  );

  const uniqueService =
    OrderProjectStatus?.periodProgresses
      .filter((item) => item.numberWeek === 0)
      .map((item) => ({
        title: item.service.title,
        description: item.service.description,
      }))
      .sort((a, b) => a.title.localeCompare(b.title)) || [];

  console.log(OrderProjectStatus);
  console.log(uniqueService);

  const initialCategoryStates: Record<string, boolean> = {};
  uniqueService.forEach((category) => {
    initialCategoryStates[category.title] = false;
  });

  const [categoryStates, setCategoryStates] = useState<Record<string, boolean>>(
    initialCategoryStates
  );

  const handleCategoryClick = (category: string) => {
    setCategoryStates((prevState) => {
      const updatedState = { ...initialCategoryStates };
      updatedState[category] = !prevState[category];
      setIsGeneralInformationActive(!updatedState[category]);
      return updatedState;
    });
  };

  const handleGeneralInformationClick = () => {
    setIsGeneralInformationActive(true);
    setCategoryStates(() => {
      return { ...initialCategoryStates };
    });
  };

  const isButtonActive =
    OrderProjectStatus &&
    uniqueService.some((category) => !categoryStates[category.title]);

  if (isLoading) {
    return <></>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <div className={s.project__header}>
        <h1 className={s.project__title}>{projectName}</h1>
        {isButtonActive ? (
          <div>
            <h2
              className={`${s.title} ${
                isGeneralInformationActive ? "" : s.active
              }`}
              onClick={handleGeneralInformationClick}
            >
              General Information
            </h2>
            <div className={s.block}>
              {uniqueService.map((category) => (
                <div className={s.block__item} key={category.title}>
                  <Image src={Vector} alt={category.title} />
                  <h2
                    className={`${s.block__label} ${
                      categoryStates[category.title] ? "" : s.active
                    }`}
                    onClick={() => handleCategoryClick(category.title)}
                  >
                    {category.title.charAt(0).toUpperCase() +
                      category.title.slice(1)}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <section className={s.project__section}>
        <div className={s.section__container}>
          {isButtonActive ? (
            <>
              <h3 className={s.title}>Тут буде статус</h3>
              <div className={s.chart__сontainer}>
                {/* <LineChartComponent
                  OrderProjectStatus={OrderProjectStatus}
                  categoryStates={categoryStates}
                /> */}
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
          uniqueService={uniqueService}
        />
      </section>
    </>
  );
};

export default ProjectSection;
