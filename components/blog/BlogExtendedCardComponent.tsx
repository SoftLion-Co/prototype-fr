import Image from "next/image";
import s from "./BlogExtendedCardComponent.module.scss";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import { BlogInterface } from "./BlogInteface";

const BlogExtendedCardComponent: React.FC<BlogInterface> = ({
  id,
  category,
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
          <PiArrowRightThin color="black" size="2.5em" />
        </Link>
      </div>
    </div>
  );
};

export default BlogExtendedCardComponent;
