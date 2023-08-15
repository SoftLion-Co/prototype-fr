import { useState, useRef, useEffect } from "react";

interface Category {
  name: string;
}

const useSwitchingCategoriesCarousel = (
  categories: Category[],
  itemsToShow: number
) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );
  const [animateCarousel, setAnimateCarousel] = useState(false);
  const [currentSliderPosition, setCurrentSliderPosition] = useState(0);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollToPosition = (position: number) => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      const width = sliderElement.getBoundingClientRect().width;
      const scrollPosition = -position * (width + 30);
      sliderElement.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const x = e.clientX;
    const moveX = startX - x;
    const sliderElement = sliderRef.current;

    if (sliderElement) {
      const width = sliderElement.getBoundingClientRect().width;
      const maxPosition = Math.max(0, categories.length - itemsToShow);
      const newPosition = sliderPosition + (moveX / width) * itemsToShow;

      if (newPosition >= 0 && newPosition <= maxPosition) {
        setSliderPosition(Math.round(newPosition));
      }
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;

    const x = e.touches[0].clientX;
    const moveX = startX - x;
    setStartX(x);

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      const width = sliderElement.getBoundingClientRect().width;
      const newPosition = sliderPosition + (moveX / width) * categories.length;

      if (newPosition >= 0 && newPosition <= categories.length - itemsToShow) {
        setSliderPosition(newPosition);
      }
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    } else {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  const visibleCategories = categories.slice(
    sliderPosition,
    Math.min(sliderPosition + itemsToShow, categories.length)
  );

  const handleCategoryIndicatorClick = (pageIndex: number) => {
    const newPosition = pageIndex * itemsToShow;

    const slideDirection =
      newPosition > currentSliderPosition ? "right" : "left";
    setSlideDirection(slideDirection);
    setAnimateCarousel(true);
    setSliderPosition(newPosition);
    scrollToPosition(newPosition);
    setCurrentSliderPosition(newPosition);
  };

  return {
    sliderRef,
    visibleCategories,
    animateCarousel,
    slideDirection,
    setAnimateCarousel,
    setSlideDirection,
    sliderPosition,
    setSliderPosition,
    handleCategoryIndicatorClick,
  };
};

export default useSwitchingCategoriesCarousel;
