import { FC } from "react";

interface ArticleProps {
  article: {
    title: string;
    description: string;
    id: string;
  };
}

export const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <div>
      <h3 id={article.id}>{article.title}</h3>
      <p>{article.description}</p>
    </div>
  );
};
