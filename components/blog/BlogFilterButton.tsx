import s from "@/app/sections/blog_page/BlogsSection.module.scss";
import classNames from "classnames";

interface BlogFilterButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

const BlogFilterButton: React.FC<BlogFilterButtonProps> = ({
  text,
  active,
  onClick,
}) => {
  return (
    <button
      className={classNames(s.filter__button, { [s.active]: active })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BlogFilterButton;
