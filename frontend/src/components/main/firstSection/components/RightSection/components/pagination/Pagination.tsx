import React from 'react';

// eslint-disable-next-line no-restricted-imports
import './Pagination.css';

type PropTypes = {
  isActive: boolean;
};

const Pagination: React.FC<PropTypes> = ({ isActive }) => {
  return <div className={`dot ${isActive ? 'active' : 'inactive'}`} />;
};

export default Pagination;
