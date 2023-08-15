import { FC } from "react";
import s from "./BlogArticleComponent.module.scss";
import Image from "next/image";

interface ArticleProps {
  title: string;
  description: string;
  id: string;
  image?: string;
}

export const Article: FC<ArticleProps> = (article) => {
  return (
    <div className={s.article}>
      <h3 className={s.article__title} id={article.id}>
        {article.title}
      </h3>
      <p className={s.article__descripcion}>{article.description}</p>
      {article.image && (
        <div className={s.article__image}>
          <Image
            width={800}
            height={600}
            className={s.image}
            src={article.image}
            alt={article.title}
          />
        </div>
      )}
    </div>
  );
};
