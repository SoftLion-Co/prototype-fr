// import HeadingOurProjectComponent from "@/components/HeadingOurProjectComponent"
// import s from "./RequestSection.module.scss"
// import classNames from "classnames";
// import Image from "next/image";
// import svg from "../../../images/request-List.svg"

// const arrayList = [
//     {
//         id: 1,
//         svg: <Image src={svg} alt=""/>,
//         text: "Mobile compatibility for correct display on different devices",
//     },

//     {
//         id: 2,
//         svg: <Image src={svg} alt=""/>,
//         text: "Analytics and tracking to collect data about visits and user behavior.",
//     },

//     {
//         id: 3,
//         svg: <Image src={svg} alt=""/>,
//         text: "A convenient online booking system for services that require a reservation.",
//     },

//     {
//         id: 4,
//         svg: <Image src={svg} alt=""/>,
//         text: "Support and after-sales service for reliable cooperation.",
//     },

//     {
//         id: 5,
//         svg: <Image src={svg} alt=""/>,
//         text: "Fast page loading to ensure visitor satisfaction.",
//     },
// ]

// const RequestSection = () => {
//     return (
//         <section className={s.request}>
//             <HeadingOurProjectComponent title="01" text="Request"/>
//             <div className={classNames(s.container, s.request__content)}>
//             <p className={s.request__text}>Properly formulating a request plays a crucial role in the project development process. It is a key step that allows us to understand your needs, requirements, and expectations. When you provide detailed descriptions of your goals and desired outcomes, it provides us with the necessary information for successful website or application development.</p>
//             </div>
//         </section>
//     )
// }

// export default RequestSection;


import React from "react";
import classNames from "classnames";
import Image from "next/image";
import HeadingOurProjectComponent from "@/components/HeadingOurProjectComponent";
import s from "./RequestSection.module.scss";
import svg from "../../../images/request-List.svg";

const arrayList = [
  {
    id: 1,
    text: "Mobile compatibility for correct display on different devices",
  },
  {
    id: 2,
    text: "Analytics and tracking to collect data about visits and user behavior.",
  },
  {
    id: 3,
    text: "A convenient online booking system for services that require a reservation.",
  },
  {
    id: 4,
    text: "Support and after-sales service for reliable cooperation.",
  },
  {
    id: 5,
    text: "Fast page loading to ensure visitor satisfaction.",
  },
];

const RequestSection = () => {
  return (
    <section className={s.request}>
      <HeadingOurProjectComponent title="01" text="Request" />
      <div className={classNames(s.container, s.request__content)}>
        <p className={s.request__text}>
          Properly formulating a request plays a crucial role in the project development process. It is a key step that allows us to understand your needs, requirements, and expectations. When you provide detailed descriptions of your goals and desired outcomes, it provides us with the necessary information for successful website or application development.
        </p>
        <ul className={s.request__list}>
          {arrayList.map((item) => (
            <li key={item.id} className={s.request__list_text}>
              <span className={s.request__svg}>
                <Image src={svg} alt="" />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RequestSection;
