import { useState, useCallback, useMemo } from "react";

interface Blog {
  id: string | number;
  title: string;
  category?: string;
  readingTime: string;
  author?: string;
  authorId: string;
  authorIconSrc?: string;
  text: string;
  imageSrc: string;
  tags: string[];
}

interface UseBlogFilterProps {
  blogsData: Blog[];
  blogsPerPage: number;
  setCurrentPage: (page: number) => void;
}

const useBlogFilter = ({
  blogsData,
  blogsPerPage,
  setCurrentPage,
}: UseBlogFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = useCallback(
    (category: string | null): void => {
      setSelectedCategory(category);
      setCurrentPage(1);
    },
    [setCurrentPage]
  );

  const filteredBlogsData = useMemo(
    () =>
      selectedCategory
        ? blogsData.filter((blog) => blog.category === selectedCategory)
        : blogsData,
    [blogsData, selectedCategory]
  );

  const totalPagesForSelectedCategory = useMemo(
    () => Math.max(1, Math.ceil(filteredBlogsData.length / blogsPerPage)),
    [filteredBlogsData.length, blogsPerPage]
  );

  return {
    selectedCategory,
    handleCategoryChange,
    filteredBlogsData,
    totalPagesForSelectedCategory,
  };
};

export default useBlogFilter;
