'use client';
import React from 'react';

import Search from '@/utilities/SVGs/Search';

type PropTypes = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const ProductSearch: React.FC<PropTypes> = ({ searchTerm, setSearchTerm }) => {
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <label className="input input-sm input-bordered flex items-center gap-2 w-full h-[3rem] bg-transparent z-50">
      <Search width={20} height={20} color="#A9A9A9" />
      <input
        type="text"
        className="grow"
        placeholder="Search"
        onChange={onSearchChange}
        value={searchTerm}
      />
    </label>
  );
};

export default ProductSearch;
