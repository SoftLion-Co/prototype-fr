import { useState } from "react";

interface Blog {
  id: string | number;
  title: string;
  category?:string;
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

const useBlogFilter = (props: UseBlogFilterProps) => {
  const { blogsData, blogsPerPage, setCurrentPage } = props;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBlogsData = selectedCategory
    ? blogsData.filter((blog) => blog.category === selectedCategory)
    : blogsData;

  const totalPagesForSelectedCategory = selectedCategory
    ? Math.max(1, Math.ceil(filteredBlogsData.length / blogsPerPage))
    : Math.ceil(blogsData.length / blogsPerPage);

  const handleCategoryChange = (category: string | null): void => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return {
    selectedCategory,
    handleCategoryChange,
    filteredBlogsData,
    totalPagesForSelectedCategory,
  };
};

export default useBlogFilter;
