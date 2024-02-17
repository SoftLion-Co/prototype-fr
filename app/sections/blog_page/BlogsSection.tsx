"use client";

import React, { FC, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import s from "./BlogsSection.module.scss";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import BlogExtendedCardComponent from "@/components/blog/BlogExtendedCardComponent";
import BlogFilterButton from "@/components/blog/BlogFilterButton";
import useBlogPagination from "@/hooks/useBlogPagination";
import useScrollToTop from "@/hooks/useScrollToTop";
import useBlogFilter from "@/hooks/useBlogFilter";
import getBlogsData from "@/hooks/getBlogsData";
import MotionWrapper from "@/hooks/MotionWrapper";
import { Pagination } from "@mantine/core";
import { Carousel, Embla } from "@mantine/carousel";
import Arrow from "@/images/navigation/arrow.svg";

interface ArrowProps {
  className: string;
}

const BlogsSection = () => {
  const categories = [
    "All articles",
    "Technology",
    "Guides",
    "UI/UX",
    "E-commerce",
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

  const { filteredBlogsData, handleCategoryChange } = useBlogFilter({
    blogsData: getBlogsData(),
    blogsPerPage: blogsPerPage,
    setCurrentPage: handlePageChange,
  });

  const { currentPage, totalPages, setCurrentPage } = useBlogPagination({
    totalItems: filteredBlogsData?.length || 0,
    itemsPerPage: blogsPerPage,
  });

  const allBlogs = filteredBlogsData.slice().reverse();
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = Math.min(startIndex + blogsPerPage, allBlogs.length);

  const currentBlogs = allBlogs.slice(startIndex, endIndex);

  const [embla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  const [paginationSize, setPaginationSize] = useState("xs");

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

  const NextArrow: FC<ArrowProps> = ({ className }) => {
    return (
      <div className={className}>
        <Image
          style={{ transform: "rotate(180deg)" }}
          src={Arrow}
          alt="Next slide"
          className={s.button__arrow}
          width={28}
        />
      </div>
    );
  };

  const PrevArrow: FC<ArrowProps> = ({ className }) => {
    return (
      <div className={className}>
        <Image
          src={Arrow}
          alt="Previous slide"
          className={s.button__arrow}
          width={28}
        />
      </div>
    );
  };

  return (
    <section className={s.blog}>
      <div className={s.container}>
        <ServiceHeadingComponent headingText="Blog" tag="h1" />

        <div className={s.blur}>
          <div className={s.blur_item1}></div>
          <div className={s.blur_item2}></div>
          <div className={s.blur_item3}></div>
        </div>

        <MotionWrapper tag="div" initial viewport variants custom={2}>
          <Carousel
            slideSize="100%"
            align="start"
            loop
            dragFree
            withControls
            controlsOffset="xs"
            previousControlIcon={<NextArrow className={s.button__next} />}
            nextControlIcon={<PrevArrow className={s.button__prev} />}
            withIndicators={false}
            classNames={{
              container: s.button__container,
              control: s.button__control,
              controls: s.button__controls,
            }}
          >
            {categories.map((category, index) => (
              <BlogFilterButton
                key={index}
                text={category}
                className={s.button}
                activeFilter={
                  activeCategory === category ||
                  (category === "All articles" && activeCategory === null)
                }
                onClick={() => {
                  setActiveCategory(
                    category === "All articles" ? null : category
                  );
                  handleCategoryChange(
                    category === "All articles" ? null : category
                  );
                  setScrollToTop(false);
                }}
              />
            ))}
          </Carousel>
        </MotionWrapper>

        <MotionWrapper
          tag="div"
          initial
          viewport
          variants
          custom={2.5}
          className={s.blog__card}
        >
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog, index) => (
              <BlogExtendedCardComponent key={index} data={blog} />
            ))
          ) : (
            <div style={{ display: "flex" }}>
              <h3 className={s.blog__nothing}>
                Nothing found for your request
              </h3>
            </div>
          )}
        </MotionWrapper>

        <Pagination
          className={s.pagination}
          total={totalPages}
          value={currentPage}
          onChange={(page: any) => {
            setCurrentPage(page);
            setScrollToTop(true);
          }}
          siblings={1}
          size={paginationSize}
          styles={(theme: any) => ({
            control: {
              "&[data-active]": {
                backgroundImage: theme.fn.gradient({
                  from: "#F2D4EF",
                  to: "#F2D5F1",
                }),
                border: 0,
              },
            },
          })}
        />
      </div>
    </section>
  );
};

export default BlogsSection;
