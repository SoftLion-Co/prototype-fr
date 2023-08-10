import { useState } from "react";

// interface Blog {
//   id: number;
//   title: string;
//   content: string;
//   category: string;
// }

interface UseBlogPaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

interface UseBlogPaginationResult {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
  getPageNumbersToShow: () => number[];
  handleFirstPage: () => void;
  handleLastPage: () => void;
  showPreviousButton: () => boolean;
  showNextButton: () => boolean;
  setCurrentPage: (page: number) => void;
}

const useBlogPagination = ({
  totalItems,
  itemsPerPage,
}: UseBlogPaginationProps): UseBlogPaginationResult => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const totalPagesToShow = Math.min(5, totalPages);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getPageNumbersToShow = () => {
    const visiblePages = [];

    let startIndex = currentPage - Math.floor(totalPagesToShow / 2);
    let endIndex = currentPage + Math.floor(totalPagesToShow / 2);

    if (startIndex < 1) {
      startIndex = 1;
      endIndex = Math.min(totalPages, totalPagesToShow);
    }

    if (endIndex > totalPages) {
      endIndex = totalPages;
      startIndex = Math.max(1, totalPages - totalPagesToShow + 1);
    }

    for (let i = startIndex; i <= endIndex; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const showPreviousButton = () => {
    return true;
  };

  const showNextButton = () => {
    return true;
  };

  return {
    currentPage,
    totalPages,
    handlePageChange,
    getPageNumbersToShow,
    handleFirstPage,
    handleLastPage,
    showPreviousButton,
    showNextButton,
    setCurrentPage,
  };
};

export default useBlogPagination;
