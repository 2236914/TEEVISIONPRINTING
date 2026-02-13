import React from 'react';

const RightArrow = ({
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
        d="M0.343385 0.766392C0.927317 -0.0636769 2.05289 -0.248184 2.85742 0.354286L17.2573 11.1376C17.7159 11.481 17.991 12.0272 17.9998 12.6118C18.0086 13.1964 17.75 13.7511 17.3019 14.1091L2.90202 25.6113C2.11596 26.2391 0.985388 26.0907 0.376823 25.2797C-0.231742 24.4687 -0.0878511 23.3022 0.698212 22.6743L13.1997 12.6885L0.742811 3.36023C-0.061719 2.75776 -0.240548 1.59646 0.343385 0.766392Z"
        fill={color}
      />
    </svg>
  );
};

export default RightArrow;
