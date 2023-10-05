"use client";

import React, { FC, useEffect, useState } from "react";
import { BlogInterface } from "@/components/blog/BlogInteface";
import { Pagination } from "@mantine/core";
import BlogExtendedCardComponent from "@/components/blog/BlogExtendedCardComponent";
import s from "./AuthorBlogs.module.scss";

const AuthorBlogs: FC<{ articles: BlogInterface[] }> = ({ articles }) => {
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
            <BlogExtendedCardComponent key={item.id} data={item} />
          ))}
        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
      </div>
      {pages >= 2 ? (
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
      ) : null}
    </div>
  );
};

export default AuthorBlogs;
