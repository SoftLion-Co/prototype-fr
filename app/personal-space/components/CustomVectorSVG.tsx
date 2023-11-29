import { statusProject } from "@/app/personal-space/components/useDynamicComponents";

interface CustomVectorSVGProps {
  projectStatus?: number;
}

const CustomVectorSVG: React.FC<CustomVectorSVGProps> = ({ projectStatus }) => {
  return (
    <svg
      // width="30"
      // height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Vector" filter="url(#filter0_d_3770_12208)">
        <path
          d="M14 21C17.3137 21 20 18.3137 20 15C20 11.6863 17.3137 9 14 9C10.6863 9 8 11.6863 8 15C8 18.3137 10.6863 21 14 21Z"
          fill={`${
            projectStatus !== undefined
              ? statusProject.colors[projectStatus]
              : "#fff"
          }`}
          fillOpacity="0.4"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3770_12208"
          x="0"
          y="0"
          width="30"
          height="30"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" />
          <feGaussianBlur stdDeviation="4.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.506482 0 0 0 0 0.871667 0 0 0 0 0.499029 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3770_12208"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3770_12208"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CustomVectorSVG;
