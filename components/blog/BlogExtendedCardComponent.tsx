import Image from "next/image";
import s from "./BlogExtendedCardComponent.module.scss";

interface BlogExtendedCardComponentProps {
  title: string;
  author: string;
  authorIconSrc: string;
  readingTime: string;
  text: string;
  imageSrc: string;
}

const BlogExtendedCardComponent: React.FC<BlogExtendedCardComponentProps> = ({
  title,
  author,
  authorIconSrc,
  readingTime,
  text,
  imageSrc,
}) => {
  return (
    <div className={s.articleCard}>
      <div className={s.articleCard__content}>
        <img
          alt="Softlion image"
          className={s.articleCard__content__image}
          src={imageSrc}
        />
        <div className={s.articleCard__content__info}>
          <h2 className={s.articleCard__content__info__title}>{title}</h2>
          <div className={s.articleCard__content__info__author}>
            <img
              alt="Softlion image"
              className={s.articleCard__content__info__author__icon}
              src={authorIconSrc}
            />
            <p className={s.articleCard__content__info__author__name}>
              {author}
            </p>
          </div>
          <p className={s.articleCard__content__info__readingTime}>
            Reading Time: {readingTime}
          </p>
        </div>
      </div>
      <div className={s.articleCard__line}></div>
      <p className={s.articleCard__text}>{text}</p>{" "}
      <svg
        className={s.articleCard__arrow}
        xmlns="http://www.w3.org/2000/svg"
        width="5em"
        height="5em"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="4%">
        <path
          d="M5 10h9m0 0l-4-4m4 4l-4 4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default BlogExtendedCardComponent;
