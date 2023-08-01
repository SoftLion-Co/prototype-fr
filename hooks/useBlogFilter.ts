import { useState } from "react";
import useBlogPagination, { Blog, PaginationProps } from "./useBlogPagination";

type HandleCategoryChangeFn = (category: string | null) => void;

export interface FilteredPaginationProps extends PaginationProps {
  selectedCategory: string | null;
  handleCategoryChange: HandleCategoryChangeFn;
  filteredBlogs: Blog[];
}

const useBlogFilter = (blogsData: Blog[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange: HandleCategoryChangeFn = (category) => {
    setSelectedCategory(category);
  };

  const blogsPerPage = 6;

  const filteredBlogs: Blog[] = selectedCategory
    ? blogsData.filter((blog) => blog.category === selectedCategory)
    : blogsData;

  const paginationProps = useBlogPagination(filteredBlogs, blogsPerPage);

  return {
    ...paginationProps,
    selectedCategory,
    handleCategoryChange,
    filteredBlogs,
  };
};

export default useBlogFilter;
