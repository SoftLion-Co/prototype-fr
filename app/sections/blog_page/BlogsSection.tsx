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

interface Blog {
  id: number;
  title: string;
  category: string;
  readingTime: string;
  author: string;
  authorIconSrc: string;
  text: string;
  imageSrc: string;
  tags: string[];
}

const BlogsSection = () => {
  const blogsData: Blog[] = [
    {
      id: 1,
      title: "Technology: Tech News",
      category: "Technology",
      readingTime: "21 min",
      author: "Paul",
      authorIconSrc:
        "https://media.licdn.com/dms/image/D4D03AQH746g8dZ8QPA/profile-displayphoto-shrink_200_200/0/1670855543512?e=1697068800&v=beta&t=iU_mBrJTvcDTktD39Wsm9jGB_ALVI-0EKS6zVFBr7Yk",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat blandit tincidunt. Donec in dolor non leo eleifend dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor metus, egestas non lacinia non, cursus in eros. In hac habitasse.",
      imageSrc:
        "https://www.pngall.com/wp-content/uploads/2016/07/Technology.png",
      tags: ["java", "angular", "next.js"],
    },
    {
      id: 2,
      title: "Development: Dev Tips",
      category: "Development",
      readingTime: "11 min",
      author: "Dmytro",
      authorIconSrc:
        "https://media.licdn.com/dms/image/D4D03AQHAgP85JknqKA/profile-displayphoto-shrink_100_100/0/1686751372827?e=1697068800&v=beta&t=YtF84vI2H-XJnkl0upvlslooIhwKlqaVASTrH7yCfeI",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin, dui ac pulvinar molestie, ante quam imperdiet justo, ut imperdiet eros urna id enim. Nullam eget ex at nibh posuere hendrerit eu eget est. Ut sagittis faucibus sem, sed scelerisque.",
      imageSrc: "",
      tags: [],
    },
    {
      id: 3,
      title: "Guides: How-To",
      category: "Guides",
      readingTime: "15 min",
      author: "Andriy",
      authorIconSrc:
        "https://media.licdn.com/dms/image/D5603AQFNZqDCu8hJDA/profile-displayphoto-shrink_100_100/0/1686752581460?e=1697068800&v=beta&t=RoCOZ0Vcdb9hPINRsoccQO3mtAGUHkFbKDuWeclW2Co",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget aliquam eros. Cras fringilla dignissim rutrum. Ut vitae orci cursus, venenatis purus eu, faucibus nisi. Quisque dictum tincidunt dolor, sit amet egestas nunc suscipit vitae. Aenean magna lorem, pharetra nec.",
      imageSrc: "",
      tags: [],
    },
    {
      id: 4,
      title: "UI/UX: Creative Ideas",
      category: "UI/UX",
      readingTime: "14 min",
      author: "Tatyana",
      authorIconSrc: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper porttitor cursus. Nunc volutpat ultricies euismod. Nunc vel scelerisque diam. Phasellus tempus porttitor lorem id cursus. Ut euismod, purus vitae faucibus aliquet, urna augue bibendum tellus, fringilla egestas nibh ex.",
      imageSrc: "",
      tags: [],
    },
    {
      id: 5,
      title: "E-learning: Online Courses",
      category: "E-learning",
      readingTime: "22 min",
      author: "Andriy",
      authorIconSrc:
        "https://media.licdn.com/dms/image/D5603AQFNZqDCu8hJDA/profile-displayphoto-shrink_100_100/0/1686752581460?e=1697068800&v=beta&t=RoCOZ0Vcdb9hPINRsoccQO3mtAGUHkFbKDuWeclW2Co",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis sapien vitae leo maximus, id posuere quam molestie. Donec nec fermentum risus. Aenean ultricies enim in sapien venenatis, vitae vehicula leo tempus. In et tortor eros. Aenean eleifend ipsum at.",
      imageSrc: "",
      tags: [],
    },
    {
      id: 6,
      title: "Finance: Money Management",
      category: "Finance",
      readingTime: "25 min",
      author: "Misha",
      authorIconSrc:
        "https://media.licdn.com/dms/image/D4E35AQFRuJ82pNICZQ/profile-framedphoto-shrink_100_100/0/1679052466298?e=1692367200&v=beta&t=JZRG2VYsm_d5aylB-ZGwz7HlyrGfhRbb4gAL5lR7hU0",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ornare sapien. In id lectus consectetur, convallis urna non, cursus risus. Nunc laoreet, risus eu pellentesque aliquet, mi sem faucibus sapien, nec maximus ex felis porttitor ante. Mauris urna ante.",
      imageSrc:
        "https://www.pngall.com/wp-content/uploads/2016/06/Finance-PNG-HD.png",
      tags: [],
    },
    {
      id: 7,
      title: ".Net: Supply chain News",
      category: ".Net",
      readingTime: "34 min",
      author: "Vera",
      authorIconSrc:
        "https://media.licdn.com/dms/image/D5603AQHThUF7Y2VIZA/profile-displayphoto-shrink_100_100/0/1690544798112?e=1697068800&v=beta&t=tMAp33yDt5sXHxJMJUg_AQW3A-EqEpTmeJw1YAjgUzg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est at urna posuere tincidunt non sit amet ipsum. Quisque bibendum orci eget mi convallis posuere. Pellentesque eget euismod nunc. Suspendisse molestie erat eget sapien feugiat, quis dictum dui commodo.",
      imageSrc: "",
      tags: [],
    },
    {
      id: 8,
      title: "Blockchain: Healthcare Tips",
      category: "Blockchain",
      readingTime: "22 min",
      author: "Daniil",
      authorIconSrc:
        "https://media.licdn.com/dms/image/D4D35AQFZXHwrdofn8Q/profile-framedphoto-shrink_100_100/0/1676486269258?e=1692367200&v=beta&t=sGOWohcahmUQ_7TqADvM4K7wCgQi9_L2A2GlkNUHJfo",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel nibh aliquam, hendrerit massa vel, gravida orci. Vivamus cursus dolor sit amet consectetur dignissim. Aliquam mattis nisi neque, eu luctus leo dignissim ac. Phasellus dignissim finibus consequat. Praesent magna augue.",
      imageSrc: "",
      tags: [],
    },
    {
      id: 9,
      title: "Startups: How-To",
      category: "Startups",
      readingTime: "18 min",
      author: "Mike",
      authorIconSrc:
        "https://media.licdn.com/dms/image/D5603AQFSm0__iEQ8mQ/profile-displayphoto-shrink_100_100/0/1680798526191?e=1697068800&v=beta&t=cLDfMo9iHUvucZuo2IMLhTcsFuDwYS4CoudP9ppFL1I",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in urna nec urna porttitor cursus aliquam quis nunc. Fusce consequat orci mi, a venenatis sem hendrerit non. Curabitur posuere nunc nunc, gravida tempus ipsum facilisis sed. Integer elementum posuere lectus.",
      imageSrc: "",
      tags: [],
    },
    {
      id: 10,
      title: "Angular: Creative Ideas",
      category: "Angular",
      readingTime: "10 min",
      author: "Yana",
      authorIconSrc:
        "https://media.licdn.com/dms/image/D4D03AQFDDm8_RP-qkw/profile-displayphoto-shrink_100_100/0/1678444803801?e=1697068800&v=beta&t=Bglfa5WzfGRsAaazhMzrwSvJGc-VSfkn3tf9D8L2KDE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor odio bibendum nisl blandit porttitor. Aenean iaculis lacinia convallis. Vestibulum consectetur sodales varius. Maecenas eu aliquet risus. Fusce a mauris quam. Etiam imperdiet tellus sem, vel sagittis quam rhoncus non.",
      imageSrc: "",
      tags: [],
    },
    {
      id: 11,
      title: "Java: Online Courses",
      category: "Java",
      readingTime: "13 min",
      author: "Dmytro",
      authorIconSrc:
        "https://media.licdn.com/dms/image/D4D03AQHAgP85JknqKA/profile-displayphoto-shrink_100_100/0/1686751372827?e=1697068800&v=beta&t=YtF84vI2H-XJnkl0upvlslooIhwKlqaVASTrH7yCfeI",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit, nibh et pellentesque pretium, justo elit vestibulum libero, eget finibus lacus nisi in neque. Quisque posuere nibh ac sodales semper. Fusce quam justo, varius euismod tortor sed, porta pulvinar odio.",
      imageSrc: "",
      tags: [],
    },
    {
      id: 12,
      title: "React: Online Courses",
      category: "React",
      readingTime: "18 min",
      author: "Yana",
      authorIconSrc:
        "https://media.licdn.com/dms/image/D4D03AQFDDm8_RP-qkw/profile-displayphoto-shrink_100_100/0/1678444803801?e=1697068800&v=beta&t=Bglfa5WzfGRsAaazhMzrwSvJGc-VSfkn3tf9D8L2KDE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a nisl efficitur, laoreet tortor in, sodales urna. Sed est diam, egestas in dictum at, pharetra non est. Vivamus nibh nunc, finibus ac mi nec, malesuada viverra magna. Suspendisse egestas consequat.",
      imageSrc: "",
      tags: [],
    },
    {
      id: 13,
      title: "Node.js: Creative Ideas",
      category: "Node.js",
      readingTime: "18 min",
      author: "Yuriy",
      authorIconSrc:
        "https://media.licdn.com/dms/image/D4D03AQExYG63eDOhMA/profile-displayphoto-shrink_100_100/0/1687091718713?e=1697068800&v=beta&t=qsNqQ7jdflaaFVJeN8jD_8RqsOw4OFd_KsYyjVa83HU",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula ex, dignissim at interdum sed, imperdiet in quam. Nam aliquet dictum orci, aliquet tristique nibh vestibulum at. In eu placerat magna. Duis quis lacus mattis, iaculis sapien vitae, feugiat ante.",
      imageSrc: "",
      tags: [],
    },
  ];

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
    blogsData: blogsData,
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
    // sliderRef,
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
        <ServiceHeadingComponent headingText="Blog" container={true} />
      </div>

      <div className={s.container}>
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
            <BlogExtendedCardComponent
              key={blog.id}
              id={blog.id}
              category={blog.category}
              title={blog.title}
              author={blog.author}
              authorIconSrc={blog.authorIconSrc}
              readingTime={blog.readingTime}
              text={blog.text}
              imageSrc={blog.imageSrc}
              tags={blog.tags}
            />
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
