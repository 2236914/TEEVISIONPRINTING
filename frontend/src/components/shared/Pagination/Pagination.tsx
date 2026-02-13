import React from 'react';

type PropTypes = {
  numberOfPages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  size: number;
};

const Pagination: React.FC<PropTypes> = ({
  page,
  setPage,
  numberOfPages,
  size,
  setSize,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-center join">
        {Array.from({ length: numberOfPages }, (__, idx) => (
          <input
            key={idx}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={String(idx + 1)}
            checked={idx === page}
            onChange={() => setPage(idx)}
          />
        ))}
      </div>
      <div className="flex items-center gap-4">
        {' '}
        <p>Number of items: </p>
        <select
          className="select select-bordered w-[5rem]"
          value={size}
          onChange={(event) => setSize(Number(event.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="75">75</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
