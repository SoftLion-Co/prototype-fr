import React, { FC, ReactNode, ComponentProps } from "react";
import classNames from "classnames";
import s from "./MainButtonComponent.module.scss";
import PropTypes from "prop-types"

interface MainButtonComponentProps extends ComponentProps<"button"> {
  loading?: boolean;
  color?: "blue" | "white" | "dark-blue";
  children: ReactNode;
}

const MainButtonComponent: FC<MainButtonComponentProps> = ({
  loading = false,
  color = "blue",
  className,
  children,
  ...rest
}) => {
  const buttonClass = classNames(s.button, className, {
    [s.blueButton]: color === "blue",
    [s.whiteButton]: color === "white",
    [s.darkBlueButton]: color === "dark-blue",
  });

  return (
    <button
      disabled={loading || rest.disabled}
      className={buttonClass}
      {...rest}
    >
      <>{children}</>
    </button>
  );
};

MainButtonComponent.propTypes = { loading: PropTypes.bool };
MainButtonComponent.defaultProps = { children: "Click me", loading: true, color: "blue" };

export default MainButtonComponent;

// import React from 'react';
// import s from './MainButtonComponent.module.scss';

// type ButtonColor = 'blue' | 'white' | 'dark-blue';

// interface MainButtonProps {
//     text: string;
//     color: ButtonColor;
//     onClick: () => void;
//   }

// const colorClasses = {
//   blue: s.blueButton,
//   white: s.whiteButton,
//   'dark-blue': s.darkBlueButton,
// };

// const MainButtonComponent: React.FC<MainButtonProps> = ({ text, color, onClick }) => {
//     const buttonClassName = `${s.button} ${colorClasses[color]}`;

//     return (
//       <div>
//         <button className={buttonClassName} onClick={onClick}>
//           {text}
//         </button>
//       </div>
//     );
//   };

// export default MainButtonComponent;
