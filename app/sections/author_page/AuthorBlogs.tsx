import React, { FC, useEffect, useState } from "react";
import { BlogInterface } from "@/components/blog/BlogInteface";
import { Pagination } from "@mantine/core";
import BlogExtendedCardComponent from "@/components/blog/BlogExtendedCardComponent";
import s from "./AuthorBlogs.module.scss";

interface ArticleListProps {
  articles: BlogInterface[];
}

const AuthorBlogs: FC<ArticleListProps> = ({ articles }) => {
  const perPage = 6;
  const pages = Math.ceil(articles.length / perPage);
  const [activePage, setPage] = useState(1);
  const [paginationSize, setPaginationSize] = useState("xs");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPaginationSize("xs");
      } else {
        setPaginationSize("md");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
        siblings={1}
        size={paginationSize}
        total={pages}
        position="center"
        getItemProps={() => ({
          component: "a",
          href: "#articles",
        })}
        getControlProps={(control) => {
          if (control === "next" && activePage !== pages) {
            return { component: "a", href: "#articles" };
          }

          if (control === "previous" && activePage !== 1) {
            return { component: "a", href: "#articles" };
          }
          return {};
        }}
        styles={(theme) => ({
          control: {
            "&[data-active]": {
              backgroundImage: theme.fn.gradient({
                from: "#308bb7",
                to: "#7ec2e4",
              }),
              border: 0,
            },
          },
        })}
      />
    </div>
  );
};

export default AuthorBlogs;
