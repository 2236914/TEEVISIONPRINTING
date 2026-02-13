import React from 'react';

const Undo = ({
  width = 48,
  height = 48,
}: {
  height?: number;
  width?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M3 7v6h6" />
        <path d="M21 17a9 9 0 0 0-9-9a9 9 0 0 0-6 2.3L3 13" />
      </g>
    </svg>
  );
};

export default Undo;
