import { useState, useEffect } from "react";

const useResponsiveItemsToShow = () => {
  const [itemsToShow, setItemsToShow] = useState<number>(7);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth <= 767.98) {
        setItemsToShow(4);
      } else {
        setItemsToShow(7);
      }
    };

    updateItemsToShow();

    const handleResize = () => {
      updateItemsToShow();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return itemsToShow;
};

export default useResponsiveItemsToShow;
