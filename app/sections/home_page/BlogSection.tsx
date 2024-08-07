"use client";

import React, { FC } from "react";
import classNames from "classnames";
import s from "./BlogSection.module.scss";
import { BlogInterface } from "@/components/blog/BlogInteface";
import HeadingComponent from "@/components/HeadingComponent";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import BlogDesktopComponent from "@/components/blog/BlogDesktopComponent";
import BlogExtendedCardComponent from "@/components/blog/BlogExtendedCardComponent";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";
import MotionWrapper from "@/hooks/MotionWrapper";
import getBlogsData from "@/hooks/getBlogsData";

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
          custom={0.5}
          className={s.blogContainer__mobileSlider}
        >
          <MobileSliderComponent
            data={blogs}
            SlideComponent={BlogExtendedCardComponent}
          />
        </MotionWrapper>
      </div>
      <SeeMoreButtonComponent className={s.container} path="blog" />
    </section>
  );
};

export default HomeBlog;
