import s from "./BlogExtendedCardComponent.module.scss";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import { BlogInterface } from "./BlogInteface";
import { AuthorInterface } from "@/app/sections/author_page/AuthorInteface";
import authors from "@/data/blog/authors_data.json";
import blogs from "@/data/blog/blogs_data.json";

const BlogExtendedCardComponent: React.FC<{ id: string }> = ({ id }) => {
  const blogData: { [key: string]: BlogInterface } = blogs;
  const authorsData: { [key: string]: AuthorInterface } = authors;
  const { authorId, imageSrc, tags, title, readingTime, text } = blogData[id];
  const author = authorsData[authorId];

  return (
    <div className={s.card}>
      <div className={s.card__container}>
        <img alt="Softlion image" className={s.image} src={imageSrc} />
        <div className={s.info}>
          <div className={s.tags}>
            {tags?.map((tag, index) => (
              <p className={s.tags__item} key={index}>
                {tag}
              </p>
            ))}
          </div>
          <h2 className={s.info__title}>{title}</h2>
          <div className={s.info__author}>
            <Link href={`/authors/${authorId}`}>
              <img
                alt="Softlion image"
                className={s.info__author__icon}
                src={author.imgSrc}
              />
            </Link>
            <p className={s.info__author__name}>{author.name} </p>
          </div>

          <p className={s.info__readingTime}>Reading Time: {readingTime}</p>
        </div>
      </div>
      <div className={s.card__line}></div>
      <div className={s.article}>
        <p className={s.card__text}>{text}</p>
        <Link href={`/blogs/${id}`}>
          <PiArrowRightThin color="black" size="2.5em" />
        </Link>
      </div>
    </div>
  );
};

export default BlogExtendedCardComponent;
