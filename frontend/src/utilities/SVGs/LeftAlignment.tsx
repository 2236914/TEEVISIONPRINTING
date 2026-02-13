import React from 'react';

const LeftAlignment = ({
  width = 24,
  height = 24,
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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 7H5a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2m-4 4H5a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m4 4H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m-4 4H5a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"
      />
    </svg>
  );
};

export default LeftAlignment;
