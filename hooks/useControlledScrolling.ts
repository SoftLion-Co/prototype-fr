import { useEffect, useState } from "react";

export const useControlledScrolling = (items: any[]) => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (itemId: string): void => {
    setActiveItem(itemId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const titleElements = items.map((item) =>
        document.getElementById(item.id)
      );
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

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
              const previousTitleHeight = previousTitleElement.offsetHeight;

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  return [activeItem, handleClick] as const;
};
