import React, { FC, useState, useEffect } from "react";
import s from "./DevelopmentSection.module.scss";
import classNames from "classnames";
import HeadingComponent from "@/components/technologies/HeadingComponent";
import BigButtonComponent from "@/components/service/BigButtonComponent";

interface DevelopmentItem {
  number: string;
  title: string;
  paragraph: string;
}

interface Props {
  titleTech: string;
  developmentSection: DevelopmentItem[];
}

const numberColors = ["yellow", "blue", "orange", "purple"];

const DevelopmentSection: FC<Props> = ({ titleTech, developmentSection }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 767.98);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={s.container}>
      <div className={s.test}>
        <div className={s.development__heading}>
          <HeadingComponent
            color="orange"
            text={`Our development services for ${titleTech} include`}
          />
        </div>

        <div className={s.development__container}>
          {developmentSection.map((item, index) => (
            <div className={s.development__content} key={item.number}>
              {isLargeScreen ? (
                index % 2 === 0 ? (
                  <>
                    <p
                      className={classNames(
                        s.development__number,
                        s[numberColors[index % 4]]
                      )}
                    >
                      {item.number}
                    </p>

                    <div className={s.development__item}>
                      <h2 className={s.development__title}>{item.title}</h2>
                      <p className={s.development__text}>{item.paragraph}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={s.development__item}>
                      <h2 className={s.development__title}>{item.title}</h2>
                      <p className={s.development__text}>{item.paragraph}</p>
                    </div>

                    <p
                      className={classNames(
                        s.development__number,
                        s[numberColors[index % 4]]
                      )}
                    >
                      {item.number}
                    </p>
                  </>
                )
              ) : (
                <>
                  <p
                    className={classNames(
                      s.development__number,
                      s[numberColors[index % 4]]
                    )}
                  >
                    {item.number}
                  </p>

                  <div className={s.development__item}>
                    <h2 className={s.development__title}>{item.title}</h2>
                    <p className={s.development__text}>{item.paragraph}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className={s.development__button}>
          <BigButtonComponent />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
