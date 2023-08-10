import s from "./ArticleSection.module.scss";
import { Article } from "@/components/blog/BlogArticleComponent";
import { SectionScrolIndicator } from "@/components/blog/BlogSectionScrolIndicatorComponent";
import classNames from "classnames";
import Image from "next/image";

export const ArticleSection = () => {
  const response = {
    authorImg:
      "https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
    articleName: "How to delegate work correctly",
    articleimg:
      "https://assets.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e2982ebab93dde_Cv_drawkit_Teamwork%20Illustrations-min.png",
    readTime: "10 min",
    author: "Tanisha Cohen",
    articles: [
      {
        id: "1",
        title: "1914 translation by H. Rackham",
        description:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        image:
          "https://t3.ftcdn.net/jpg/04/53/15/70/360_F_453157099_WDyakeU2ZoDdLDnfH8gVlhy4zI5fgcwX.jpg",
      },
      {
        id: "2",
        title: "Title2 1914 translation by H. Rackham",
        description:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      },
      {
        id: "3",
        title: "Title3 1914 translation by H. Rackham",
        description:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      },
      {
        id: "4",
        title: "Title4 1914 translation by H. Rackham",
        description:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      },
      {
        id: "5",
        title: "Title5 1914 translation by H. Rackham",
        description:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      },
      {
        id: "6",
        title: "Title6 1914 translation by H. Rackham",
        description:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      },
    ],
  };

  const { articleName, authorImg, articleimg, readTime, author, articles } =
    response;

  return (
    <section className={classNames(s.container, s.article)}>
      <div className={s.article__container}>
        <h2 className={s.article__title}>{articleName}</h2>
        <div className={s.author__container}>
          <div className={s.author}>
            <div className={s.author__image}>
              <Image
                className={s.image}
                width={44}
                height={44}
                src={authorImg}
                alt={author}
              />
            </div>
            <span className={s.author__text}>{author}</span>
          </div>
          <span className={s.author__text}>Reading time:{readTime}</span>
        </div>
        <div className={s.article__image}>
          <Image
            width={800}
            height={600}
            className={s.image}
            src={articleimg}
            alt={articleName}
          />
        </div>

        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
      <div className={s.navigation}>
        <SectionScrolIndicator items={articles} />
      </div>
    </section>
  );
};
