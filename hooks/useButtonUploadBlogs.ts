import { useEffect, useState, useCallback } from "react";

interface Blog {
  id: number;
  title: string;
  category: string;
  readingTime: string;
  author: string;
  authorIconSrc: string;
  text: string;
  imageSrc: string;
  tags: string[];
}

const useButtonUploadBlogs = (
  totalBlogs: number,
  blogsPerPage: number,
  visibleBlogs: Blog[],
  setVisibleBlogs: React.Dispatch<React.SetStateAction<Blog[]>>,
  allBlogs: Blog[]
) => {
  const [shouldRenderButton, setShouldRenderButton] = useState(false);

  const handleResize = useCallback(() => {
    console.log("handleResize called");
    const shouldRender =
      window.innerWidth <= 767.98 && visibleBlogs.length < totalBlogs;
    setShouldRenderButton(shouldRender);
  }, [totalBlogs, visibleBlogs.length]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleUpload = () => {
    console.log("handleUpload called");
    const startIndex = visibleBlogs.length;
    const endIndex = Math.min(startIndex + blogsPerPage, totalBlogs);
    const newVisibleBlogs = allBlogs.slice(startIndex, endIndex);
    setVisibleBlogs((prevVisibleBlogs) => [
      ...prevVisibleBlogs,
      ...newVisibleBlogs,
    ]);
  };

  return {
    shouldRenderButton,
    handleUpload,
  };
};

export default useButtonUploadBlogs;
