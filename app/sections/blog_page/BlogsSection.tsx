import React, { useState } from "react";
import s from "./BlogsSection.module.scss";
import classNames from "classnames";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import BlogExtendedCardComponent from "@/components/blog/BlogExtendedCardComponent";
import BlogFilterButton from "@/components/blog/BlogFilterButton";
import BlogPaginationButton from "@/components/blog/BlogPaginationButton";
import useBlogPagination from "@/hooks/useBlogPagination";
import useScrollToTop from "@/hooks/useScrollToTop";
import useBlogFilter from "@/hooks/useBlogFilter";
import useResponsiveItemsToShow from "@/hooks/useResponsiveItemsToShow";
import { useSwipeForFilter } from "@/hooks/useSwipeForFilter";
import useSwitchingCategoriesCarousel from "@/hooks/useSwitchingCategoriesCarousel";
import { BlogInterface } from "@/components/blog/BlogInteface";
import useBlogsData from "@/hooks/useBlogsData";

const BlogsSection = () => {
  const blogs: BlogInterface[] = useBlogsData();

  const categories = [
    "All articles",
    "Technology",
    "Guides",
    "UI/UX",
    "E-learning",
    "Finance",
    "Startups",
    "Development",
    "Angular",
    "React",
    "Node.js",
    "Java",
    ".Net",
    "Blockchain",
  ];

  const blogsPerPage = 6;

  const { setScrollToTop } = useScrollToTop();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handlePageChange = (page: number) => {
    const newPage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(newPage);
    setScrollToTop(true);
  };

  const {
    filteredBlogsData,
    totalPagesForSelectedCategory,
    handleCategoryChange,
    selectedCategory,
  } = useBlogFilter({
    blogsData: useBlogsData(),
    blogsPerPage: blogsPerPage,
    setCurrentPage: handlePageChange,
  });

  const {
    currentPage,
    totalPages,
    getPageNumbersToShow,
    showPreviousButton,
    showNextButton,
    setCurrentPage,
  } = useBlogPagination({
    totalItems: filteredBlogsData?.length || 0,
    itemsPerPage: blogsPerPage,
  });

  const itemsToShow = useResponsiveItemsToShow();

  const {
    visibleCategories,
    animateCarousel,
    slideDirection,
    setAnimateCarousel,
    setSlideDirection,
    sliderPosition,
    setSliderPosition,
    handleCategoryIndicatorClick,
  } = useSwitchingCategoriesCarousel(
    categories.map((category) => ({ name: category })),
    itemsToShow
  );

  const { sliderRef, handleTouchStart, handleTouchEndX } = useSwipeForFilter(
    categories.length,
    itemsToShow,
    sliderPosition,
    setSliderPosition
  );

  const currentBlogs = filteredBlogsData.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const links = [{ title: "Blog", href: "/blogs" }];

  return (
    <section className={s.blog}>
      <div>
        <InfoNavigationComponent links={links} />
      </div>

      <div className={s.blog__title}>
        <ServiceHeadingComponent headingText="Blogs" container={true} />
      </div>

      <div className={s.container}>
        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
        <div className={s.blog__filter}>
          <div
            className={classNames(
              s.blog__filter_carousel,
              animateCarousel && s.animate,
              slideDirection === "left" && s.slideLeft,
              slideDirection === "right" && s.slideRight
            )}
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEndX}
            onAnimationEnd={() => {
              setAnimateCarousel(false);
              setSlideDirection(null);
            }}
          >
            {visibleCategories.map((category, index) => (
              <BlogFilterButton
                key={index}
                text={category.name}
                activeFilter={
                  activeCategory === category.name ||
                  (category.name === "All articles" && activeCategory === null)
                }
                onClick={() => {
                  setActiveCategory(
                    category.name === "All articles" ? null : category.name
                  );
                  handleCategoryChange(
                    category.name === "All articles" ? null : category.name
                  );
                }}
                className={classNames(
                  s.blogFilterButton,
                  activeCategory === category.name ? s.activeFilter : "",
                  animateCarousel && activeCategory !== category.name
                    ? s.animate
                    : "",
                  slideDirection === "left" && activeCategory !== category.name
                    ? s.slideLeft
                    : "",
                  slideDirection === "right" && activeCategory !== category.name
                    ? s.slideRight
                    : ""
                )}
              />
            ))}
          </div>

          <div className={s.blog__filter_controls}>
            {categories
              .slice(0, Math.ceil(categories.length / itemsToShow))
              .map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  className={classNames(s.blog__filter_indicator, {
                    [s.visible]:
                      pageIndex === Math.floor(sliderPosition / itemsToShow),
                    [s.animated]: activeCategory !== null,
                    [s.active]:
                      pageIndex === Math.floor(sliderPosition / itemsToShow) &&
                      activeCategory !== null,
                  })}
                  onClick={() => {
                    if (
                      pageIndex !== Math.floor(sliderPosition / itemsToShow)
                    ) {
                      handleCategoryIndicatorClick(pageIndex);
                    }
                  }}
                >
                  ●
                </button>
              ))}
          </div>
        </div>

        <div className={s.blog__cards}>
          {currentBlogs.map((blog) => (
            <div className={s.blog__card}>
              <BlogExtendedCardComponent data={blog} />
            </div>
          ))}
        </div>

        <div className={s.pagination}>
          {totalPages > 5 && (
            <>
              {showPreviousButton() && currentPage > 1 && (
                <BlogPaginationButton
                  key="previous"
                  text="⇐"
                  activePagination={false}
                  onClick={() => handlePageChange(currentPage - 1)}
                />
              )}

              {currentPage > 1 && (
                <>
                  {currentPage >= 4 && (
                    <BlogPaginationButton
                      key={1}
                      text="1"
                      activePagination={1 === currentPage}
                      onClick={() => handlePageChange(1)}
                      className={classNames(s.activePagination)}
                    />
                  )}
                  {currentPage > 3 && (
                    <BlogPaginationButton
                      key="ellipsis-start"
                      text="…"
                      activePagination={false}
                      onClick={() => handlePageChange(currentPage - 7)}
                    />
                  )}
                </>
              )}

              {getPageNumbersToShow().map((pageNumber) => (
                <BlogPaginationButton
                  key={pageNumber}
                  text={String(pageNumber)}
                  activePagination={pageNumber === currentPage}
                  onClick={() => handlePageChange(pageNumber)}
                  className={classNames(s.activePagination)}
                />
              ))}

              {currentPage < totalPages - 1 && (
                <>
                  {currentPage <= totalPages - 4 && (
                    <BlogPaginationButton
                      key="ellipsis-end"
                      text="…"
                      activePagination={false}
                      onClick={() => handlePageChange(currentPage + 2)}
                    />
                  )}
                  {currentPage <= totalPages - 3 && (
                    <BlogPaginationButton
                      key={totalPages}
                      text={String(totalPages)}
                      activePagination={totalPages === currentPage}
                      onClick={() => handlePageChange(totalPages)}
                      className={classNames(s.activePagination)}
                    />
                  )}
                </>
              )}
              {showNextButton() && currentPage < totalPages && (
                <BlogPaginationButton
                  key="next"
                  text="⇒"
                  activePagination={false}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              )}
            </>
          )}

          {totalPages <= 5 && (
            <>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <BlogPaginationButton
                    key={pageNumber}
                    text={String(pageNumber)}
                    activePagination={pageNumber === currentPage}
                    onClick={() => handlePageChange(pageNumber)}
                    className={classNames(s.activePagination)}
                  />
                )
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
