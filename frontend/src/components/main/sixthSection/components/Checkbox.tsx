import React from 'react';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

type PropTypes = {
  data: boolean;
  label: string;
  setData: React.Dispatch<React.SetStateAction<boolean>>;
};

const Checkbox: React.FC<PropTypes> = ({ label, data, setData }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.checked);
  };

  return (
    <label className="flex gap-2">
      <input
        type="checkbox"
        className="checkbox mt-[0.1rem] [--chkbg:#FFFFFF] [--chkfg:#FFCD00]"
        checked={data}
        onChange={handleChange}
      />
      <p
        className={`${MaisonNeue} text-[0.8rem] font-light md:text-xl xl:text-md`}
      >
        {label}
      </p>
    </label>
  );
};

export default Checkbox;
