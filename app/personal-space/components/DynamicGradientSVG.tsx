import React from "react";
import s from "./DynamicGradientSVG.module.scss";

interface DynamicGradientSVGProps {
  categoryColors?: {
    gradient1: string;
    gradient2: string;
  };
  index?: any;
}

const DynamicGradientSVG: React.FC<DynamicGradientSVGProps> = ({
  categoryColors,
  index,
}) => {
  const { gradient1, gradient2 } = categoryColors || {
    gradient1: "blue",
    gradient2: "red",
  };
  return (
    <svg
      // width="24"
      // height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        id={`Ellipse-${index}`}
        cx="12"
        cy="11.5"
        rx="12"
        ry="11.5"
        fill={`url(#gradient-${index})`}
        fillOpacity="0.7"
      />
      <defs>
        <radialGradient
          id={`gradient-${index}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 11.5) rotate(90) scale(11.5 12)"
        >
          <stop stopColor={gradient1} />
          <stop offset="1" stopColor={gradient2} stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default DynamicGradientSVG;
