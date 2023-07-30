"use client";

import MobileSliderComponent from "@/components/MobileSliderComponent";
import BlogDesktopComponent from "@/components/blog/BlogDesktopComponent";
import BlogMobileExtendedCardComponent from "@/components/blog/BlogMobileExtendedCardComponent";
import s from "./BlogSection.module.scss";
import classNames from "classnames";
import HeaderComponent from "@/components/HeaderComponent";
import HeadingComponent from "@/components/HeadingComponent";
import SeeMoreButtonComponent from "@/components/SeeMoreButtonComponent";

const cardsData = [
  {
    title: "How to delegate work correctly 1",
    author: "Author 1",
    authorIconSrc: "author1.png",
    readingTime: "5 mins",
    imageSrc:
      "https://images.ctfassets.net/gkyt4bl1j2fs/1X1mWWuc4mqhDouFMopGHC/d2849ac89d767e117aa180c052c6aec6/Homepage_Desktop_UI_Comp_01__3_.png?w=1584&h=1751&q=50&fm=png&bg=transparent",
    text: "Sed ut perspiciatis, unde ossssssssssss sssssssssssssss ssssssssssss  ssssssssmnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 1",
  },
  {
    title: "How to delegate work correctly 2",
    author: "Author 2",
    authorIconSrc: "author2.png",
    readingTime: "10 mins",
    imageSrc:
      "https://images.ctfassets.net/gkyt4bl1j2fs/1X1mWWuc4mqhDouFMopGHC/d2849ac89d767e117aa180c052c6aec6/Homepage_Desktop_UI_Comp_01__3_.png?w=1584&h=1751&q=50&fm=png&bg=transparent",
    text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 2",
  },
  {
    title: "How to delegate work correctly 3",
    author: "Author 3",
    authorIconSrc: "author3.png",
    readingTime: "5 mins",
    imageSrc:
      "https://images.ctfassets.net/gkyt4bl1j2fs/1X1mWWuc4mqhDouFMopGHC/d2849ac89d767e117aa180c052c6aec6/Homepage_Desktop_UI_Comp_01__3_.png?w=1584&h=1751&q=50&fm=png&bg=transparent",
    text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 3",
  },
  {
    title: "How to delegate work correctly 4",
    author: "Author 4",
    authorIconSrc: "author4.png",
    readingTime: "10 mins",
    imageSrc:
      "https://images.ctfassets.net/gkyt4bl1j2fs/1X1mWWuc4mqhDouFMopGHC/d2849ac89d767e117aa180c052c6aec6/Homepage_Desktop_UI_Comp_01__3_.png?w=1584&h=1751&q=50&fm=png&bg=transparent",
    text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 4",
  },
  {
    title: "How to delegate work correctly 5",
    author: "Author 5",
    authorIconSrc: "author5.png",
    readingTime: "5 mins",
    imageSrc:
      "https://images.ctfassets.net/gkyt4bl1j2fs/1X1mWWuc4mqhDouFMopGHC/d2849ac89d767e117aa180c052c6aec6/Homepage_Desktop_UI_Comp_01__3_.png?w=1584&h=1751&q=50&fm=png&bg=transparent",
    text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 5",
  },
  {
    title: "How to delegate work correctly 6",
    author: "Author 6",
    authorIconSrc: "author6.png",
    readingTime: "10 mins",
    imageSrc:
      "https://images.ctfassets.net/gkyt4bl1j2fs/1X1mWWuc4mqhDouFMopGHC/d2849ac89d767e117aa180c052c6aec6/Homepage_Desktop_UI_Comp_01__3_.png?w=1584&h=1751&q=50&fm=png&bg=transparent",
    text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 6",
  },
  {
    title: "How to delegate work correctly 7",
    author: "Author 7",
    authorIconSrc: "author7.png",
    readingTime: "10 mins",
    imageSrc:
      "https://images.ctfassets.net/gkyt4bl1j2fs/1X1mWWuc4mqhDouFMopGHC/d2849ac89d767e117aa180c052c6aec6/Homepage_Desktop_UI_Comp_01__3_.png?w=1584&h=1751&q=50&fm=png&bg=transparent",
    text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit 7",
  },
];

const HomeBlog: React.FC = () => {
  return (
    <section>
      <HeadingComponent text="Blog"></HeadingComponent>
      <div className={s.blogContainer}>
        <div
          className={classNames(
            s.blogContainer,
            s.blogContainer__desktopSlider
          )}>
          <BlogDesktopComponent cardsData={cardsData} />
        </div>
        <div className={s.blogContainer__mobileSlider}>
          <MobileSliderComponent
            data={cardsData}
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
