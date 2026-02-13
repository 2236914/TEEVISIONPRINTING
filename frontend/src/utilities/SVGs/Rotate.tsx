import React from 'react';

const Rotate = ({
  width = 48,
  height = 48,
  color = 'currentColor',
  className,
}: {
  className?: string;
  color?: string;
  height?: number;
  width?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.95 11a8 8 0 1 0-.5 4m.5 5v-5h-5"
      />
    </svg>
  );
};

export default Rotate;
