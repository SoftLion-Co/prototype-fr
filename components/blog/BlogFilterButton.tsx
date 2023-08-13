import React from "react";
import s from "@/components/blog/BlogFilterButton.module.scss";


import classNames from "classnames";

interface Props {
  text: string;
  activeFilter: boolean;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const BlogFilterButton: React.FC<Props> = ({
  text,
  activeFilter,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      className={classNames(s.filter__button, className, {
        [s.activeFilter]: activeFilter,
        [s.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default BlogFilterButton;
