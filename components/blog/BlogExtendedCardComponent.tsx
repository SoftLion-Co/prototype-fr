import React, { FC } from "react";
import Image from "next/image";
import s from "./BlogExtendedCardComponent.module.scss";
import Link from "next/link";
import Arrow from "@/images/navigation/arrow-default.svg";
import { PiArrowRightThin } from "react-icons/pi";
import { BlogInterface } from "./BlogInteface";
import { AuthorInterface } from "@/app/sections/author_page/AuthorInteface";
import authors from "@/data/blog/authors_data.json";
import classNames from "classnames";

const BlogExtendedCardComponent: FC<{ data: BlogInterface }> = ({ data }) => {
  const {
    id,
    category,
    title,
    authorId,
    readingTime,
    publicationDate,
    text,
    imageSrc,
    tags,
  } = data;
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
          <h3 className={s.info__title}>{title}</h3>
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

            <Link href={`/authors/${authorId}`}>
              <p className={classNames(s.info__text, s.info__author__name)}>
                {author.name}
              </p>
            </Link>
          </div>

          <div className={s.info__box}>
            <p className={classNames(s.info__text, s.info__readingTime)}>
              {readingTime} read
            </p>

            <p className={classNames(s.info__text, s.info__readingTime)}>
              {publicationDate}
            </p>
          </div>
        </div>
      </div>

      <div className={s.card__line}></div>

      <div className={s.article}>
        <div className={s.article__container}>
          <div className={s.tags}>
            {tags?.map((tag, index) => (
              <p className={classNames(s.info__text, s.tags__item)} key={index}>
                {tag}
              </p>
            ))}
          </div>
          <p className={s.card__text}>{text}</p>
        </div>

        <Link href={`/blog/${id}`}>
          <Image src={Arrow} alt="Arrow" className={s.card__arrowIcon} />
        </Link>
      </div>
    </div>
  );
};

export default BlogExtendedCardComponent;
