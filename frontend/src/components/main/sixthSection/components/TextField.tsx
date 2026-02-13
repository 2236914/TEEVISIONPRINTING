import React from 'react';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import type { AddQuestionType } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  data: AddQuestionType;
  label: string;
  name: keyof AddQuestionType;
  placeholder: string;
  setData: React.Dispatch<React.SetStateAction<AddQuestionType>>;
  required?: boolean;
};

const TextField: React.FC<PropTypes> = ({
  label,
  placeholder,
  required,
  data,
  name,
  setData,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [name]: event.target.value });
  };

  return (
    <label htmlFor={label} className="flex flex-col gap-2 w-full">
      <p className={`${MaisonNeue} xl:text-[1rem] text-[0.8rem] md:text-xl`}>
        {label}
        {required && <span className="text-primaryT ml-[0.2rem]">*</span>}
      </p>

      <input
        placeholder={placeholder}
        className={`${MaisonNeue} font-light input input-md input-bordered w-full md:text-xl`}
        onChange={handleChange}
        value={data[name]}
      />
    </label>
  );
};

export default TextField;
