"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";

import { useOrderProjectData } from "@/hooks/useOrderProjectData";
import СustomLoaderComponent from "./components/СustomLoaderComponent";

const PersonalSpace: React.FC = () => {
  const { orderProjecData, isLoading, error } = useOrderProjectData();
  const projectName = orderProjecData?.[0]?.title;
  useEffect(() => {
    if (projectName !== undefined && projectName !== null) {
      redirect(`/personal-space/${projectName}`);
    }
  }, [projectName]);

  if (isLoading) {
    return <СustomLoaderComponent />;
  }

  if (error) {
    return (
      <div
        style={{
          width: "100%",
          height: 400,
          display: "flex",
          fontSize: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Error loading data
      </div>
    );
  }
  return null;
};

export default PersonalSpace;
