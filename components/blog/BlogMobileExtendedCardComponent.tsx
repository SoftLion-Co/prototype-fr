import s from "./BlogMobileExtendedCardComponent.module.scss";

const BlogMobileExtendedCardComponent: React.FC<any> = ({ data }) => {
  return (
    <div className={s.card}>
      <div className={s.card__content}>
        <img
          className={s.card__content__image}
          src={data.imageSrc}
          alt="Softlion image"
        />
        <div className={s.info}>
          <h2 className={s.info__title}>{data.title}</h2>
          <div className={s.info__author}>
            <img
              className={s.info__author__icon}
              src={data.authorIconSrc}
              alt="Softlion image"
            />
            <p className={s.info__author__name}>{data.author}</p>
          </div>
          <p className={s.info__time}>Reading time: {data.readingTime}</p>
        </div>
      </div>
      <div className={s.card__line}></div>
      <div className={s.card__article}>
        <p className={s.card__article__text}>{data.text}</p>
        <svg
          className={s.card__article__arrow}
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
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
    </div>
  );
};

export default BlogMobileExtendedCardComponent;
