import type { Meta, StoryObj } from '@storybook/react';
import FilterPanel from './FilterPanel';

const meta = {
  title: 'Shared/FilterPanel',
  component: FilterPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="w-[800px]">
        <Story />
      </div>
    ),
  ],
};

export const SearchOnly: Story = {
  args: {
    showCategoryFilter: false,
    showSortFilter: false,
    showTagsFilter: false,
  },
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
};

export const CategoryAndSort: Story = {
  args: {
    showSearch: false,
    showTagsFilter: false,
  },
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
};

export const CustomCategories: Story = {
  args: {
    categories: [
      { value: 'all', label: 'All Products' },
      { value: 'apparel', label: 'Apparel' },
      { value: 'accessories', label: 'Accessories' },
      { value: 'promotional', label: 'Promotional Items' },
    ],
    sortOptions: [
      { value: 'featured', label: 'Featured' },
      { value: 'best-seller', label: 'Best Sellers' },
      { value: 'new', label: 'New Arrivals' },
    ],
    tags: [
      { id: 'sale', label: 'On Sale' },
      { id: 'new', label: 'New' },
      { id: 'bestseller', label: 'Best Seller' },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-[800px]">
        <Story />
      </div>
    ),
  ],
};

export const WithProductGrid: Story = {
  args: {},
  render: () => (
    <div className="w-[1200px] space-y-6">
      <FilterPanel />
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
            <span className="text-gray-400">Product {i}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Sidebar: Story = {
  args: {
    showSearch: true,
    showCategoryFilter: true,
    showSortFilter: false,
    showTagsFilter: true,
  },
  render: (args) => (
    <div className="flex gap-6 w-[1200px]">
      <div className="w-[300px] flex-shrink-0">
        <FilterPanel {...args} />
      </div>
      <div className="flex-1 grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
            <span className="text-gray-400">Product {i}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
