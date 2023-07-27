import s from "./TechnologiesSection.module.scss";

import React from "react";
import Image from "next/image";
import UIUX from "../../../images/technologies/UI-UX.svg";
import Ecommerce from "../../../images/technologies/Ecommerce.svg";
import SEO from "../../../images/technologies/SEO.svg";
import API from "../../../images/technologies/API.svg";
import { BiExpandAlt } from "react-icons/bi";
import HeadingComponent from "../../../components/HeadingComponent";

const TechnologiesSection = () => {
  return (
    <div className={`${s.container} ${s.technologies}`}>
      <div className={s.technologies__wrapper}>
        <div className={s.technologies__nameHeader}>
          <HeadingComponent text="Technologies" />
        </div>
        <div className={s.technologies__headerWrapperImg}>
          <div className={s.technologies__imagesWrapper}>
            <div className={s.technologies__imageWrapper}>
              <div className={s.technologies__iconWrapper}>
                <BiExpandAlt className={s.technologies__iconOpen} />
              </div>
              <div className={s.technologies__cardContainer}>
                <Image
                  className={s.technologies__imageUIUX}
                  src={UIUX}
                  alt="UI/UX"
                />
                <p
                  className={`${s.technologies__descriptionFotoUIUX} ${s.hidden}`}
                >
                  UI/UX
                </p>
                <p className={`${s.technologies__textEcommerce} ${s.hidden}`}>
                  UI/UX focuses on designing intuitive and visually appealing
                  interfaces that provide users with a positive experience when
                  interacting with digital products.
                </p>
              </div>
            </div>
            <div className={s.technologies__imageWrapper}>
              <div className={s.technologies__iconWrapper}>
                <BiExpandAlt className={s.technologies__iconOpen} />
              </div>
              <div className={s.technologies__cardContainer}>
                <Image
                  className={s.technologies__imageEcommerce}
                  src={Ecommerce}
                  alt="Ecommerce"
                />
                <p className={s.technologies__descriptionFoto}>Ecommerce</p>
                <p className={s.technologies__textEcommerce}>
                  Ecommerce refers to the buying and selling of goods and
                  services online. It involves the creation and management of
                  online stores or platforms where businesses and consumers can
                  engage in transactions.
                </p>
              </div>
            </div>
            <div className={s.technologies__imageWrapper}>
              <div className={s.technologies__iconWrapper}>
                <BiExpandAlt className={s.technologies__iconOpen} />
              </div>
              <div className={s.technologies__cardContainer}>
                <Image
                  className={s.technologies__imageSEO}
                  src={SEO}
                  alt="SEO"
                />
                <p className={s.technologies__descriptionFotoSeo}>SEO</p>
                <p className={s.technologies__textEcommerce}>
                  SEO optimization includes the use of keywords, improving
                  website structure, internal and external linking, and other
                  strategies to ensure high organic visibility and attract more
                  visitors to the site. SEO
                </p>
              </div>
            </div>
            <div className={s.technologies__imageWrapper}>
              <div className={s.technologies__iconWrapper}>
                <BiExpandAlt className={s.technologies__iconOpen} />
              </div>
              <div className={s.technologies__cardContainer}>
                <Image
                  className={s.technologies__imageAPI}
                  src={API}
                  alt="API"
                />
                <p className={s.technologies__descriptionFoto}>API</p>
                <p className={s.technologies__textEcommerce}>
                  APIs provide the ability to exchange data and functionality
                  between various software applications, allowing for enhanced
                  functionality and integration of different services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
