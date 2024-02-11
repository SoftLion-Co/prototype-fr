"use client";

import MobileSliderComponent from "@/components/MobileSliderComponent";
import BlogDesktopComponent from "@/components/blog/BlogDesktopComponent";
import s from "./BlogSection.module.scss";
import classNames from "classnames";
import HeadingComponent from "@/components/HeadingComponent";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";
import BlogExtendedCardComponent from "@/components/blog/BlogExtendedCardComponent";
import { BlogInterface } from "@/components/blog/BlogInteface";
import getBlogsData from "@/hooks/getBlogsData";
import { FC } from "react";

const blogs: BlogInterface[] = getBlogsData();

const HomeBlog: FC = () => {
  return (
    <section>
      <HeadingComponent className={s.blog__heading} text="Blog" />

      <div className={s.blogContainer}>
        <div
          className={classNames(
            s.blogContainer,
            s.blogContainer__desktopSlider
          )}
        >
          <BlogDesktopComponent blogs={blogs} />
        </div>
        <div className={s.blogContainer__mobileSlider}>
          <MobileSliderComponent
            data={blogs}
            SlideComponent={BlogExtendedCardComponent}
          />
        </div>

        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
      </div>

      <SeeMoreButtonComponent className={s.container} path="blog" />
    </section>
  );
};

export default HomeBlog;
