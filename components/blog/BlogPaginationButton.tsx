import s from "@/app/sections/blog_page/BlogsSection.module.scss";
import classNames from "classnames";

interface BlogPaginationButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

const BlogPaginationButton: React.FC<BlogPaginationButtonProps> = ({
  text,
  active,
  onClick,
}) => {
  return (
    <button
      className={classNames(s.pagination__button, { [s.active]: active })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BlogPaginationButton;
