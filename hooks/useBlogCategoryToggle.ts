// import { useState, useRef, useEffect } from "react";

// const useBlogCategoryToggle = (
//   categories: string[],
//   totalItems: number,
//   itemsToShow: number
// ) => {
//   const [sliderPosition, setSliderPosition] = useState(0);
//   const [startX, setStartX] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);

//   const sliderRef = useRef(null);

//   const handleSliderNext = () => {
//     const maxPosition = Math.max(0, categories.length - itemsToShow);
//     const newPosition = Math.min(sliderPosition + itemsToShow, maxPosition);
//     setSliderPosition(newPosition);
//     scrollToPosition(newPosition);
//   };

//   const handleSliderPrev = () => {
//     const newPosition = Math.max(0, sliderPosition - itemsToShow);
//     setSliderPosition(newPosition);
//     scrollToPosition(newPosition);
//   };

//   const scrollToPosition = (position) => {
//     const sliderElement = sliderRef.current;
//     if (sliderElement) {
//       const width = sliderElement.getBoundingClientRect().width;
//       sliderElement.scrollTo({
//         left: position * (width + 30),
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true);
//     setStartX(e.clientX);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return;
//     const x = e.clientX;
//     const moveX = startX - x;
//     const sliderElement = sliderRef.current;

//     if (sliderElement) {
//       const width = sliderElement.getBoundingClientRect().width;
//       const maxPosition = Math.max(0, totalItems - itemsToShow);
//       const newPosition = sliderPosition + (moveX / width) * itemsToShow;

//       if (newPosition >= 0 && newPosition <= maxPosition) {
//         setSliderPosition(Math.round(newPosition));
//       }
//     }
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     setIsDragging(true);
//     setStartX(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     setIsDragging(false);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!isDragging) return;
//     const x = e.touches[0].clientX;
//     const moveX = startX - x;
//     const sliderElement = sliderRef.current;

//     if (sliderElement) {
//       const width = sliderElement.getBoundingClientRect().width;
//       const maxPosition = Math.max(0, totalItems - itemsToShow);
//       const newPosition = sliderPosition + (moveX / width) * itemsToShow;

//       if (newPosition >= 0 && newPosition <= maxPosition) {
//         setSliderPosition(Math.round(newPosition));
//       }
//     }
//   };

//   useEffect(() => {
//     if (isDragging) {
//       window.addEventListener("mousemove", handleMouseMove);
//       window.addEventListener("mouseup", handleMouseUp);
//       window.addEventListener("touchmove", handleTouchMove);
//       window.addEventListener("touchend", handleTouchEnd);
//     } else {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//       window.removeEventListener("touchmove", handleTouchMove);
//       window.removeEventListener("touchend", handleTouchEnd);
//     }

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//       window.removeEventListener("touchmove", handleTouchMove);
//       window.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [
//     isDragging,
//     handleMouseMove,
//     handleMouseUp,
//     handleTouchMove,
//     handleTouchEnd,
//   ]);

//   const visibleCategories = categories.slice(
//     sliderPosition,
//     Math.min(sliderPosition + itemsToShow, categories.length)
//   );

//   const [activeCategory, setActiveCategory] = useState(null);

//   const handleCategoryChangeInternal = (category: string | null) => {
//     if (category === null) {
//       setActiveCategory(null);
//     } else {
//       setActiveCategory(category);

//       const categoryIndex = categories.indexOf(category);
//       if (categoryIndex > -1 && categoryIndex >= sliderPosition + itemsToShow) {
//         setSliderPosition(categoryIndex - itemsToShow + 1);
//       } else if (categoryIndex > -1 && categoryIndex < sliderPosition) {
//         setSliderPosition(categoryIndex);
//       }
//     }
//   };

//   return {
//     sliderRef,
//     visibleCategories,
//     activeCategory,
//     handleSliderNext,
//     handleSliderPrev,
//     handleCategoryChangeInternal,
//   };
// };

// export default useBlogCategoryToggle;
