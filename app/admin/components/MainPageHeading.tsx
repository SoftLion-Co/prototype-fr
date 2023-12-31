import React, { useState } from "react";
import s from "./MainPageHeading.module.scss";

interface MainPageHeadingProps {
  initialText: string;
}

const MainPageHeading: React.FC<MainPageHeadingProps> = ({ initialText }) => {
  const [tsxt] = useState(initialText);

  return <h1 className={s.main__heading}>{tsxt}</h1>;
};

export default MainPageHeading;
