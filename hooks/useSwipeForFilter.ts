import { useRef, useState, useEffect } from "react";

export const useSwipeForFilter = (
  totalItems: number,
  itemsToShow: number,
  sliderPosition: number,
  setSliderPosition: (position: number) => void
) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const itemsPerSwipe = 5; // Number of items to swipe at a time

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStartX === null) return;

    const touchX = e.touches[0].clientX;
    const moveX = touchStartX - touchX;

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      const width = sliderElement.getBoundingClientRect().width;
      const newPosition = sliderPosition + (moveX / width) * totalItems;

      setSliderPosition(
        Math.max(0, Math.min(newPosition, totalItems - itemsToShow))
      );
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const moveX = touchStartX - touchEndX;

      const sliderElement = sliderRef.current;
      if (sliderElement) {
        const width = sliderElement.getBoundingClientRect().width;
        const itemsToSwipe = Math.floor(
          Math.abs(moveX) / (width / itemsPerSwipe)
        );
        const direction = moveX > 0 ? 1 : -1;
        const newPosition = sliderPosition + direction * itemsToSwipe;

        setSliderPosition(
          Math.max(0, Math.min(newPosition, totalItems - itemsToShow))
        );
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleTouchEndX = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  useEffect(() => {
    if (touchStartX !== null) {
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);

      return () => {
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [touchStartX]);

  return { sliderRef, handleTouchStart, handleTouchEndX };
};
