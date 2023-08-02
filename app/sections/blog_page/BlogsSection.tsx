import React from "react";
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
      title: "Blog 13",
      content: "1 Technology: Tech News",
      category: "Technology",
    },
    {
      id: 14,
      title: "Blog 14",
      content: "2 Development: Dev Tips",
      category: "Development",
    },
    {
      id: 15,
      title: "Blog 15",
      content: "3 Guides: How-To",
      category: "Guides",
    },
    {
      id: 16,
      title: "Blog 16",
      content: "4 Design: Creative Ideas",
      category: "Design",
    },
    {
      id: 17,
      title: "Blog 17",
      content: "5 E-learning: Online Courses",
      category: "E-learning",
    },
    {
      id: 18,
      title: "Blog 18",
      content: "6 Finance: Money Management",
      category: "Finance",
    },
    {
      id: 19,
      title: "Blog 19",
      content: "7 Supply chain: Supply chain News",
      category: "Supply chain",
    },
    {
      id: 20,
      title: "Blog 20",
      content: "8 Healthcare: Healthcare Tips",
      category: "Healthcare",
    },
    {
      id: 21,
      title: "Blog 21",
      content: "9 Startups: How-To",
      category: "Startups",
    },
    {
      id: 22,
      title: "Blog 22",
      content: "10 Angular: Creative Ideas",
      category: "Angular",
    },
    {
      id: 23,
      title: "Blog 23",
      content: "11 Java: Online Courses",
      category: "Java",
    },
    {
      id: 24,
      title: "Blog 24",
      content: "12 React: Money Management",
      category: "React",
    },
    {
      id: 25,
      title: "Blog 25",
      content: "1 Technology: Tech News",
      category: "Technology",
    },
    {
      id: 26,
      title: "Blog 26",
      content: "2 Development: Dev Tips",
      category: "Development",
    },
    {
      id: 27,
      title: "Blog 27",
      content: "3 Guides: How-To",
      category: "Guides",
    },
    {
      id: 28,
      title: "Blog 28",
      content: "4 Design: Creative Ideas",
      category: "Design",
    },
    {
      id: 29,
      title: "Blog 29",
      content: "5 E-learning: Online Courses",
      category: "E-learning",
    },
    {
      id: 30,
      title: "Blog 30",
      content: "6 Finance: Money Management",
      category: "Finance",
    },
    {
      id: 31,
      title: "Blog 31",
      content: "7 Supply chain: Supply chain News",
      category: "Supply chain",
    },
    {
      id: 32,
      title: "Blog 32",
      content: "8 Healthcare: Healthcare Tips",
      category: "Healthcare",
    },
    {
      id: 33,
      title: "Blog 33",
      content: "9 Startups: How-To",
      category: "Startups",
    },
    {
      id: 34,
      title: "Blog 34",
      content: "10 Angular: Creative Ideas",
      category: "Angular",
    },
    {
      id: 35,
      title: "Blog 35",
      content: "11 Java: Online Courses",
      category: "Java",
    },
    {
      id: 36,
      title: "Blog 36",
      content: "12 React: Money Management",
      category: "React",
    },
    {
      id: 37,
      title: "Blog 37",
      content: "1 Technology: Tech News",
      category: "Technology",
    },
    {
      id: 38,
      title: "Blog 38",
      content: "2 Development: Dev Tips",
      category: "Development",
    },
    {
      id: 39,
      title: "Blog 39",
      content: "3 Guides: How-To",
      category: "Guides",
    },
    {
      id: 40,
      title: "Blog 40",
      content: "4 Design: Creative Ideas",
      category: "Design",
    },
    {
      id: 41,
      title: "Blog 41",
      content: "5 E-learning: Online Courses",
      category: "E-learning",
    },
    {
      id: 42,
      title: "Blog 42",
      content: "6 Finance: Money Management",
      category: "Finance",
    },
    {
      id: 43,
      title: "Blog 43",
      content: "7 Supply chain: Supply chain News",
      category: "Supply chain",
    },
    {
      id: 44,
      title: "Blog 44",
      content: "8 Healthcare: Healthcare Tips",
      category: "Healthcare",
    },
    {
      id: 45,
      title: "Blog 45",
      content: "9 Startups: How-To",
      category: "Startups",
    },
    {
      id: 46,
      title: "Blog 46",
      content: "10 Angular: Creative Ideas",
      category: "Angular",
    },
    {
      id: 47,
      title: "Blog 47",
      content: "11 Java: Online Courses",
      category: "Java",
    },
    {
      id: 48,
      title: "Blog 48",
      content: "12 React: Money Management",
      category: "React",
    },
    {
      id: 49,
      title: "Blog 49",
      content: "1 Technology: Tech News",
      category: "Technology",
    },
    {
      id: 50,
      title: "Blog 50",
      content: "2 Development: Dev Tips",
      category: "Development",
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
    handleFirstPage,
    handleLastPage,
    showPreviousButton,
    showNextButton,
    setCurrentPage,
  } = useBlogPagination({
    totalItems: filteredBlogsData?.length || 0,
    itemsPerPage: blogsPerPage,
  });

  const currentBlogs = filteredBlogsData?.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

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
        {[
          "All articles",
          "Technology",
          "Development",
          "Guides",
          "Design",
          "E-learning",
          "Finance",
          // "Startups",
          // "Angular",
          // "React",
          // "Node.js",
          // "Java",
          // ".Net",
          // "Blockchain",
        ].map((category) => (
          <BlogFilterButton
            key={category}
            text={category}
            active={
              selectedCategory === category ||
              (category === "All articles" && selectedCategory === null)
            }
            onClick={() =>
              handleCategoryChange(
                category === "All articles" ? null : category
              )
            }
          />
        ))}
      </div>

      <div className={s.blog__cards}>
        <BlogExtendedCardComponent
          title=""
          author=""
          authorIconSrc=""
          readingTime=""
          text=""
          imageSrc=""
        />
      </div>

      {/* <div className={s.blog__cards}>
        {currentBlogs.map((blog) => (
          <div key={blog.id} className={s.blog__card}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>Category: {blog.category}</p>
          </div>
        ))}
      </div> */}

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

        {/* Render the page numbers */}
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
