import React from 'react';

const Italic = ({
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
        fill={color}
        fillRule="evenodd"
        d="m8.97 19l3.75-14H10a1 1 0 1 1 0-2h8a1 1 0 0 1 0 2h-3.208L11.04 19H14a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2z"
      />
    </svg>
  );
};

export default Italic;
