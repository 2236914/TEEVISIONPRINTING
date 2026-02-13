import React from 'react';

const LeftArrow = ({
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
      width={width}
      height={height}
      viewBox="0 0 18 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6566 0.766392C17.0727 -0.0636778 15.9471 -0.248184 15.1426 0.354286L0.742682 11.1376C0.284073 11.481 0.00898941 12.0272 0.000214126 12.6118C-0.00855945 13.1964 0.250001 13.7511 0.698082 14.1091L15.098 25.6113C15.884 26.2391 17.0146 26.0907 17.6232 25.2797C18.2317 24.4687 18.0879 23.3022 17.3018 22.6743L4.80032 12.6885L17.2572 3.36023C18.0617 2.75776 18.2405 1.59646 17.6566 0.766392Z"
        fill={color}
      />
    </svg>
  );
};

export default LeftArrow;
