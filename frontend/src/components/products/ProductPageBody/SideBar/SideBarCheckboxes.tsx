'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useProductView } from '@/contexts/ProductViewContext';
import Roboto from '@/utilities/fonts/Roboto';
import type { Brand } from '@/utilities/types/shared.types';

type PropTypes = {
  items: Brand[];
};

const SideBarCheckboxes: React.FC<PropTypes> = ({ items }) => {
  const pathname = usePathname();
  const [checkedItems, setCheckedItems] = React.useState<string[]>([]);
  const { searchProduct, brandIdsOnChange } = useProductView();

  const router = useRouter();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckedItems([...checkedItems, event.target.id]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== event.target.id));
    }
  };

  useEffect(() => {
    if (searchProduct !== '' && checkedItems.length > 0) {
      brandIdsOnChange(checkedItems.join(','));
      router.push(
        `${pathname}?brand=${checkedItems.join(',')}&search=${searchProduct}`
      );
    }

    if (searchProduct === '' && checkedItems.length > 0) {
      brandIdsOnChange(checkedItems.join(','));
      router.push(`${pathname}?brand=${checkedItems.join(',')}`);
    }

    if (searchProduct !== '' && checkedItems.length === 0) {
      brandIdsOnChange('');
      router.push(`${pathname}?search=${searchProduct}`);
    }

    if (searchProduct === '' && checkedItems.length === 0) {
      brandIdsOnChange('');
      router.push(pathname);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedItems, searchProduct]);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <label key={item.id} className="flex gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs mt-[0.25rem]"
            id={String(item.slug)}
            checked={checkedItems.includes(String(item.slug))}
            onChange={handleCheckboxChange}
          />
          <p className={`${Roboto} hover:cursor-pointer`}>{item.name}</p>
        </label>
      ))}
    </div>
  );
};

export default SideBarCheckboxes;
