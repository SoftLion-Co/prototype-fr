import s from "./ServiceChartPaginator.module.scss";
import { FC } from "react";
import DynamicGradientSVG from "@/app/personal-space/components/DynamicGradientSVG";

interface ServiceChartPaginatorProps {
  currentCategoriesPage: any;
  showNext: boolean;
  categoryStates: any;
  handleCategoryClick: (title: string) => void;
  handlePageToggle: () => void;
}

const ServiceChartPaginator: FC<ServiceChartPaginatorProps> = ({
  currentCategoriesPage,
  showNext,
  categoryStates,
  handleCategoryClick,
  handlePageToggle,
}) => {
  return (
    <div className={s.block}>
      <div className={s.block__scroll}>
        {currentCategoriesPage.map((array: any) => (
          <div
            className={`${s.block__item} ${
              showNext ? s.slideFromLeft : s.slideFromRight
            }`}
            key={array.category.title}
          >
            <div className={s.block__icon}>
              <DynamicGradientSVG
                categoryColors={array.colors}
                index={array.id}
              />
            </div>
            <h2
              className={`${s.block__label} ${
                categoryStates[array.category.title] ? "" : s.active
              }`}
              onClick={() => handleCategoryClick(array.category.title)}
            >
              {array.category.title.charAt(0).toUpperCase() +
                array.category.title.slice(1)}
            </h2>
          </div>
        ))}
      </div>
      <button
        className={`${s.btn__arrow} ${showNext ? s.prevButton : s.nextButton}`}
        onClick={handlePageToggle}
      ></button>
    </div>
  );
};

export default ServiceChartPaginator;
