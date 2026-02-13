import React from 'react';

type PropTypes = {
  handleTabChange: (tab: number) => void;
  tabSelected: number;
};

const ProductTabs: React.FC<PropTypes> = ({ handleTabChange, tabSelected }) => {
  return (
    <div className="flex w-full mt-4">
      <div className="w-[70rem] flex">
        <div
          className={`relative w-1/3 h-[3rem] ${tabSelected === 0 ? 'z-50' : 'z-0'} `}
        >
          <button
            type="button"
            className={`absolute w-full h-full drop-shadow-secondSectionTab`}
            onClick={() => handleTabChange(0)}
          >
            <svg
              width="350"
              height="64"
              viewBox="0 0 413 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-2"
            >
              <path
                d="M356.826 7.8L412.345 63.3664H0V21.3445C0 9.55626 11.6292 0 25.9745 0H336.751C344.526 0 351.892 2.86208 356.826 7.8Z"
                fill="white"
              />
            </svg>

            <div className="w-full h-full absolute top-0 z-10 flex items-center justify-center">
              <p className="text-lg font-bold text-center pr-12">T-SHIRTS</p>
            </div>
          </button>
          <div />
        </div>
        <div
          className={`relative w-1/3 h-[3rem] ${tabSelected === 1 ? 'z-50' : 'z-10'}`}
        >
          <button
            type="button"
            className={`absolute w-full h-full drop-shadow-secondSectionTab`}
            onClick={() => handleTabChange(1)}
          >
            <svg
              width="380"
              height="100"
              viewBox="0 0 507 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-[1.6rem] -left-16"
            >
              <path
                d="M447.301 7.54047L506.503 68.2127H0L42.8314 10.1579C47.5442 3.77002 55.0107 0 62.9489 0H429.408C436.145 0 442.596 2.71881 447.301 7.54047Z"
                fill="white"
              />
            </svg>

            <div className="w-full h-full absolute top-0 z-10 flex items-center justify-center">
              <p className="text-lg font-bold text-center pr-28">SWEATSHIRTS</p>
            </div>
          </button>
        </div>
        <div
          className={`relative w-1/3 h-[3rem] z-0 ${tabSelected === 2 ? 'z-50' : 'z-0'}`}
        >
          <button
            type="button"
            className={`absolute w-full h-full drop-shadow-secondSectionTab`}
            onClick={() => handleTabChange(2)}
          >
            <svg
              width="400"
              height="100"
              viewBox="0 0 551 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-[1.6rem] -left-24"
            >
              <path
                d="M491.133 7.54046L550.335 68.2127H0L42.8314 10.1579C47.5442 3.77002 55.0106 0 62.9488 0H473.24C479.977 0 486.428 2.71881 491.133 7.54046Z"
                fill="white"
              />
            </svg>

            <div className="w-full h-full absolute top-0 z-10 flex items-center justify-center">
              <p className="text-lg font-bold text-center pr-36">
                LONG-SLEEVE SHIRTS
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
