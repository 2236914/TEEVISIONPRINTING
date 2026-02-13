'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';

import AddAColorModal from '@/components/admin/colors/AdminColors/AddAColorModal';
import EditButtonColorModal from '@/components/admin/colors/AdminColors/EditButtonColorModal';
import Pagination from '@/components/shared/Pagination/Pagination';
import {
  addColorOnServer,
  editColorOnServer,
} from '@/server-actions/color-actions';
import { fetchPaginatedColors } from '@/utilities/fetch/color';
import { isColorDark } from '@/utilities/helpers/colorUtils';
import Search from '@/utilities/SVGs/Search';
import type { PaginatedColor } from '@/utilities/types/shared.types';

const AdminColors = () => {
  // const colors = await fetchColors();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [search, setSearch] = useState('');

  const colorsQuery = useQuery<PaginatedColor>({
    queryKey: ['colors', 'paginated', page, size, search],
    queryFn: () => fetchPaginatedColors(page, size, search),
  });

  const paginatedColors = colorsQuery.data;
  const colors = paginatedColors?.contents || [];

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="ml-64 p-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold bg-background4 p-8 rounded-lg">
          View all colors
        </h1>
        <div className="flex flex-col gap-4">
          <AddAColorModal
            addColorOnServer={addColorOnServer}
            page={page}
            size={size}
          >
            <button type="submit" className="btn">
              Add a Color
            </button>
          </AddAColorModal>
          <div className="flex flex-col bg-white p-4 rounded-lg">
            <div className="flex justify-start w-full">
              <label className="input input-sm input-bordered flex items-center gap-2 h-[3rem] w-full bg-white">
                <Search width={20} height={20} color="#A9A9A9" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Search"
                  onChange={onSearchChange}
                  value={search}
                />
              </label>
            </div>
            <table className="table mb-12 mt-4">
              <thead>
                <tr>
                  <th>Color Name</th>
                  <th>Hex Code</th>
                  <th>Status</th>
                  <th>Actions</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>
                {colorsQuery.isLoading
                  ? Array.from({ length: size })
                      .fill(0)
                      .map((__, idx) => (
                        <tr key={idx} className="w-full">
                          <td className="h-[56.5px] pr-8">
                            <div className="skeleton w-full h-full" />
                          </td>
                          <td className="h-[56.5px] pr-8">
                            <div className="skeleton w-full h-full" />
                          </td>
                          <td className="h-[56.5px] pr-8">
                            <div className="skeleton w-full h-full" />
                          </td>
                          <td className="h-[56.5px] pr-8">
                            <div className="skeleton w-full h-full" />
                          </td>
                          <td className="h-[56.5px]">
                            <div className="skeleton w-full h-full" />
                          </td>
                        </tr>
                      ))
                  : colors.map((color) => (
                      <tr key={color.id}>
                        <td className="pr-8">{color.name}</td>
                        <td className="pr-8">
                          {color.isImage ? (
                            <Image
                              src={color.imageUrl}
                              width={100}
                              height={100}
                              alt="color"
                              className="w-[4.5rem] h-[4.5rem] object-cover"
                            />
                          ) : (
                            <div
                              style={{
                                backgroundColor: color.hexCode,
                                color: isColorDark(color.hexCode)
                                  ? 'white'
                                  : 'black',
                              }}
                              className="flex items-center justify-center w-[4.5rem] h-[4.5rem]"
                            >
                              {color.hexCode}
                            </div>
                          )}
                        </td>
                        <td className="pr-8">
                          {color.isActive ? 'active' : 'inactive'}
                        </td>
                        <td>
                          <div className="flex items-center justify-center gap-4 pr-12 w-fit">
                            <EditButtonColorModal
                              editColorOnServer={editColorOnServer}
                              color={color}
                              page={page}
                              size={size}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="flex gap-2 flex-wrap">
                            {color.tags.map((tag, idx) => (
                              <span
                                className="badge p-4 bg-priceMarkupIndicationBackground"
                                key={idx}
                              >
                                <p>{tag}</p>
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
            <Pagination
              page={page}
              setPage={setPage}
              numberOfPages={paginatedColors?.totalPages || 0}
              size={size}
              setSize={setSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminColors;
