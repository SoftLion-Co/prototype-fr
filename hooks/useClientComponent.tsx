"use client";
import React, { useEffect } from "react";
import { useClientServer } from "./useClient";

interface UseClientComponentProps {
  argument?: string;
  title: string;
}

const UseClientComponent: React.FC<UseClientComponentProps> = ({
  argument,
  title,
}) => {
  useEffect(() => {
    document.title = `SoftLion | ${title}`;
  }, [title]);

  useClientServer();

  return <div>{/* Вміст */}</div>;
};

export default UseClientComponent;
