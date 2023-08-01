import { useState, useEffect } from "react";

// Тип для функції, яка змінює поточну сторінку
type HandlePageChangeFn = (page: number) => void;

// Тип для функції, яка повертає масив номерів сторінок для показу у пагінації
type GetPageNumbersToShowFn = () => number[];

// Інтерфейс для пропсів, які повертає хук useBlogPagination
export interface PaginationProps {
  currentPage: number; // Поточна сторінка
  totalPages: number; // Загальна кількість сторінок
  currentBlogs: Blog[]; // Масив блогів, які потрібно показати на поточній сторінці
  getPageNumbersToShow: GetPageNumbersToShowFn; // Функція для отримання номерів сторінок для показу у пагінації
  handlePageChange: HandlePageChangeFn; // Функція для зміни поточної сторінки
  handleFirstPage: () => void; // Функція для переходу на першу сторінку
  handleLastPage: () => void; // Функція для переходу на останню сторінку
  handlePreviousPage: () => void; // Функція для переходу на попередню сторінку
  handleNextPage: () => void; // Функція для переходу на наступну сторінку
}

// Інтерфейс для об'єкту блогу
export interface Blog {
  id: number; // Ідентифікатор блогу
  title: string; // Заголовок блогу
  content: string; // Зміст блогу
  category: string; // Категорія блогу
}

const useBlogPagination = (blogsData: Blog[], blogsPerPage: number) => {
  // Стейт для збереження поточної сторінки
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Стейт для збереження блогів, які пройшли фільтрацію
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

  // Стейт для збереження загальної кількості сторінок
  const [totalPages, setTotalPages] = useState<number>(1);

  // Ефект, який викликається при зміні масиву блогів (blogsData)
  useEffect(() => {
    // Оновлюємо масив блогів, які пройшли фільтрацію, і ставимо поточну сторінку на першу
    setFilteredBlogs(blogsData);
    setCurrentPage(1);
  }, [blogsData]);

  // Ефект, який викликається при зміні масиву блогів, які пройшли фільтрацію (filteredBlogs) або кількості блогів на сторінці (blogsPerPage)
  useEffect(() => {
    setTotalPages(Math.ceil(filteredBlogs.length / blogsPerPage));
  }, [filteredBlogs, blogsPerPage]);

  // Функція для зміни поточної сторінки
  const handlePageChange: HandlePageChangeFn = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Функція, яка повертає масив номерів сторінок для показу у пагінації
  const getPageNumbersToShow: GetPageNumbersToShowFn = () => {
    const pageNumbers: number[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const currentPageNumber = currentPage;

      let startPage = Math.max(currentPageNumber - 1, 1);
      let endPage = Math.min(startPage + 2, totalPages);

      if (endPage - startPage < 2) {
        endPage = Math.min(startPage + 2, totalPages);
        startPage = Math.max(endPage - 2, 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  // Функція для переходу на першу сторінку
  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  // Функція для переходу на останню сторінку
  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  // Функція для переходу на попередню сторінку
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Функція для переходу на наступну сторінку
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Отримуємо блоги для поточної сторінки
  const currentBlogs: Blog[] = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  // Повертаємо об'єкт зі змінними та функціями, які можуть знадобитися в компоненті, що використовує цей хук
  return {
    currentPage,
    totalPages,
    currentBlogs,
    getPageNumbersToShow,
    handlePageChange,
    handleFirstPage,
    handleLastPage,
    handlePreviousPage,
    handleNextPage,
    filteredBlogs,
  };
};

export default useBlogPagination;
