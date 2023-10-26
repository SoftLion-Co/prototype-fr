"use client";
import Image from "next/image";
import FileInput from "../FileInputComponent";
import s from "./NewProjectComponent.module.scss";
import { ImImage } from "react-icons/im";
import bin from "@/app/admin/images/control/bin.svg";
import { useEffect, useState } from "react";
import { Button } from "./../Button";
import classNames from "classnames";
import countryService from "../../../../services/country-service";
import ReactCountryFlag from "react-country-flag";

const NewProjectCard = () => {
  const [requirementsCount, setRequirementsCount] = useState(0);
  const [paragraphsCount, setParagraphsCount] = useState(0);
  const [countries, setCountries] = useState<string[]>([]);
  const [countryCode, setCountryCode] = useState<string>("");

  const handleCountryCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCountryCode(event.target.value);
  };

  useEffect(() => {
    async function fetchCountries() {
      const countries = await countryService.getAllCountries();

      setCountries(countries.result.map((country: any) => country.name));
      console.log("countries", countries);
    }

    fetchCountries();
  }, []);

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
        <div className={s.requirement__container}>
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

  const createListOfYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    let startYear = 2015;

    while (startYear <= currentYear + 10) {
      years.push(startYear++);
    }
    return years;
  };

  const renderParagraphs = () => {
    const paragraphs = [];
    for (let i = 0; i < paragraphsCount; i++) {
      paragraphs.push(
        <div key={i}>
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
                <ImImage className={s.icon} />
              </div>
              <div className={s.image_input__container}>
                <FileInput className={s.image_input} placeholder="Для ілюстрації" />
                <ImImage className={s.icon} />
              </div>
              <div className={s.image_input__container}>
                <FileInput className={s.image_input} placeholder="Для ілюстрації" />
                <ImImage className={s.icon} />
              </div>
              <div className={s.image_input__container}>
                <FileInput className={s.image_input} placeholder="Для ілюстрації" />
                <ImImage className={s.icon} />
              </div>
              <div className={s.image_input__container}>
                <FileInput className={s.image_input} placeholder="Для ілюстрації" />
                <ImImage className={s.icon} />
              </div>
            </div>
          </div>
          <div className={s.input__container}>
            <input className={s.input} type="text" placeholder="Для заголовку"></input>
            <textarea className={classNames(s.input, s.textarea)} placeholder="Для опису"></textarea>
          </div>
          
          <div className={classNames(s.input__container, s.input__container_row)}>
            <div >
            <select className={classNames(s.input, s.select)} defaultValue="default">
              <option className={classNames(s.select__option, s.hidden)} value="default">
                Період
              </option>
              <option className={s.select__option}>1 Week</option>
              <option className={s.select__option}>2 Weeks</option>
              <option className={s.select__option}>3 Weeks</option>
              <option className={s.select__option}>1 Month</option>
              <option className={s.select__option}>2 Months</option>
              <option className={s.select__option}>3 Months</option>
              <option className={s.select__option}>4 Months</option>
              <option className={s.select__option}>5 Months</option>
              <option className={s.select__option}>6 Months</option>
              <option className={s.select__option}>7 Months</option>
              <option className={s.select__option}>8 Months</option>
              <option className={s.select__option}>9 Months</option>
              <option className={s.select__option}>10 Months</option>
              <option className={s.select__option}>11 Months</option>
              <option className={s.select__option}>1 Year</option>
              <option className={s.select__option}>1.5 Year</option>
              <option className={s.select__option}>2 Years</option>
            </select>
            <select className={classNames(s.input, s.select)} defaultValue="default">
              <option className={classNames(s.select__option, s.hidden)} value="default">
                Рік
              </option>
              {createListOfYears().map((year, index) => (
                <option className={s.select__option} key={index}>
                  {year}
                </option>
              ))}
            </select>
            </div>
         <div>
         <input className={s.input} type="text" placeholder="Країна" />
            <div className={s.input__country}>
            <input className={s.input}
              type="text"
              id="countryCode"
              name="countryCode"
              placeholder="Country Code alpha-2"
              value={countryCode}
              onChange={handleCountryCodeChange}
            />
            <ReactCountryFlag
            className={s.icon_country}
              countryCode={countryCode}
              svg
              style={{
                width: "2em",
                height: "1.5em",
                borderRadius: "0.3em",
              }}
            />
            </div>
         </div>
          
           
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
            <div className={s.solution__container}>
              <p className={s.title_block}>The Result</p>
              <div className={s.input__container}>
                <textarea className={classNames(s.input, s.textarea)} placeholder="Для опису абзацу"></textarea>
                <textarea className={classNames(s.input, s.textarea)} placeholder="Для опису абзацу"></textarea>
                <textarea className={classNames(s.input, s.textarea)} placeholder="Для опису абзацу"></textarea>
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
