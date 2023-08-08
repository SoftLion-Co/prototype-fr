import React, { useState, useRef, useEffect } from "react";
import s from "./BlogsSection.module.scss";
import classNames from "classnames";
import BlogExtendedCardComponent from "@/components/blog/BlogExtendedCardComponent";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import BlogFilterButton from "@/components/blog/BlogFilterButton";
import BlogPaginationButton from "@/components/blog/BlogPaginationButton";
import useBlogPagination from "@/hooks/useBlogPagination";
import useBlogFilter from "@/hooks/useBlogFilter";

interface Blog {
  id: number;
  title: string;
  content: string;
  category: string;
}

const BlogsSection = () => {
  // TEST OBJECT
  const blogsData: Blog[] = [
    {
      id: 1,
      title: "Blog 1",
      content: "1 Technology: Tech News",
      category: "Technology",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "2 Development: Dev Tips",
      category: "Development",
    },
    {
      id: 3,
      title: "Blog 3",
      content: "3 Guides: How-To",
      category: "Guides",
    },
    {
      id: 4,
      title: "Blog 4",
      content: "4 Design: Creative Ideas",
      category: "Design",
    },
    {
      id: 5,
      title: "Blog 5",
      content: "5 E-learning: Online Courses",
      category: "E-learning",
    },
    {
      id: 6,
      title: "Blog 6",
      content: "6 Finance: Money Management",
      category: "Finance",
    },
    {
      id: 7,
      title: "Blog 7",
      content: "7 Supply chain: Supply chain News",
      category: "Supply chain",
    },
    {
      id: 8,
      title: "Blog 8",
      content: "8 Healthcare: Healthcare Tips",
      category: "Healthcare",
    },
    {
      id: 9,
      title: "Blog 9",
      content: "9 Startups: How-To",
      category: "Startups",
    },
    {
      id: 10,
      title: "Blog 10",
      content: "10 Angular: Creative Ideas",
      category: "Angular",
    },
    {
      id: 11,
      title: "Blog 11",
      content: "11 Java: Online Courses",
      category: "Java",
    },
    {
      id: 12,
      title: "Blog 12",
      content: "12 React: Money Management",
      category: "React",
    },
    {
      id: 13,
      title: "Blog 1",
      content: "1 Technology: Tech News",
      category: "Technology",
    },
    {
      id: 14,
      title: "Blog 2",
      content: "2 Development: Dev Tips",
      category: "Development",
    },
    {
      id: 15,
      title: "Blog 3",
      content: "3 Guides: How-To",
      category: "Guides",
    },
    {
      id: 16,
      title: "Blog 4",
      content: "4 Design: Creative Ideas",
      category: "Design",
    },
    {
      id: 17,
      title: "Blog 5",
      content: "5 E-learning: Online Courses",
      category: "E-learning",
    },
    {
      id: 18,
      title: "Blog 6",
      content: "6 Finance: Money Management",
      category: "Finance",
    },
    {
      id: 19,
      title: "Blog 7",
      content: "7 Supply chain: Supply chain News",
      category: "Supply chain",
    },
    {
      id: 20,
      title: "Blog 8",
      content: "8 Healthcare: Healthcare Tips",
      category: "Healthcare",
    },
    {
      id: 21,
      title: "Blog 9",
      content: "9 Startups: How-To",
      category: "Startups",
    },
    {
      id: 22,
      title: "Blog 10",
      content: "10 Angular: Creative Ideas",
      category: "Angular",
    },
    {
      id: 23,
      title: "Blog 11",
      content: "11 Java: Online Courses",
      category: "Java",
    },
    {
      id: 24,
      title: "Blog 12",
      content: "12 React: Money Management",
      category: "React",
    },
  ];

  const blogsPerPage = 6;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const {
    selectedCategory,
    handleCategoryChange,
    filteredBlogsData,
    totalPagesForSelectedCategory,
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

  const categories = [
    "All articles",
    "Technology",
    "Development",
    "Guides",
    "Design",
    "E-learning",
    "Finance",
    "Startups",
    "Angular",
    "React",
    "Node.js",
    "Java",
    ".Net",
    "Blockchain",
  ];

  const currentBlogs = filteredBlogsData?.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  // Carousel state and handlers
  const [sliderPosition, setSliderPosition] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemsToShow = 7;
  const totalItems = filteredBlogsData.length;

  const handleSliderNext = () => {
    const maxPosition = Math.max(0, categories.length - itemsToShow);
    const newPosition = Math.min(sliderPosition + 7, maxPosition);
    setSliderPosition(newPosition);
    scrollToPosition(newPosition);
  };

  const handleSliderPrev = () => {
    const newPosition = Math.max(0, sliderPosition - 7);
    setSliderPosition(newPosition);
    scrollToPosition(newPosition);
  };

  const scrollToPosition = (position: number) => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      const width = sliderElement.getBoundingClientRect().width;
      sliderElement.scrollTo({
        left: position * (width + 30),
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const x = e.clientX;
    const moveX = startX - x;
    const sliderElement = sliderRef.current;

    if (sliderElement) {
      const width = sliderElement.getBoundingClientRect().width;
      const maxPosition = Math.max(0, totalItems - itemsToShow);
      const newPosition = sliderPosition + (moveX / width) * itemsToShow;

      if (newPosition >= 0 && newPosition <= maxPosition) {
        setSliderPosition(Math.round(newPosition));
      }
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const moveX = startX - x;
    const sliderElement = sliderRef.current;

    if (sliderElement) {
      const width = sliderElement.getBoundingClientRect().width;
      const maxPosition = Math.max(0, totalItems - itemsToShow);
      const newPosition = sliderPosition + (moveX / width) * itemsToShow;

      if (newPosition >= 0 && newPosition <= maxPosition) {
        setSliderPosition(Math.round(newPosition)); // Use Math.round for smoother sliding
      }
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    } else {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, handleTouchMove, handleTouchEnd]);

  const visibleCategories = categories.slice(
    sliderPosition,
    Math.min(sliderPosition + itemsToShow, categories.length)
  );

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryChangeInternal = (category: string | null) => {
    if (category === null) {
      setActiveCategory(null);
      setCurrentPage(1);
      handleCategoryChange(null);
    } else {
      setActiveCategory(category);
      setCurrentPage(1);
      handleCategoryChange(category);

      const categoryIndex = categories.indexOf(category);
      if (categoryIndex > -1 && categoryIndex >= sliderPosition + itemsToShow) {
        setSliderPosition(categoryIndex - itemsToShow + 1);
      } else if (categoryIndex > -1 && categoryIndex < sliderPosition) {
        setSliderPosition(categoryIndex);
      }
    }
  };

  return (
    <section className={classNames(s.blog, s.container)}>
      <div className={s.blog__hero}>
        <div className={s.blog__title}>
          <ServiceHeadingComponent headingText="Blog" container={true} />
        </div>

        <p className={s.blog__paragraph}>
          Our blog is a valuable resource that we provide to our clients and
          anyone interested in the field of technology. In our blog, you will
          find a wide range of interesting and relevant articles, practical
          tips, and news related to website development, mobile applications,
          and software.
        </p>
      </div>

      <div className={s.blog__filter}>
        <div className={s.blog__filter__carousel} ref={sliderRef}>
          {visibleCategories.map((category, index) => (
            <BlogFilterButton
              key={index}
              text={category}
              active={
                activeCategory === category ||
                (category === "All articles" && activeCategory === null)
              }
              onClick={() =>
                handleCategoryChangeInternal(
                  category === "All articles" ? null : category
                )
              }
            />
          ))}
        </div>

        <div className={s.blog__filter__controls}>
          <button
            className={classNames(s.blog__filter__indicator, {
              [s.visible]: sliderPosition > 0,
            })}
            onClick={handleSliderPrev}
          >
            &lt;
          </button>
          <button
            className={classNames(s.blog__filter__indicator, {
              [s.visible]: sliderPosition < totalItems - itemsToShow,
            })}
            onClick={handleSliderNext}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* <div className={s.blog__cards}>
        <BlogExtendedCardComponent
          title=""
          author=""
          authorIconSrc=""
          readingTime=""
          text=""
          imageSrc=""
        />
      </div> */}

      <div className={s.blog__cards}>
        {currentBlogs.map((blog) => (
          <div key={blog.id} className={s.blog__card}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>Category: {blog.category}</p>
          </div>
        ))}
      </div>

      <div className={s.pagination}>
        <BlogPaginationButton
          key={"first"}
          text={"First"}
          active={false}
          onClick={() => handlePageChange(1)}
        />

        {showPreviousButton() && (
          <BlogPaginationButton
            key={"previous"}
            text={"◁"}
            active={false}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        )}

        {getPageNumbersToShow().map((pageNumber) => (
          <BlogPaginationButton
            key={pageNumber}
            text={String(pageNumber)}
            active={pageNumber === currentPage}
            onClick={() => handlePageChange(pageNumber)}
          />
        ))}

        {showNextButton() && (
          <BlogPaginationButton
            key={"next"}
            text={"▷"}
            active={false}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        )}

        <BlogPaginationButton
          key={"last"}
          text={"Last"}
          active={false}
          onClick={() => handlePageChange(totalPages)}
        />
      </div>
    </section>
  );
};

export default BlogsSection;

// import React from "react";
// import s from "./BlogsSection.module.scss";
// import classNames from "classnames";
// import BlogExtendedCardComponent from "@/components/blog/BlogExtendedCardComponent";
// import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
// import BlogFilterButton from "@/components/blog/BlogFilterButton";
// import BlogPaginationButton from "@/components/blog/BlogPaginationButton";
// import useBlogPagination from "@/hooks/useBlogPagination";
// import useBlogFilter from "@/hooks/useBlogFilter";
// import useBlogCategoryToggle from "@/hooks/useBlogCategoryToggle";

// interface Blog {
//   id: number;
//   title: string;
//   content: string;
//   category: string;
// }

// const BlogsSection = () => {
//   // TEST OBJECT
//   const blogsData: Blog[] = [
//     {
//       id: 1,
//       title: "Blog 1",
//       content: "1 Technology: Tech News",
//       category: "Technology",
//     },
//     {
//       id: 2,
//       title: "Blog 2",
//       content: "2 Development: Dev Tips",
//       category: "Development",
//     },
//     {
//       id: 3,
//       title: "Blog 3",
//       content: "3 Guides: How-To",
//       category: "Guides",
//     },
//     {
//       id: 4,
//       title: "Blog 4",
//       content: "4 Design: Creative Ideas",
//       category: "Design",
//     },
//     {
//       id: 5,
//       title: "Blog 5",
//       content: "5 E-learning: Online Courses",
//       category: "E-learning",
//     },
//     {
//       id: 6,
//       title: "Blog 6",
//       content: "6 Finance: Money Management",
//       category: "Finance",
//     },
//     {
//       id: 7,
//       title: "Blog 7",
//       content: "7 Supply chain: Supply chain News",
//       category: "Supply chain",
//     },
//     {
//       id: 8,
//       title: "Blog 8",
//       content: "8 Healthcare: Healthcare Tips",
//       category: "Healthcare",
//     },
//     {
//       id: 9,
//       title: "Blog 9",
//       content: "9 Startups: How-To",
//       category: "Startups",
//     },
//     {
//       id: 10,
//       title: "Blog 10",
//       content: "10 Angular: Creative Ideas",
//       category: "Angular",
//     },
//     {
//       id: 11,
//       title: "Blog 11",
//       content: "11 Java: Online Courses",
//       category: "Java",
//     },
//     {
//       id: 12,
//       title: "Blog 12",
//       content: "12 React: Money Management",
//       category: "React",
//     },
//   ];

//   const blogsPerPage = 6;

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const {
//     selectedCategory,
//     handleCategoryChange,
//     filteredBlogsData,
//     totalPagesForSelectedCategory,
//   } = useBlogFilter({
//     blogsData: blogsData,
//     blogsPerPage: blogsPerPage,
//     setCurrentPage: handlePageChange,
//   });

//   const {
//     currentPage,
//     totalPages,
//     getPageNumbersToShow,
//     showPreviousButton,
//     showNextButton,
//     setCurrentPage,
//   } = useBlogPagination({
//     totalItems: filteredBlogsData?.length || 0,
//     itemsPerPage: blogsPerPage,
//   });

//   const categories = [
//     "All articles",
//     "Technology",
//     "Development",
//     "Guides",
//     "Design",
//     "E-learning",
//     "Finance",
//     "Startups",
//     "Angular",
//     "React",
//     "Node.js",
//     "Java",
//     ".Net",
//     "Blockchain",
//   ];

//   const currentBlogs = filteredBlogsData?.slice(
//     (currentPage - 1) * blogsPerPage,
//     currentPage * blogsPerPage
//   );

//   const totalItems = categories.length; // Чи будь-яке інше значення, що відповідає кількості категорій
//   const itemsToShow = 5; // Аналогічно, встановіть бажану кількість видимих категорій
//   const {
//     sliderRef,
//     visibleCategories,
//     activeCategory,
//     handleSliderNext,
//     handleSliderPrev,
//     handleCategoryChangeInternal,
//   } = useBlogCategoryToggle(categories, totalItems, itemsToShow);

//   return (
//     <section className={classNames(s.blog, s.container)}>
//       <div className={s.blog__hero}>
//         <div className={s.blog__title}>
//           <ServiceHeadingComponent headingText="Blog" container={true} />
//         </div>

//         <p className={s.blog__paragraph}>
//           Our blog is a valuable resource that we provide to our clients and
//           anyone interested in the field of technology. In our blog, you will
//           find a wide range of interesting and relevant articles, practical
//           tips, and news related to website development, mobile applications,
//           and software.
//         </p>
//       </div>

//       <div className={s.blog__filter}>
//         <div className={s.blog__filter__carousel} ref={sliderRef}>
//           {visibleCategories.map((category, index) => (
//             <BlogFilterButton
//               key={index}
//               text={category}
//               active={
//                 activeCategory === category ||
//                 (category === "All articles" && activeCategory === null)
//               }
//               onClick={() =>
//                 handleCategoryChangeInternal(
//                   category === "All articles" ? null : category
//                 )
//               }
//             />
//           ))}
//         </div>

//         <div className={s.blog__filter__controls}>
//           <button
//             className={classNames(s.blog__filter__indicator, {
//               [s.visible]: sliderPosition > 0,
//             })}
//             onClick={handleSliderPrev}
//           >
//             &lt;
//           </button>
//           <button
//             className={classNames(s.blog__filter__indicator, {
//               [s.visible]: sliderPosition < totalItems - itemsToShow,
//             })}
//             onClick={handleSliderNext}
//           >
//             &gt;
//           </button>
//         </div>
//       </div>

//       {/* <div className={s.blog__cards}>
//         <BlogExtendedCardComponent
//           title=""
//           author=""
//           authorIconSrc=""
//           readingTime=""
//           text=""
//           imageSrc=""
//         />
//       </div> */}

//       <div className={s.blog__cards}>
//         {currentBlogs.map((blog) => (
//           <div key={blog.id} className={s.blog__card}>
//             <h3>{blog.title}</h3>
//             <p>{blog.content}</p>
//             <p>Category: {blog.category}</p>
//           </div>
//         ))}
//       </div>

//       <div className={s.pagination}>
//         <BlogPaginationButton
//           key={"first"}
//           text={"First"}
//           active={false}
//           onClick={() => handlePageChange(1)}
//         />

//         {showPreviousButton() && (
//           <BlogPaginationButton
//             key={"previous"}
//             text={"◁"}
//             active={false}
//             onClick={() => handlePageChange(currentPage - 1)}
//           />
//         )}

//         {getPageNumbersToShow().map((pageNumber) => (
//           <BlogPaginationButton
//             key={pageNumber}
//             text={String(pageNumber)}
//             active={pageNumber === currentPage}
//             onClick={() => handlePageChange(pageNumber)}
//           />
//         ))}

//         {showNextButton() && (
//           <BlogPaginationButton
//             key={"next"}
//             text={"▷"}
//             active={false}
//             onClick={() => handlePageChange(currentPage + 1)}
//           />
//         )}

//         <BlogPaginationButton
//           key={"last"}
//           text={"Last"}
//           active={false}
//           onClick={() => handlePageChange(totalPages)}
//         />
//       </div>
//     </section>
//   );
// };

// export default BlogsSection;
