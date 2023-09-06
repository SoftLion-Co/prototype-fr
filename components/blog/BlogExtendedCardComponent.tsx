import s from "./BlogExtendedCardComponent.module.scss";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import { BlogInterface } from "./BlogInteface";
import { AuthorInterface } from "@/app/sections/author_page/AuthorInteface";
import authors from "@/data/blog/authors_data.json";
import Image from "next/image";

const BlogExtendedCardComponent: React.FC<{ data: BlogInterface }> = ({
  data,
}) => {
  const { id, category, title, authorId, readingTime, text, imageSrc, tags } =
    data;
  const authorsData: { [key: string]: AuthorInterface } = authors;
  const author = authorsData[authorId];
  return (
    <div className={s.card}>
      <div className={s.card__container}>
        <Image
          className={s.image}
          height={300}
          width={300}
          src={imageSrc}
          alt="Softlon image"
        />
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
              <Image
                className={s.info__author__icon}
                height={50}
                width={50}
                src={author.imgSrc}
                alt="Softlon image"
              />
            </Link>
            <p className={s.info__author__name}>{author.name}</p>
          </div>

          <p className={s.info__readingTime}>Reading Time: {readingTime}</p>
        </div>
      </div>
      <div className={s.card__line}></div>
      <div className={s.article}>
        <p className={s.card__text}>{text}</p>
        <Link href={`/blogs/${id}`}>
          <PiArrowRightThin className={s.card__arrowIcon} color="black" size="2.5em" />
        </Link>
      </div>
    </div>
  );
};

export default BlogExtendedCardComponent;
