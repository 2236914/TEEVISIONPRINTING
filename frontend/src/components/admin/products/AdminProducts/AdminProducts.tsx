'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import AdminProductsImage from '@/components/admin/products/AdminProducts/subs/AdminProductsImage';
import DeleteButton from '@/components/admin/products/AdminProducts/subs/DeleteButton';
import Search from '@/utilities/SVGs/Search';
import type { AdminProductItemOnList } from '@/utilities/types/shared.types';

type PropTypes = {
  deleteProductOnServer: (productId: number) => Promise<void>;
  products: AdminProductItemOnList[];
};

const AdminProducts: React.FC<PropTypes> = ({
  products,
  deleteProductOnServer,
}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [searchTerm, setSearchTerm] = useState('');

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="ml-64 p-16">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold bg-background4 p-8 rounded-lg">
          View all products
        </h1>

        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-start w-full">
            <label className="input input-sm input-bordered flex items-center gap-2 h-[3rem] w-full bg-white">
              <Search width={20} height={20} color="#A9A9A9" />
              <input
                type="text"
                className="grow"
                placeholder="Search"
                onChange={onSearchChange}
                value={searchTerm}
              />
            </label>
          </div>
          <table className="table mt-4">
            <thead>
              <tr>
                <th>Featured Image</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Style</th>
                <th>Website Visibility</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <AdminProductsImage productImageUrl={product.imageUrl} />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.brandName}</td>
                  <td>{product.styleName}</td>
                  <td>
                    {product.isProductVisibleInWebsite ? 'Shown' : 'Hidden'}
                  </td>
                  <td>
                    <div className="flex items-center gap-4">
                      <Link href={`/admin/products/view/${product.id}`}>
                        <button className="btn btn-sm">View</button>
                      </Link>
                      <Link href={`/admin/products/edit/${product.id}`}>
                        <button className="btn btn-sm">Edit</button>
                      </Link>
                      <DeleteButton
                        productId={product.id}
                        deleteProductOnServer={deleteProductOnServer}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
