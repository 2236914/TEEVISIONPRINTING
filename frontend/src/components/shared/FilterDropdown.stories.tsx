import type { Meta, StoryObj } from '@storybook/react';
import FilterDropdown from './FilterDropdown';

const meta = {
  title: 'Shared/FilterDropdown',
  component: FilterDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Category',
    options: [
      { value: 'all', label: 'All Categories' },
      { value: 't-shirts', label: 'T-Shirts' },
      { value: 'sweatshirts', label: 'Sweatshirts' },
      { value: 'hoodies', label: 'Hoodies' },
      { value: 'polos', label: 'Polos' },
    ],
    placeholder: 'Select a category',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export const SortBy: Story = {
  args: {
    label: 'Sort By',
    options: [
      { value: 'popular', label: 'Most Popular' },
      { value: 'newest', label: 'Newest First' },
      { value: 'price-low', label: 'Price: Low to High' },
      { value: 'price-high', label: 'Price: High to Low' },
    ],
    placeholder: 'Sort by...',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export const WithSelectedValue: Story = {
  args: {
    label: 'Size',
    options: [
      { value: 'xs', label: 'Extra Small' },
      { value: 's', label: 'Small' },
      { value: 'm', label: 'Medium' },
      { value: 'l', label: 'Large' },
      { value: 'xl', label: 'Extra Large' },
    ],
    value: 'm',
    placeholder: 'Select size',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export const MultipleDropdowns: Story = {
  args: {
    label: 'Filter',
    options: [],
  },
  render: () => (
    <div className="flex gap-4">
      <div className="w-[200px]">
        <FilterDropdown
          label="Category"
          options={[
            { value: 'all', label: 'All' },
            { value: 't-shirts', label: 'T-Shirts' },
            { value: 'hoodies', label: 'Hoodies' },
          ]}
        />
      </div>
      <div className="w-[200px]">
        <FilterDropdown
          label="Sort By"
          options={[
            { value: 'popular', label: 'Popular' },
            { value: 'newest', label: 'Newest' },
            { value: 'price', label: 'Price' },
          ]}
        />
      </div>
      <div className="w-[200px]">
        <FilterDropdown
          label="Color"
          options={[
            { value: 'black', label: 'Black' },
            { value: 'white', label: 'White' },
            { value: 'navy', label: 'Navy' },
          ]}
        />
      </div>
    </div>
  ),
};
