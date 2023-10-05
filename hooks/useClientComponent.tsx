"use client";

import React, { useEffect } from "react";
import { useClientServer } from "./useClient";

interface UseClientComponentProps {
  title: string;
}

const UseClientComponent: React.FC<UseClientComponentProps> = ({ title }) => {
  useEffect(() => {
    document.title = `SoftLion | ${title}`;
  }, [title]);

  useClientServer();

  return <div>{/* Вміст */}</div>;
};

export default UseClientComponent;
