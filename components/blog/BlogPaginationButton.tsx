import React from "react";
import s from "@/app/sections/blog_page/BlogsSection.module.scss";
import classNames from "classnames";

interface Props {
  text: string;
  activePagination: boolean;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const BlogPaginationButton: React.FC<Props> = ({
  text,
  activePagination,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={classNames(s.pagination__button, {
        [s.activePagination]: activePagination,
        [s.disabled]: disabled,
      })}
      onClick={() => {
        onClick(); // Виклик функції при кліку
        window.scrollTo(0, 0); // Прокрутка нагору
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default BlogPaginationButton;
