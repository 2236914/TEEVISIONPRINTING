import React from 'react';

const Move = ({
  width = 48,
  height = 48,
  color = 'currentColor',
}: {
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
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m14 5l-2-2m0 0l-2 2m2-2v18m0 0l2-2m-2 2l-2-2m9-5l2-2m0 0l-2-2m2 2H3m0 0l2 2m-2-2l2-2"
      />
    </svg>
  );
};

export default Move;
