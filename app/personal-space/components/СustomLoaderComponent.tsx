import React from "react";
import s from "./СustomLoaderComponent.module.scss";

const CustomLoader = () => {
  return (
    <div className={s.loader}>
      <svg
        aria-labelledby="loading_44_aria"
        role="img"
        viewBox="0 0 400 160"
        height="260"
        width="600"
      >
        <title id="loading_44_aria">Loading...</title>
        <rect
          role="presentation"
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#loading_44_diff)"
          fill="url(#loading_44_animated_diff)"
        />
        <defs>
          <clipPath id="loading_44_diff">
            <circle cx="150" cy="86" r="14"></circle>
            <circle cx="194" cy="86" r="14"></circle>
            <circle cx="238" cy="86" r="14"></circle>
          </clipPath>
          <linearGradient id="loading_44_animated_diff">
            <stop offset="0%" stopColor="transparent" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-2; -2; 1"
                keyTimes="0; 0.25; 1"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#eee" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1; -1; 2"
                keyTimes="0; 0.25; 1"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="transparent" stopOpacity="1">
              <animate
                attributeName="offset"
                values="0; 0; 3"
                keyTimes="0; 0.25; 1"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CustomLoader;
