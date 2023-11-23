import s from "./page.module.scss";
import React, { ReactNode } from "react";
import classNames from "classnames";

const PersonalLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={classNames(s.personalLayout, s.container)}>
      <>{children}</>
    </div>
  );
};

export default PersonalLayout;
