import Image from "next/image";
import s from "./BlogExtendedCardComponent.module.scss";
import Link from "next/link";

interface BlogExtendedCardComponentProps {
  id: number;
  title: string;
  authorId: string;
  author: string;
  authorIconSrc: string;
  readingTime: string;
  text: string;
  imageSrc: string;
  tags: string[];
}

const BlogExtendedCardComponent: React.FC<BlogExtendedCardComponentProps> = ({
  id,
  title,
  authorId,
  author,
  authorIconSrc,
  readingTime,
  text,
  imageSrc,
  tags,
}) => {
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
            <Link href={`authors/${authorId}`}>
              <img
                alt="Softlion image"
                className={s.info__author__icon}
                src={authorIconSrc}
              />
            </Link>
            <p className={s.info__author__name}>{author}</p>
          </div>

          <p className={s.info__readingTime}>Reading Time: {readingTime}</p>
        </div>
      </div>
      <div className={s.card__line}></div>
      <div className={s.article}>
        <p className={s.card__text}>{text}</p>
        <Link href={`blogs/${id}`}>
          <svg
            className={s.card__arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="5em"
            height="5em"
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

export default BlogExtendedCardComponent;
