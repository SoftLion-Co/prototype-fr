import { useState, useEffect } from "react";

const useScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo(0, 0);
      setScrollToTop(false);
    }
  }, [scrollToTop]);

  return {
    scrollToTop,
    setScrollToTop,
  };
};

export default useScrollToTop;
