import Image from "next/image";
import s from "./BlogMobileExtendedCardComponent.module.scss";
import Link from "next/link";
import { BlogInterface } from "./BlogInteface";
import { AuthorInterface } from "@/app/sections/author_page/AuthorInteface";
import authors from "@/data/blog/authors_data.json";
import blogs from "@/data/blog/blogs_data.json";

const BlogMobileExtendedCardComponent: React.FC<{ data: any }> = ({ data }) => {
  const blogData: { [key: string]: BlogInterface } = blogs;
  const authorsData: { [key: string]: AuthorInterface } = authors;
  const { authorId, imageSrc, title, readingTime, text } = blogData[data];
  const author = authorsData[authorId];
  return (
    <div className={s.card}>
      <div className={s.card__content}>
        <img
          className={s.card__content__image}
          src={imageSrc}
          alt="Softlion image"
        />
        <div className={s.info}>
          <h2 className={s.info__title}>{title}</h2>

          <div className={s.info__author}>
            <Link href={`/authors/${authorId}`}>
              <img
                alt="Softlion image"
                className={s.info__author__icon}
                src={author.imgSrc}
              />
            </Link>
            <p className={s.info__author__name}>{author.name}</p>
          </div>
          <p className={s.info__time}>Reading time: {readingTime}</p>
        </div>
      </div>
      <div className={s.card__line}></div>
      <div className={s.card__article}>
        <p className={s.card__article__text}>{text}</p>
        <Link href={`/blogs/${data}`}>
          <svg
            className={s.card__article__arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="4%"
          >
            <path
              d="M5 10h9m0 0l-4-4m4 4l-4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogMobileExtendedCardComponent;
