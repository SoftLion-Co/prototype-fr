import s from "./BlogMobileExtendedCardComponent.module.scss";

const BlogMobileExtendedCardComponent: React.FC<any> = ({ data }) => {
  return (
    <div className={s.articleCard}>
      <div className={s.articleCard__content}>
        <img
          className={s.articleCard__content__image}
          src={data.imageSrc}
          alt="Softlion image"
        />
        <h2 className={s.articleCard__content__title}>{data.title}</h2>
      </div>
      <div className={s.articleCard__line}></div>
      <div className={s.articleCard__article}>
        <p className={s.articleCard__article__text}>{data.text}</p>
        <svg
          className={s.articleCard__article__arrow}
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
