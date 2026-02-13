import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';

const meta = {
  title: 'Shared/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search products...',
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const Outlined: Story = {
  args: {
    placeholder: 'Search...',
    variant: 'outlined',
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const Filled: Story = {
  args: {
    placeholder: 'What are you looking for?',
    variant: 'filled',
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const WithValue: Story = {
  args: {
    placeholder: 'Search...',
    value: 'T-shirts',
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Search for custom apparel, screen printing, embroidery...',
    variant: 'filled',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
};
