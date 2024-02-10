import React, { FC } from "react";
import s from "./ArticleSection.module.scss";
import { Article } from "@/components/blog/BlogArticleComponent";
import { SectionScrolIndicator } from "@/components/blog/BlogSectionScrolIndicatorComponent";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface ArticleSectionProps {
  response: {
    authorImg: string;
    articleName: string;
    articleimg: string;
    readTime: string;
    author: string;
    authorId: string;
    articles: {
      id: string;
      title: string;
      description: string;
      image?: string;
    }[];
  };
}

const ArticleSection: FC<ArticleSectionProps> = ({ response }) => {
  const {
    articleName,
    authorImg,
    articleimg,
    readTime,
    author,
    authorId,
    articles,
  } = response;

  return (
    <section className={classNames(s.container, s.article)}>
      <div className={s.article__container}>
        <h2 className={s.article__title}>{articleName}</h2>
        <div className={s.author__container}>
          <div className={s.author}>
            <Link href={`/authors/${authorId}`} className={s.author}>
              <div className={s.author__image}>
                <Image
                  className={s.picture}
                  width={44}
                  height={44}
                  src={authorImg}
                  alt={author}
                />
              </div>
              <span className={s.author__text}>{author}</span>
            </Link>
          </div>
          <span className={s.author__text}>Reading time: {readTime}</span>
        </div>
        <div className={s.article__image}>
          <Image
            width={800}
            height={600}
            className={s.image}
            src={articleimg}
            alt={articleName}
          />
        </div>

        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
      <div className={s.navigation}>
        <SectionScrolIndicator items={articles} />
      </div>
    </section>
  );
};

export default ArticleSection;
