import React from 'react';

import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';
import type { AddQuestionType } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  data: AddQuestionType;
  items: Array<{ label: string; value: string }>;
  label: string;
  name: keyof AddQuestionType;
  setData: React.Dispatch<React.SetStateAction<AddQuestionType>>;
  className?: string;
  required?: boolean;
};

const GroupRadio: React.FC<PropTypes> = ({
  label,
  required,
  items,
  name,
  className,
  data,
  setData,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [name]: event.target.value,
    });
  };

  return (
    <label
      htmlFor={label}
      className={`flex flex-col gap-2 w-full ${className}`}
    >
      <p className={`${MaisonNeue} xl:text-[1rem] text-[0.8rem] md:text-xl`}>
        {label}
        {required && <span className="text-primaryT ml-[0.2rem]">*</span>}
      </p>

      <div className="flex gap-12">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="radio"
              className={`${MaisonNeue} font-light radio checked:bg-primaryT`}
              name={name}
              value={item.value}
              checked={data[name] === item.value}
              onChange={handleChange}
            />
            <p
              className={`${MaisonNeue} xl:text-[1rem] text-[0.8rem] md:text-xl`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </label>
  );
};

export default GroupRadio;
