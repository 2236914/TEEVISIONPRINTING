import React from 'react';

const HorizontalRule = ({
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
        d="M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1"
      />
    </svg>
  );
};

export default HorizontalRule;
