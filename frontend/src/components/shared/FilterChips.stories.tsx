import type { Meta, StoryObj } from '@storybook/react';
import FilterChips from './FilterChips';

const meta = {
  title: 'Shared/FilterChips',
  component: FilterChips,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterChips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    chips: [
      { id: 'screen-printing', label: 'Screen Printing' },
      { id: 'embroidery', label: 'Embroidery' },
      { id: 'dtg', label: 'DTG' },
      { id: 'dtf', label: 'DTF' },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const WithSelection: Story = {
  args: {
    chips: [
      { id: 'screen-printing', label: 'Screen Printing' },
      { id: 'embroidery', label: 'Embroidery' },
      { id: 'dtg', label: 'DTG' },
      { id: 'dtf', label: 'DTF' },
    ],
    selectedChips: ['screen-printing', 'dtg'],
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const SingleSelect: Story = {
  args: {
    chips: [
      { id: 't-shirts', label: 'T-Shirts' },
      { id: 'hoodies', label: 'Hoodies' },
      { id: 'sweatshirts', label: 'Sweatshirts' },
      { id: 'polos', label: 'Polos' },
    ],
    multiSelect: false,
    selectedChips: ['hoodies'],
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const Categories: Story = {
  args: {
    chips: [
      { id: 'all', label: 'All' },
      { id: 't-shirts', label: 'T-Shirts' },
      { id: 'hoodies', label: 'Hoodies' },
      { id: 'sweatshirts', label: 'Sweatshirts' },
      { id: 'polos', label: 'Polos' },
      { id: 'long-sleeve', label: 'Long Sleeve' },
      { id: 'tote-bags', label: 'Tote Bags' },
    ],
    multiSelect: false,
    selectedChips: ['all'],
  },
  decorators: [
    (Story) => (
      <div className="w-[700px]">
        <Story />
      </div>
    ),
  ],
};

export const Colors: Story = {
  args: {
    chips: [
      { id: 'black', label: 'Black' },
      { id: 'white', label: 'White' },
      { id: 'navy', label: 'Navy' },
      { id: 'red', label: 'Red' },
      { id: 'gray', label: 'Gray' },
      { id: 'green', label: 'Green' },
    ],
    selectedChips: ['black', 'white'],
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};
