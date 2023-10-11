"use client";
import Image from "next/image";
import FileInput from "../FileInputComponent";
import s from "./NewProjectComponent.module.scss";
import { ImImage } from "react-icons/im";
import bin from "@/app/admin/images/control/bin.svg";
import { useState } from "react";
import { Button } from "./../Button";
import classNames from "classnames";

const NewProjectCard = () => {
  const [imageCount, setImageCount] = useState(0);
  const [requirementsCount, setRequirementsCount] = useState(0);
  const [paragraphsCount, setParagraphsCount] = useState(0);

  const handleAddImageInput = () => {
    if (imageCount < 4) {
      setImageCount(imageCount + 1);
    }
  };

  const handleDeleteImageInput = () => {
    if (imageCount > 0) {
      setImageCount(imageCount - 1);
    }
  };

  const renderImageInput = () => {
    const images = [];
    for (let i = 0; i < imageCount; i++) {
      images.push(
        <div className={s.image_input__container}>
          <FileInput className={s.image_input} placeholder="Для ілюстрації" />
          <div className={s.image_input__controls}>
            <ImImage className={s.icon} />
            <button className={s.remove_button} type="button" onClick={handleDeleteImageInput}>
              <Image className={s.remove_button__image} src={bin} alt="Edit" width={16} height={16} />
            </button>
          </div>
        </div>
      );
    }
    return images;
  };

  const handleAddRequirement = () => {
    if (requirementsCount < 4) {
      setRequirementsCount(requirementsCount + 1);
    }
  };

  const handleDeleteRequirement = () => {
    if (requirementsCount > 0) {
      setRequirementsCount(requirementsCount - 1);
    }
  };

  const renderRequirementInput = () => {
    const requirements = [];
    for (let i = 0; i < requirementsCount; i++) {
      requirements.push(
        <div>
          <input className={s.input} type="text" placeholder="Вимоги"></input>
          <button className={s.remove_button} type="button" onClick={handleDeleteRequirement}>
            <Image className={s.user__list__button__image} src={bin} alt="Edit" width={16} height={16} />
          </button>
        </div>
      );
    }
    return requirements;
  };

  const handleAddParagraph = () => {
    if (paragraphsCount < 4) {
      setParagraphsCount(paragraphsCount + 1);
    }
  };

  const handleDeleteParagraph = () => {
    if (paragraphsCount > 0) {
      setParagraphsCount(paragraphsCount - 1);
    }
  };

  const renderParagraphs = () => {
    const paragraphs = [];
    for (let i = 0; i < paragraphsCount; i++) {
      paragraphs.push(
        <div>
          <input className={s.input} type="text" placeholder="Заголовок абзацу"></input>
          <textarea className={classNames(s.input, s.textarea)} placeholder="Для опису абзацу"></textarea>
        </div>
      );
    }
    return paragraphs;
  };

  return (
    <div className={s.new_project}>
      <h2 className={s.new_project__title}>Проекти</h2>
      <div className={s.new_project___container}>
        <div className={s.left_side__container}>
          <div className={s.image_block__container}>
            <div className={s.image_inputs__container}>
              <div className={s.image_input__container}>
                <FileInput className={s.image_input} placeholder="Для ілюстрації" />
                <div className={s.image_input__controls}>
                  <ImImage className={s.icon} />
                </div>
              </div>

              {renderImageInput()}
            </div>
            <div className={s.button__container}>
              <Button text="Додати картинку" type="button" onClick={handleAddImageInput} />
            </div>
          </div>
          <div className={s.input__container}>
            <input className={s.input} type="text" placeholder="Для заголовку"></input>
            <textarea className={classNames(s.input, s.textarea)} placeholder="Для опису"></textarea>
          </div>
        </div>

        <div className={s.right_side__container}>
          <div className={s.right_side}>
            <div className={s.request__container}>
              <p className={s.title_block}>Request</p>
              <div className={s.input__container}>
                <textarea className={classNames(s.input, s.textarea)} placeholder="Для опису"></textarea>
                <input className={s.input} type="text" placeholder="Вимоги"></input>
                {renderRequirementInput()}
              </div>
              <div className={s.button__container}>
                <Button type="button" text="Додати вимоги" onClick={handleAddRequirement} />
              </div>
            </div>
            <div className={s.solution__container}>
              <p className={s.title_block}>Solution</p>
              <div className={s.input__container}>
                <textarea className={classNames(s.input, s.textarea)} placeholder="Для опису"></textarea>
                <input className={s.input} type="text" placeholder="Заголовок абзацу"></input>
                <textarea className={classNames(s.input, s.textarea)} placeholder="Для опису абзацу"></textarea>
                {renderParagraphs()}
              </div>
            </div>
          </div>
          <div className={s.button__container}>
            <Button type="button" text="Додати абзац" onClick={handleAddParagraph} />
            <Button theme="delete" text="Видалити абзац" type="button" onClick={handleDeleteParagraph} />
          </div>
        </div>
      </div>
      <div className={s.button__container}>
        <Button text="Додати проект" type="button" />
      </div>
    </div>
  );
};

export default NewProjectCard;
