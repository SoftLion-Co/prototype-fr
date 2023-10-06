import React, { useState, useRef, useEffect, FC } from "react";
import s from "./ContentEditor.module.scss";
import classNames from "classnames";
import FileInput from "../FileInputComponent";
import { DetailsModal } from "../../modals/DetailsModal";
import { BlogData } from "./BlogInfoComponent";

interface ContentEditorProps {
  blog: BlogData | null;
}

const ContentEditor: FC<ContentEditorProps> = ({ blog }) => {
  const [paragraphsCount, setParagraphsCount] = useState(1);
  const lastParagraphRef = useRef<HTMLTextAreaElement | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);

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

  const renderParagraphs = () => {
    const paragraphs = [];
    for (let i = 0; i < paragraphsCount; i++) {
      const isLastGroup = i + 3 >= paragraphsCount;
      paragraphs.push(
        <div className={s.input__container} key={i}>
          <FileInput placeholder="Для картинки" />
          <input className={s.input__entry} type="text" placeholder="Для заголовку абзацу" />
          <textarea
            className={classNames(s.input__entry, s.input__entry_extended, {
              [s.lastParagraph]: isLastGroup,
            })}
            placeholder="Для абзацу"
            ref={isLastGroup ? lastParagraphRef : null}
          ></textarea>
        </div>
      );
    }
    return paragraphs;
  };

  return (
    <div className={s.input}>
      <div className={s.input__scroll}>
        <div className={s.input__container}>
          <FileInput placeholder="Для ілюстрації" />
          <input className={s.input__entry} type="text" placeholder="Для заголовку" />
        </div>

        <div className={s.input__container}>
          <input className={s.input__entry} type="text" placeholder="Для імені автора" />
          <FileInput placeholder="Для фотографії автора" />
          <input className={s.input__entry} type="text" placeholder="Для посади автора" />
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
          <button className={s.input__button} type="button">
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
      <DetailsModal isOpen={showDetailsModal} onClose={() => setShowDetailsModal(false)} blog={blog} />
    </div>
  );
};

export default ContentEditor;
