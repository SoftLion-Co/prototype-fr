// import s from "./TechnologiesSection.module.scss";

// import React, { useState } from "react";
// import Image from "next/image";
// import UIUX from "../../../images/technologies/UI-UX.svg";
// import Ecommerce from "../../../images/technologies/Ecommerce.svg";
// import SEO from "../../../images/technologies/SEO.svg";
// import API from "../../../images/technologies/API.svg";
// import { BiExpandAlt } from "react-icons/bi";
// import HeadingComponent from "../../../components/HeadingComponent";

// const TechnologiesSection = () => {
//   const [active, setActive] = useState(false);

//   return (
//     <section className={`${s.container} ${s.technologies}`}>
//       <div className={s.technologies__wrapper}>
//         <div className={s.technologies__nameHeader}>
//           <HeadingComponent text="Technologies" />
//         </div>
//         <div className={s.technologies__headerWrapperImg}>
//           <div className={s.technologies__imagesWrapper}>
//             <div
//               className={`${s.technologies__imageWrapper}`}
//               onClick={() => setActive(!active)}
//             >
//               <div className={s.technologies__iconWrapper}>
//                 <BiExpandAlt className={s.technologies__iconOpen} />
//               </div>
//               <div className={s.technologies__cardContainer}>
//                 {!active && (
//                   <div>
//                     <Image
//                       className={s.technologies__imageUIUX}
//                       src={UIUX}
//                       alt="UI/UX"
//                     />
//                     <p className={s.technologies__descriptionFotoUIUX}>UI/UX</p>
//                   </div>
//                 )}
//                 {active && (
//                   <p className={s.technologies__textEcommerce}>
//                     UI/UX focuses on designing intuitive and visually appealing
//                     interfaces that provide users with a positive experience
//                     when interacting with digital products.
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div
//               className={`${s.technologies__imageWrapper}`}
//               onClick={() => setActive(!active)}
//             >
//               <div className={s.technologies__iconWrapper}>
//                 <BiExpandAlt className={s.technologies__iconOpen} />
//               </div>
//               <div className={s.technologies__cardContainer}>
//                 {!active && (
//                   <div>
//                     <Image
//                       className={s.technologies__imageEcommerce}
//                       src={Ecommerce}
//                       alt="Ecommerce"
//                     />
//                     <p className={s.technologies__descriptionFoto}>Ecommerce</p>
//                   </div>
//                 )}
//                 {active && (
//                   <div>
//                     <p className={s.technologies__textEcommerce}>
//                       Ecommerce refers to the buying and selling of goods and
//                       services online. It involves the creation and management
//                       of online stores or platforms where businesses and
//                       consumers can engage in transactions.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div
//               className={`${s.technologies__imageWrapper}`}
//               onClick={() => setActive(!active)}
//             >
//               <div className={s.technologies__iconWrapper}>
//                 <BiExpandAlt className={s.technologies__iconOpen} />
//               </div>
//               <div className={s.technologies__cardContainer}>
//                 <Image
//                   className={s.technologies__imageSEO}
//                   src={SEO}
//                   alt="SEO"
//                 />
//                 <p className={s.technologies__descriptionFotoSeo}>SEO</p>
//                 <p className={s.technologies__textEcommerce}>
//                   SEO optimization includes the use of keywords, improving
//                   website structure, internal and external linking, and other
//                   strategies to ensure high organic visibility and attract more
//                   visitors to the site. SEO
//                 </p>
//               </div>
//             </div>
//             <div
//               className={`${s.technologies__imageWrapper}`}
//               onClick={() => setActive(!active)}
//             >
//               <div className={s.technologies__iconWrapper}>
//                 <BiExpandAlt className={s.technologies__iconOpen} />
//               </div>
//               <div className={s.technologies__cardContainer}>
//                 <Image
//                   className={s.technologies__imageAPI}
//                   src={API}
//                   alt="API"
//                 />
//                 <p className={s.technologies__descriptionFoto}>API</p>
//                 <p className={s.technologies__textEcommerce}>
//                   APIs provide the ability to exchange data and functionality
//                   between various software applications, allowing for enhanced
//                   functionality and integration of different services.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechnologiesSection;
import s from "./TechnologiesSection.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import UIUX from "../../../images/technologies/UI-UX.svg";
import Ecommerce from "../../../images/technologies/Ecommerce.svg";
import SEO from "../../../images/technologies/SEO.svg";
import API from "../../../images/technologies/API.svg";
import { BiExpandAlt } from "react-icons/bi";
import HeadingComponent from "../../../components/HeadingComponent";
const TechnologiesSection = () => {
  const [technologiesData, setTechnologiesData] = useState([
    {
      id: "UIUX",
      className: s.technologies__imageUIUX,
      imgSrc: UIUX,
      imgAlt: "UI/UX",
      description:
        "UI/UX focuses on designing intuitive and visually appealing interfaces that provide users with a positive experience when interacting with digital products.",
      name: "UI/UX",
      isOpen: false,
    },
    {
      id: "Ecommerce",
      className: s.technologies__imageEcommerce,
      imgSrc: Ecommerce,
      imgAlt: "Ecommerce",
      description:
        "Ecommerce refers to the buying and selling of goods and services online. It involves the creation and management of online stores or platforms where businesses and consumers can engage in transactions.",
      name: "Ecommerce",
      isOpen: false,
    },
    {
      id: "SEO",
      className: s.technologies__imageSEO,
      imgSrc: SEO,
      imgAlt: "SEO",
      description:
        "SEO optimization includes the use of keywords, improving website structure, internal and external linking, and other strategies to ensure high organic visibility and attract more visitors to the site. SEO",
      name: "SEO",
      isOpen: false,
    },
    {
      id: "API",
      className: s.technologies__imageAPI,
      imgSrc: API,
      imgAlt: "API",
      description:
        "APIs provide the ability to exchange data and functionality between various software applications, allowing for enhanced functionality and integration of different services.",
      name: "API",
      isOpen: false,
    },
  ]);

  const toggleIsOpen = (id: string) => {
    setTechnologiesData((prevData) =>
      prevData.map((tech) =>
        tech.id === id ? { ...tech, isOpen: !tech.isOpen } : tech
      )
    );
  };
  return (
    <section className={`${s.container} ${s.technologies}`}>
      <div className={s.technologies__wrapper}>
        <div className={s.technologies__nameHeader}>
          <HeadingComponent text="Technologies" />
        </div>
        <div className={s.technologies__headerWrapperImg}>
          <div className={s.technologies__imagesWrapper}>
            {technologiesData.map((tech) => (
              <div
                key={tech.id}
                className={`${s.technologies__imageWrapper} ${
                  tech.isOpen ? s.hovered : ""
                }`}
                onClick={() => toggleIsOpen(tech.id)}
              >
                <div className={s.technologies__iconWrapper}>
                  <BiExpandAlt className={s.technologies__iconOpen} />
                </div>
                <div className={s.technologies__cardContainer}>
                  <Image
                    className={tech.className}
                    src={tech.imgSrc}
                    alt={tech.imgAlt}
                  />
                  <p className={s.technologies__descriptionFoto}>{tech.name}</p>
                  <p className={s.technologies__textEcommerce}>
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
