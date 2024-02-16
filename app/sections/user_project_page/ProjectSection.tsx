"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import DoughnutChartComponent from "@/app/personal-space/components/DoughnutChartComponent";
import LineChartComponent from "@/app/personal-space/components/LineChartComponent";
import ProductListComponent from "@/app/personal-space/components/ProductListComponent";
import {
  colorList,
  statusProject,
} from "@/app/personal-space/components/useDynamicComponents";
import CustomVectorSVG from "@/app/personal-space/components/CustomVectorSVG";

import s from "./ProjectSection.module.scss";
import { useOrderProjectData } from "@/hooks/useOrderProjectData";
import ServiceChartPaginator from "@/app/personal-space/components/ServiceChartPaginator";
interface ProjectSectionProps {
  projectName: string;
}

const ProjectSection = ({ projectName }: ProjectSectionProps) => {
  const { orderProjecData } = useOrderProjectData();

  const OrderProjectStatus = Object.values(orderProjecData).find(
    (project) => project.title === projectName
  );

  const [isGeneralInformationActive, setIsGeneralInformationActive] =
    useState(true);
  const uniqueService =
    OrderProjectStatus?.periodProgresses
      .filter((item) => item.numberWeek === 0)
      .map((item) => ({
        title: item.service.title,
        description: item.service.description,
      }))
      .sort((a, b) => a.title.localeCompare(b.title)) || [];

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

  const [showNext, setShowNext] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const categoriesPerPage = isMobile ? 8 : 4;

  const currentCategoriesPage = showNext
    ? uniqueService.slice(categoriesPerPage).map((category, index) => ({
        category,
        colors: colorList[index + categoriesPerPage],
        id: `next_${index}`,
      }))
    : uniqueService.slice(0, categoriesPerPage).map((category, index) => ({
        category,
        colors: colorList[index],
        id: `current_${index}`,
      }));

  const handlePageToggle = () => {
    setShowNext((prevState) => !prevState);
  };
  const projectSection = (
    <section className={s.project__section}>
      <div className={s.section__container}>
        {isButtonActive ? (
          <>
            <div className={s.vectorTile}>
              <CustomVectorSVG
                projectStatus={OrderProjectStatus.projectStatus}
              />
              <h3
                className={s.statusText}
                data-custom-title={
                  statusProject.status[OrderProjectStatus.projectStatus]
                }
              >
                {statusProject.status[OrderProjectStatus.projectStatus]}
              </h3>
            </div>
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
        uniqueService={uniqueService}
        allColors={colorList}
      />
    </section>
  );
  return (
    <section className={s.project}>
      <div className={s.header}>
        <div className={s.header__container}>
          <h1 className={s.header__title}>{projectName}</h1>
          {isButtonActive ? (
            <h2
              className={`${s.header__info} ${
                isGeneralInformationActive ? s.activeInfo : ""
              }`}
              onClick={handleGeneralInformationClick}
            >
              General Information
            </h2>
          ) : null}
        </div>

        <ServiceChartPaginator
          currentCategoriesPage={currentCategoriesPage}
          showNext={showNext}
          categoryStates={categoryStates}
          handleCategoryClick={handleCategoryClick}
          handlePageToggle={handlePageToggle}
        />
      </div>
      <div className={s.project__section}>
        <div>{projectSection}</div>
      </div>
    </section>
  );
};

export default ProjectSection;
