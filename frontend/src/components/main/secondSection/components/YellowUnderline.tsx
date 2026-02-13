import React from 'react';

const YellowUnderline = ({
  width = 330,
  className,
  height = 10,
  strokeWidth = 9,
}: {
  className?: string;
  height?: number;
  strokeWidth?: number;
  width?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 466 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 5H461"
        stroke="#FFCD00"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default YellowUnderline;
