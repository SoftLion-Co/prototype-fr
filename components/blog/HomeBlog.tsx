"use client";

import MobileSliderComponent from "../MobileSliderComponent";
import BlogDesktopComponent from "./BlogDesktopComponent";
import BlogMobileComponent from "./BlogMobileComponent";
import BlogMobileExtendedCardComponent from "./BlogMobileExtendedCardComponent";
import s from "./HomeBlog.module.scss";

const cardsData = [
  {
    title: "Card 1",
    imageUrl: "url1",
    author: "Author 1",
    authorIconSrc: "author1.png",
    readingTime: "5 mins",
    imageSrc: "image1.png",
    text: "Text 1",
  },
  {
    title: "Card 2",
    imageUrl: "url2",
    author: "Author 2",
    authorIconSrc: "author2.png",
    readingTime: "10 mins",
    imageSrc: "image2.png",
    text: "Text 2",
  },
  {
    title: "Card 3",
    imageUrl: "url3",
    author: "Author 3",
    authorIconSrc: "author3.png",
    readingTime: "5 mins",
    imageSrc: "image3.png",
    text: "Text 3",
  },
  {
    title: "Card 4",
    imageUrl: "url4",
    author: "Author 4",
    authorIconSrc: "author4.png",
    readingTime: "10 mins",
    imageSrc: "image4.png",
    text: "Text 4",
  },
  {
    title: "Card 5",
    imageUrl: "url5",
    author: "Author 5",
    authorIconSrc: "author5.png",
    readingTime: "5 mins",
    imageSrc: "image5.png",
    text: "Text 5fffffffffffff fffffffffffffffffffff fffffffffffffffffffffffffffff fffffffffffffffff",
  },
  {
    title: "Card 6",
    imageUrl: "url6",
    author: "Author 6",
    authorIconSrc: "author6.png",
    readingTime: "10 mins",
    imageSrc: "image6.png",
    text: "Text 6",
  },
  {
    title: "Card 7",
    imageUrl: "url7",
    author: "Author 7",
    authorIconSrc: "author7.png",
    readingTime: "10 mins",
    imageSrc: "image7.png",
    text: "Text 7",
  },
];

const HomeBlog: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.container__desktopSlider}>
        <BlogDesktopComponent cardsData={cardsData} />
      </div>
      <div className={s.container__mobileSlider}>
        <MobileSliderComponent
          data={cardsData}
          SlideComponent={BlogMobileExtendedCardComponent}
        />
      </div>
    </div>
  );
};

export default HomeBlog;
