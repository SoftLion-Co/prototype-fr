import s from "./TitleServicesComponent.module.scss";
import React, { FC } from "react";

interface TitleServicesComponentProps {
  num: number | string;
  text: string;
}

const TitleServicesComponent: FC<TitleServicesComponentProps> = ({
  num,
  text,
}) => {
  return (
    <div className={s.title}>
      <h1 className={s.title__num}>{num}</h1>
      <h2 className={s.title__text}>{text}</h2>
    </div>
  );
};

export default TitleServicesComponent;

// import s from "./TitleServicesComponent.module.scss";
// import React, { FC } from "react";
// import classNames from "classnames";

// interface TitleServicesComponentProps {
//   num: string;
//   text: string;
//   position?: "left" | "right";
// }

// const TitleServicesComponent: FC<TitleServicesComponentProps> = ({
//   num,
//   text,
//   position="left",
// }) => {

//   const buttonClass = classNames(s.titlenum, className, {
//     [s.left]: position === "left",
//     [s.right]: position === "right",
//   });


//   return (
//     <div className={s.title}>
//       <h1 className={buttonClass}>{num}</h1>
//       <h2 className={s.titletext}>{text}</h2>
//     </div>
//   );
// };

// export default TitleServicesComponent;
