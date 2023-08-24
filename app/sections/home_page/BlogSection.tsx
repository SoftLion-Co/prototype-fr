"use client";

import authorData from "@/data/blog/blogs_data.json";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import BlogDesktopComponent from "@/components/blog/BlogDesktopComponent";
import BlogMobileExtendedCardComponent from "@/components/blog/BlogMobileExtendedCardComponent";
import s from "./BlogSection.module.scss";
import classNames from "classnames";
import HeadingComponent from "@/components/HeadingComponent";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";

const blogIds: any = Object.keys(authorData).slice(0, 8);

const HomeBlog: React.FC = () => {
  return (
    <section>
      <HeadingComponent text="Blog"></HeadingComponent>
      <div className={s.blogContainer}>
        <div
          className={classNames(
            s.blogContainer,
            s.blogContainer__desktopSlider
          )}
        >
          <BlogDesktopComponent blogIds={blogIds} />
        </div>
        <div className={s.blogContainer__mobileSlider}>
          <MobileSliderComponent
            data={blogIds}
            SlideComponent={BlogMobileExtendedCardComponent}
          />
        </div>
      </div>
      <div className={s.container}>
        <SeeMoreButtonComponent path="blogs" />
      </div>
    </section>
  );
};

export default HomeBlog;
