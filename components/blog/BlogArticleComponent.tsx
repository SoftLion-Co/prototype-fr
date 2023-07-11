import { FC } from "react";
import s from "./BlogArticleComponent.module.scss";

interface ArticleProps {
  article: {
    title: string;
    description: string;
    id: string;
  };
}

export const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <div className={s.article}>
      <h3 className={s.article_title} id={article.id}>
        {article.title}
      </h3>
      <p className={s.article_descripcion}>{article.description}</p>
    </div>
  );
};
