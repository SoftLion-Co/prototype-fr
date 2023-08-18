import React, { useState } from "react";
import { BlogInterface } from "../blog/BlogInteface";
import { Pagination } from "@mantine/core";
import BlogExtendedCardComponent from "../blog/BlogExtendedCardComponent";
import s from "./AuthorBlogs.module.scss";
import classNames from "classnames";

interface ArticleListProps {
  articles: BlogInterface[];
}

const AuthorBlogs: React.FC<ArticleListProps> = ({ articles }) => {
  const perPage = 6;
  const pages = Math.ceil(articles.length / perPage);
  const [activePage, setPage] = useState(1);
  return (
    <div className={s.container}>
      <div id="articles" className={s.articles}>
        {articles
          .slice(perPage * (activePage - 1), perPage * activePage)
          .map((item) => (
            <BlogExtendedCardComponent
              author={item.author}
              authorIconSrc={item.authorIconSrc}
              authorId={item.authorId}
              id={item.id}
              tags={item.tags}
              title={item.title}
              text={item.text}
              imageSrc={item.imageSrc}
              readingTime={item.readingTime}
            />
          ))}
      </div>
      <Pagination
        value={activePage}
        onChange={setPage}
        total={pages}
        position="center"
        getItemProps={() => ({
          component: "a",
          href: "#articles",
        })}
        getControlProps={() => {
          return { component: "a", href: "#articles" };
        }}
        siblings={1}
      />
    </div>
  );
};

export default AuthorBlogs;
