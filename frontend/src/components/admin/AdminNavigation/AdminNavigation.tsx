'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

import AddABrandButtonWithModal from '@/components/admin/brands/AdminBrands/AddABrandModal';
import AddAColorButtonWithModal from '@/components/admin/colors/AdminColors/AddAColorModal';
import AddAFitButtonWithModal from '@/components/admin/fits/AdminFits/AddAFitModal';
import AdminSignoutButton from '@/components/admin/shared/AdminSignoutButton';
import AddAStyleButtonWithModal from '@/components/admin/styles/AdminStyles/AddAStyleModal';
import { addBrandOnServer } from '@/server-actions/brand-actions';
import { addColorOnServer } from '@/server-actions/color-actions';
import { addFitOnServer } from '@/server-actions/fit-actions';
import { addStyleOnServer } from '@/server-actions/style-actions';
import Cabinet from '@/utilities/SVGs/Cabinet';
import Clothes from '@/utilities/SVGs/Clothes';
import Dashboard from '@/utilities/SVGs/Dashboard';
import { PriceTag } from '@/utilities/SVGs/PriceTag';

type PropTypes = {
  page: string;
};

type NavItem = {
  title: string;
  componentWrapper?: React.ReactNode;
  href?: string;
  icon?: JSX.Element;
  isModal?: boolean;
  page?: string;
  subItems?: Array<NavItem>;
  viewOnly?: boolean;
};

const navItems: Array<NavItem> = [
  {
    title: 'Dashboard',
    icon: <Dashboard width={20} height={20} />,
    page: 'dashboard',
    href: '/admin/dashboard',
  },
  {
    title: 'Pages',
    icon: <Dashboard width={20} height={20} />,
    page: 'pages',
    href: '/admin/pages',
  },
  {
    title: 'Price Settings',
    icon: <PriceTag width={20} height={20} />,
    page: 'price-settings',
    href: '/admin/price-settings',
  },
  {
    title: 'Products',
    icon: <Clothes width={20} height={20} />,
    viewOnly: true,
    subItems: [
      {
        title: 'View all products',
        page: 'products',
        href: '/admin/products',
      },
      {
        title: 'Add a Product',
        page: 'newProduct',
        href: '/admin/products/new',
      },
    ],
  },
  {
    title: 'Categories',
    icon: <Cabinet />,
    subItems: [
      {
        title: 'Main Categories',
        page: 'main-categories',
        href: '/admin/main-categories',
      },
      {
        title: 'Categories (Subcategories)',
        page: 'categories',
        href: '/admin/categories',
      },
    ],
  },
  {
    title: 'Brands',
    icon: <Cabinet />,
    subItems: [
      {
        title: 'View all brands',
        page: 'brands',
        href: '/admin/brands',
      },
      {
        title: 'Add a brand',
        page: 'newBrand',
        isModal: true,
      },
    ],
  },
  {
    title: 'Fits',
    icon: <Cabinet />,
    subItems: [
      {
        title: 'View all fits',
        page: 'fits',
        href: '/admin/fits',
      },
      {
        title: 'Add a fit',
        page: 'newFit',
        isModal: true,
      },
    ],
  },
  {
    title: 'Styles',
    icon: <Cabinet />,
    subItems: [
      {
        title: 'View all styles',
        page: 'styles',
        href: '/admin/styles',
      },
      {
        title: 'Add a style',
        page: 'newStyle',
        isModal: true,
      },
    ],
  },
  {
    title: 'Colors',
    icon: <Cabinet />,
    subItems: [
      {
        title: 'View all colors',
        page: 'colors',
        href: '/admin/colors',
      },
      {
        title: 'Add a color',
        page: 'newColor',
        isModal: true,
      },
    ],
  },
  {
    title: 'Blogs',
    icon: <Cabinet />,
    subItems: [
      {
        title: 'View all blogs',
        page: 'blogs',
        href: '/admin/blogs',
      },
      {
        title: 'Add a blog',
        page: 'newBlog',
        href: '/admin/blogs/new',
      },
    ],
  },
  {
    title: 'Quotes',
    icon: <Cabinet />,
    subItems: [
      {
        title: 'View all quotes',
        page: 'quotes',
        href: '/admin/quotes',
      },
    ],
  },
  {
    title: 'Questions',
    icon: <Cabinet />,
    subItems: [
      {
        title: 'View all questions',
        page: 'questions',
        href: '/admin/questions',
      },
    ],
  },
];

const AdminNavigation: React.FC<PropTypes> = ({ page }) => {
  const [collapsedItems, setCollapsedItems] = React.useState<Array<string>>([]);

  useEffect(() => {
    const savedCollapsedItems = localStorage.getItem('collapsedItems');
    if (savedCollapsedItems) {
      const newCollapsedItems = JSON.parse(savedCollapsedItems);
      setCollapsedItems(newCollapsedItems);
    }
  }, []);

  const handleCollapse = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newCollapsedItems = [...collapsedItems, event.target.name];
      setCollapsedItems(newCollapsedItems);
      localStorage.setItem('collapsedItems', JSON.stringify(newCollapsedItems));
    } else {
      const newCollapsedItems = collapsedItems.filter(
        (item) => item !== event.target.name
      );
      setCollapsedItems(newCollapsedItems);
      localStorage.setItem('collapsedItems', JSON.stringify(newCollapsedItems));
    }
  };

  return (
    <div className="w-[18rem] bg-background4 h-full p-4 fixed left-0 overflow-y-auto">
      <ul className="flex flex-col justify-between gap-2 h-full">
        <div className="flex flex-col gap-4">
          {navItems.map((item, idx) => (
            <div
              key={item.page || '' + idx}
              className={`w-[16rem] pb-4 border-b-2 border-borderColor rounded-none ${
                item.subItems && 'collapse collapse-plus'
              }`}
            >
              {!item.viewOnly && item.href && item.page ? (
                <Link href={item.href}>
                  <li
                    className={`flex gap-2 p-4 rounded items-center ${
                      page === item.page
                        ? 'bg-activeNavigationItemBackground'
                        : 'hover:bg-background5'
                    }`}
                  >
                    {item.icon}
                    {item.title}
                  </li>
                </Link>
              ) : (
                <>
                  <input
                    type="checkbox"
                    name={`my-accordion-${item.title}`}
                    onChange={handleCollapse}
                    checked={collapsedItems.includes(
                      `my-accordion-${item.title}`
                    )}
                  />
                  <li
                    className={`flex gap-2 p-4 rounded items-center collapse-title`}
                  >
                    {item.icon}
                    {item.title}
                  </li>
                </>
              )}
              {item.subItems && (
                <ul className="pl-8 collapse-content">
                  {item.subItems.map((subItem) => {
                    if (subItem.isModal && subItem.page === 'newBrand') {
                      return (
                        <AddABrandButtonWithModal
                          key={subItem.page}
                          addBrandOnServer={addBrandOnServer}
                        >
                          <button
                            type="submit"
                            className={`flex gap-2 p-4 rounded items-center hover:bg-background5 w-full`}
                          >
                            {subItem.title}
                          </button>
                        </AddABrandButtonWithModal>
                      );
                    }

                    if (subItem.isModal && subItem.page === 'newFit') {
                      return (
                        <AddAFitButtonWithModal
                          key={subItem.page}
                          addFitOnServer={addFitOnServer}
                        >
                          <button
                            type="submit"
                            className={`flex gap-2 p-4 rounded items-center hover:bg-background5 w-full`}
                          >
                            {subItem.title}
                          </button>
                        </AddAFitButtonWithModal>
                      );
                    }

                    if (subItem.isModal && subItem.page === 'newStyle') {
                      return (
                        <AddAStyleButtonWithModal
                          key={subItem.page}
                          addStyleOnServer={addStyleOnServer}
                        >
                          <button
                            type="submit"
                            className={`flex gap-2 p-4 rounded items-center hover:bg-background5 w-full`}
                          >
                            {subItem.title}
                          </button>
                        </AddAStyleButtonWithModal>
                      );
                    }

                    if (subItem.isModal && subItem.page === 'newColor') {
                      return (
                        <AddAColorButtonWithModal
                          key={subItem.page}
                          addColorOnServer={addColorOnServer}
                          page={0}
                          size={10}
                        >
                          <button
                            type="submit"
                            className={`flex gap-2 p-4 rounded items-center hover:bg-background5 w-full`}
                          >
                            {subItem.title}
                          </button>
                        </AddAColorButtonWithModal>
                      );
                    }

                    return (
                      <Link key={subItem.page} href={subItem.href || ''}>
                        <li
                          className={`flex gap-2 p-4 rounded items-center ${
                            page === subItem.page
                              ? 'bg-activeNavigationItemBackground'
                              : 'hover:bg-background5'
                          }`}
                        >
                          {subItem.icon || ''}
                          {subItem.title}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="pt-4 pb-12">
          <AdminSignoutButton />
        </div>
      </ul>
    </div>
  );
};

export default AdminNavigation;