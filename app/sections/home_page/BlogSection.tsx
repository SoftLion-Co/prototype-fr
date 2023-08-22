"use client";

import MobileSliderComponent from "@/components/MobileSliderComponent";
import BlogDesktopComponent from "@/components/blog/BlogDesktopComponent";
import BlogMobileExtendedCardComponent from "@/components/blog/BlogMobileExtendedCardComponent";
import s from "./BlogSection.module.scss";
import classNames from "classnames";
import HeadingComponent from "@/components/HeadingComponent";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";

const blogIds: any = [1, 2, 3, 4, 5, 6, 7, 8];

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
