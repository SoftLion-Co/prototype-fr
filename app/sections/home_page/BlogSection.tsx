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
import MotionWrapper from "@/hooks/MotionWrapper";

const blogs: BlogInterface[] = getBlogsData();

const HomeBlog: FC = () => {
  return (
    <section>
      <div className={classNames(s.container, s.blog__heading)}>
        <HeadingComponent text="Blog" />
      </div>

      <div className={s.blogContainer}>
        <div
          className={classNames(
            s.blogContainer,
            s.blogContainer__desktopSlider
          )}
        >
          <BlogDesktopComponent blogs={blogs} />
        </div>
        <MotionWrapper
          initial
          viewport
          variants
          custom={2}
          className={s.blogContainer__mobileSlider}
        >
          <MobileSliderComponent
            data={blogs}
            SlideComponent={BlogExtendedCardComponent}
          />
        </MotionWrapper>

        <div className={s.blur}>
          <div className={s.blur_item}></div>
        </div>
      </div>
      <SeeMoreButtonComponent className={s.container} path="blog" />
    </section>
  );
};

export default HomeBlog;
