import { useEffect, useState, useCallback } from "react";

export const useControlledScrolling = (items: any[]) => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = useCallback((itemId: string): void => {
    setActiveItem(itemId);
  }, []);

  const handleScroll = useCallback(() => {
    const titleElements = items.map((item) => document.getElementById(item.id));
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let activeItemId = "";

    for (let i = titleElements.length - 1; i >= 0; i--) {
      const titleElement = titleElements[i];

      if (titleElement) {
        const titleOffsetTop = titleElement.offsetTop;
        const titleHeight = titleElement.offsetHeight;
        const scrollRangeStart = 100;

        if (
          scrollTop >= titleOffsetTop - scrollRangeStart &&
          scrollTop < titleOffsetTop + titleHeight
        ) {
          activeItemId = titleElement.id;
          break;
        } else if (scrollTop < titleOffsetTop - scrollRangeStart) {
          const previousTitleElement = titleElements[i - 1];

          if (previousTitleElement) {
            const previousTitleOffsetTop = previousTitleElement.offsetTop;

            if (
              scrollTop >= previousTitleOffsetTop - scrollRangeStart &&
              scrollTop < titleOffsetTop
            ) {
              activeItemId = previousTitleElement.id;
              break;
            }
          }
        }
      }
    }

    setActiveItem(activeItemId);
  }, [items]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return [activeItem, handleClick] as const;
};
