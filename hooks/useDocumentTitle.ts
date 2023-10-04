"use client";

import { useEffect } from "react";

const useDocumentTitle = (title: any) => {
  useEffect(() => {
    document.title = `SoftLion | ${title}`; 
  }, [title]); 
};

export default useDocumentTitle;
