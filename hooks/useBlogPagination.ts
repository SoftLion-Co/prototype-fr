import { useState, useCallback, useMemo } from "react";

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

  const totalPages = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [totalItems, itemsPerPage]
  );

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const handleLastPage = useCallback(() => {
    setCurrentPage(totalPages);
  }, [totalPages]);

  const showPreviousButton = useCallback(() => {
    return currentPage > 1;
  }, [currentPage]);

  const showNextButton = useCallback(() => {
    return currentPage < totalPages;
  }, [currentPage, totalPages]);

  const getPageNumbersToShow = useCallback(() => {
    const visiblePages = [];
    const totalPagesToShow = Math.min(5, totalPages);

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
  }, [currentPage, totalPages]);

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
