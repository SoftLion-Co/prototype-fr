import React, { useState, useRef, useEffect, FC } from "react";
import s from "./ContentEditor.module.scss";
import classNames from "classnames";
import FileInput from "../FileInputComponent";
import { BlogAuthor, BlogData } from "../../dashboard/types";
import authorService from "@/services/author-service";
import { Modal } from "../../modals/Modal";
import { RxCross2 } from "react-icons/rx";
import { formatDate } from "../../utils/formatDate";
import blogService from "@/services/blog-service";

interface ContentEditorProps {
  blog: BlogData | null;
}

const ContentEditor: FC<ContentEditorProps> = ({ blog }) => {
  const [paragraphsCount, setParagraphsCount] = useState(1);
  const lastParagraphRef = useRef<HTMLTextAreaElement | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
  const [authors, setAuthors] = useState<BlogAuthor[]>([]);

  useEffect(() => {
    async function fetchCountries() {
      const authors = await authorService.getAllAuthors();

      setAuthors(authors.result);
      console.log("authors", authors);
    }

    fetchCountries();
  }, []);

  useEffect(() => {
    if (lastParagraphRef.current) {
      lastParagraphRef.current.focus();
    }
  }, [paragraphsCount]);

  const handleAddParagraph = () => {
    if (paragraphsCount < 10) {
      setParagraphsCount(paragraphsCount + 1);
    }
  };

  const handleDeleteParagraph = () => {
    if (paragraphsCount > 1) {
      setParagraphsCount(paragraphsCount - 1);
    }
  };

  const handleDetailsModal = (): void => {
    setShowDetailsModal(!showDetailsModal);
    console.log("Modal", showDetailsModal);
  };

  const handleFormSubmit = (event: any): void => {
    event.preventDefault();

    const {blog_img, blog_title, author_name: authorId } = event.target.elements;
    // const author = authors.find(_author => _author.id === authorId.value);
    const blogId = crypto.randomUUID();
    const paragraphs = [];
    const pictures = [];

    for (let i = 0; i < paragraphsCount; i++) {
      paragraphs.push({
        title: event.target.elements[`paragraph_${i}_title`].value,
        description: event.target.elements[`paragraph_${i}_description`].value,
        blogId,
        projectId: "" // need to take somewhere project id
      });

      pictures.push({
        url: "", // need to paste url to paragraph picture
        projectId: "", // need to take somewhere project id
        blogId
      });
    } 

    const requestBody = {
      authorId: authorId.value,
      title: blog_title.value,
      description: "", // there is no input for the description of the blog itself
      readingTime: 0, // take somewhere this parameter
      viewers: 0, // take somewhere this parameter
      svg: {
        url: "", // need an blog_img url
        blogId
      },
      paragraphs,
      pictures,
      technologies: [], // somewhere take technologies 
    };

    blogService.createBlog(requestBody);

    console.log("On blog publish: ", requestBody); 
  }

  const renderParagraphs = () => {
    const paragraphs = [];
    for (let i = 0; i < paragraphsCount; i++) {
      const isLastGroup = i + 3 >= paragraphsCount;
      paragraphs.push(
        <div className={s.input__container} key={i}>
          <FileInput placeholder="Для картинки" name={`paragraph_${i}_img`}/>
          <input className={s.input__entry} type="text" placeholder="Для заголовку абзацу" name={`paragraph_${i}_title`}/>
          <textarea
            className={classNames(s.input__entry, s.input__entry_extended, {
              [s.lastParagraph]: isLastGroup,
            })}
            placeholder="Для абзацу"
            name={`paragraph_${i}_description`}
            ref={isLastGroup ? lastParagraphRef : null}
          ></textarea>
        </div>
      );
    }
    return paragraphs;
  };

  return (
    <>
      <form className={s.input} onSubmit={handleFormSubmit}>
        <div className={s.input__scroll}>
          <div className={s.input__container}>
            <FileInput placeholder="Для ілюстрації" name="blog_img"/>
            <input className={s.input__entry} type="text" placeholder="Для заголовку" name="blog_title"/>
          </div>

          <div className={s.input__container}>
            <select className={s.select} defaultValue="default" name="author_name">
              <option className={classNames(s.select__option, s.hidden)} value="default">
                Ім'я автора
              </option>
              {authors.map((author, index) => (
                <option className={s.select__option} key={index} value={author.id}>
                  {author.fullname}
                </option>
              ))}
            </select>

            {/* <FileInput placeholder="Для фотографії автора" name="author_img"/>
            <input className={s.input__entry} type="text" placeholder="Для посади автора" name="author_position"/> */}
          </div>

          {renderParagraphs()}
        </div>

        <div className={s.input__button_article}>
          <button className={s.input__button} type="button" onClick={handleAddParagraph}>
            Додати абзац
          </button>

          <button className={classNames(s.input__button, s.input__button_delete)} type="button" onClick={handleDeleteParagraph}>
            Видалити абзац
          </button>
        </div>

        <div className={s.input__group_button}>
          <div className={s.input__line}></div>

          <div className={s.input__buttons}>
            <button className={s.input__button} type="submit">
              Опублікувати
            </button>

            {blog && (
              <button className={s.input__button} type="button" onClick={handleDetailsModal}>
                Деталі
              </button>
            )}

            <button className={classNames(s.input__button, s.input__button_delete)} type="button">
              Видалити
            </button>
          </div>
        </div>
      </form>
      <Modal onClose={() => setShowDetailsModal(false)} isOpen={showDetailsModal}> <div className={s.modal}>
        <div className={s.modal__head}>
          <button onClick={() => setShowDetailsModal(false)} type="button">
            <RxCross2 />
          </button>
        </div>

        <div className={s.modal__content}>
          <p className={s.modal__text}>Рейтинг:
            {/* <span className={s.modal__text_color}>{blog?.rating}</span> */}
          </p>
          <p className={s.modal__text}>Дата опублікування: <span className={s.modal__text_color}>{formatDate(blog?.createdDateTime)}</span></p>
          <p className={s.modal__text}>Дата оновлення:</p>
          <p className={s.modal__text}>Кількість переглядів:</p>
          <p className={s.modal__text}>Кількість реакцій:</p>
        </div>
      </div></Modal>
    </>
  );
};

export default ContentEditor;
