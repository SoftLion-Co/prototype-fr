import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `SoftLion | ${title}`;
  }, [title]);
};

export default useDocumentTitle;
