import { useState } from "react";
import s from "./BlogsSection.module.scss";
import classNames from "classnames";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";

interface Blog {
  id: number;
  title: string;
  content: string;
  category: string;
}

const FilterButton: React.FC<{
  text: string;
  active: boolean;
  onClick: () => void;
}> = ({ text, active, onClick }) => {
  return (
    <button
      className={classNames(s.filter__button, { [s.active]: active })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const PaginationButton: React.FC<{
  text: string;
  active: boolean;
  onClick: () => void;
}> = ({ text, active, onClick }) => {
  return (
    <button
      className={classNames(s.pagination__button, { [s.active]: active })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

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
    { id: 3, title: "Blog 3", content: "3 Guides: How-To", category: "Guides" },
    {
      id: 4,
      title: "Blog 4",
      content: "4 Design: Creative Ideas",
      category: "Designe",
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
      content: "1 Technology: Tech News",
      category: "Technology",
    },
    {
      id: 8,
      title: "Blog 8",
      content: "2 Development: Dev Tips",
      category: "Development",
    },
    { id: 9, title: "Blog 9", content: "3 Guides: How-To", category: "Guides" },
    {
      id: 10,
      title: "Blog 10",
      content: "4 Design: Creative Ideas",
      category: "Designe",
    },
    {
      id: 11,
      title: "Blog 11",
      content: "5 E-learning: Online Courses",
      category: "E-learning",
    },
    {
      id: 12,
      title: "Blog 12",
      content: "6 Finance: Money Management",
      category: "Finance",
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
      category: "Designe",
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
      content: "1 Technology: Tech News",
      category: "Technology",
    },
    {
      id: 20,
      title: "Blog 20",
      content: "2 Development: Dev Tips",
      category: "Development",
    },
    {
      id: 21,
      title: "Blog 21",
      content: "3 Guides: How-To",
      category: "Guides",
    },
    {
      id: 22,
      title: "Blog 22",
      content: "4 Design: Creative Ideas",
      category: "Designe",
    },
    {
      id: 23,
      title: "Blog 23",
      content: "5 E-learning: Online Courses",
      category: "E-learning",
    },
    {
      id: 24,
      title: "Blog 24",
      content: "6 Finance: Money Management",
      category: "Finance",
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
      category: "Designe",
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
      content: "1 Technology: Tech News",
      category: "Technology",
    },
    {
      id: 32,
      title: "Blog 32",
      content: "2 Development: Dev Tips",
      category: "Development",
    },
    {
      id: 33,
      title: "Blog 33",
      content: "3 Guides: How-To",
      category: "Guides",
    },
    {
      id: 34,
      title: "Blog 34",
      content: "4 Design: Creative Ideas",
      category: "Designe",
    },
    {
      id: 35,
      title: "Blog 35",
      content: "5 E-learning: Online Courses",
      category: "E-learning",
    },
    {
      id: 36,
      title: "Blog 36",
      content: "6 Finance: Money Management",
      category: "Finance",
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
      category: "Designe",
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
      content: "1 Technology: Tech News",
      category: "Technology",
    },
    {
      id: 44,
      title: "Blog 44",
      content: "2 Development: Dev Tips",
      category: "Development",
    },
    {
      id: 45,
      title: "Blog 45",
      content: "3 Guides: How-To",
      category: "Guides",
    },
    {
      id: 46,
      title: "Blog 46",
      content: "4 Design: Creative Ideas",
      category: "Designe",
    },
    {
      id: 47,
      title: "Blog 47",
      content: "5 E-learning: Online Courses",
      category: "E-learning",
    },
    {
      id: 48,
      title: "Blog 48",
      content: "6 Finance: Money Management",
      category: "Finance",
    },
    {
      id: 49,
      title: "Blog 49",
      content: "6 Finance: Money Management",
      category: "Finance",
    },
    {
      id: 50,
      title: "Blog 50",
      content: "1 Technology: Tech News",
      category: "Technology",
    },
    {
      id: 51,
      title: "Blog 51",
      content: "2 Development: Dev Tips",
      category: "Development",
    },
    {
      id: 52,
      title: "Blog 52",
      content: "3 Guides: How-To",
      category: "Guides",
    },
    {
      id: 53,
      title: "Blog 53",
      content: "4 Design: Creative Ideas",
      category: "Designe",
    },
    {
      id: 54,
      title: "Blog 54",
      content: "5 E-learning: Online Courses",
      category: "E-learning",
    },
    {
      id: 55,
      title: "Blog 55",
      content: "6 Finance: Money Management",
      category: "Finance",
    },
    {
      id: 56,
      title: "Blog 56",
      content: "1 Technology: Tech News",
      category: "Technology",
    },
    {
      id: 57,
      title: "Blog 57",
      content: "2 Development: Dev Tips",
      category: "Development",
    },
    {
      id: 58,
      title: "Blog 58",
      content: "3 Guides: How-To",
      category: "Guides",
    },
    {
      id: 59,
      title: "Blog 59",
      content: "4 Design: Creative Ideas",
      category: "Designe",
    },
    {
      id: 60,
      title: "Blog 60",
      content: "5 E-learning: Online Courses",
      category: "E-learning",
    },
    {
      id: 61,
      title: "Blog 61",
      content: "6 Finance: Money Management",
      category: "Finance",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const blogsPerPage = 6;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredBlogs = selectedCategory
    ? blogsData.filter((blog) => blog.category === selectedCategory)
    : blogsData;

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const getPageNumbersToShow = () => {
    const totalPagesToShow = 5;

    if (totalPages <= totalPagesToShow) {
      return Array.from({ length: totalPages }).map((_, index) => index + 1);
    }

    const currentPageIndex = currentPage - 1;
    const middlePageIndex = Math.floor(totalPagesToShow / 2);
    let startPageIndex = currentPageIndex - middlePageIndex;
    let endPageIndex = currentPageIndex + middlePageIndex;

    if (currentPageIndex < middlePageIndex) {
      startPageIndex = 0;
      endPageIndex = totalPagesToShow - 1;
    } else if (currentPageIndex > totalPages - middlePageIndex - 1) {
      startPageIndex = totalPages - totalPagesToShow;
      endPageIndex = totalPages - 1;
    } else {
      startPageIndex = currentPageIndex - middlePageIndex + 1;
      endPageIndex = currentPageIndex + middlePageIndex;
    }

    return Array.from({ length: endPageIndex - startPageIndex + 1 }).map(
      (_, index) => startPageIndex + index + 1
    );
  };

  const handleFirstPage = () => {
    handlePageChange(1);
  };

  const handleLastPage = () => {
    handlePageChange(totalPages);
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
        {[
          "All articles",
          "Technology",
          "Development",
          "Guides",
          "Designe",
          "E-learning",
          "Finance",
        ].map((category) => (
          <FilterButton
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
        {currentBlogs.map((blog) => (
          <div key={blog.id} className={s.blog__card}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>Category: {blog.category}</p>
          </div>
        ))}
      </div>

      <div className={s.pagination}>
        <PaginationButton
          key={"first"}
          text={"First"}
          active={false}
          onClick={handleFirstPage}
        />

        {currentPage > 2 && (
          <>
            <PaginationButton
              key={1}
              text={"1"}
              active={currentPage === 1}
              onClick={() => handlePageChange(1)}
            />
            {currentPage > 3 && <span className={s.pagination__dot}>...</span>}
          </>
        )}

        {getPageNumbersToShow().map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            text={String(pageNumber)}
            active={pageNumber === currentPage}
            onClick={() => handlePageChange(pageNumber)}
          />
        ))}

        {currentPage < totalPages - 2 && (
          <>
            {currentPage < totalPages - 3 && (
              <span className={s.pagination__dot}>...</span>
            )}
            <PaginationButton
              key={totalPages}
              text={String(totalPages)}
              active={currentPage === totalPages}
              onClick={() => handlePageChange(totalPages)}
            />
          </>
        )}

        <PaginationButton
          key={"last"}
          text={"Last"}
          active={false}
          onClick={handleLastPage}
        />
      </div>
    </section>
  );
};

export default BlogsSection;
