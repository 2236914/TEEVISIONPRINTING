import React from 'react';

const TrapezoidBackground = () => {
  return (
    <svg
      width="841"
      height="383"
      viewBox="0 0 841 383"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <g filter="url(#filter0_i_556_348)">
        <path
          d="M0 16C0 7.16345 7.16344 0 16 0H733.426C737.893 0 742.23 1.49495 745.748 4.24661L789.706 38.6296L832.62 73.211C837.332 77.0077 840.071 82.7332 840.071 88.784V366.384C840.071 375.221 832.908 382.384 824.071 382.384H16C7.16345 382.384 0 375.221 0 366.384V16Z"
          fill="#FFCD00"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_556_348"
          x="0"
          y="0"
          width="842.071"
          height="387.384"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="5" />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_556_348"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TrapezoidBackground;
