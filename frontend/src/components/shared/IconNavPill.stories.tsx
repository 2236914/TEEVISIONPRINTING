import type { Meta, StoryObj } from '@storybook/react';
import IconNavPill from './IconNavPill';

// Sample icons
const TShirtIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 21H8a1 1 0 0 1-1-1V10H5a1 1 0 0 1-.707-1.707l3-3A1 1 0 0 1 8 5h2a2 2 0 0 0 4 0h2a1 1 0 0 1 .707.293l3 3A1 1 0 0 1 19 10h-2v10a1 1 0 0 1-1 1z" />
  </svg>
);

const HoodieIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 3H15a3 3 0 0 1-6 0H6.5L2 8l3 2v11h14V10l3-2L17.5 3zM12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
  </svg>
);

const HatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6 2 10c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4 0-4-4.48-8-10-8zm0 18c-5.52 0-10-1.34-10-3 0-.78.68-1.5 1.85-2.1C4.59 15.57 5.5 16 6.5 16h11c1 0 1.91-.43 2.65-1.1C21.32 15.5 22 16.22 22 17c0 1.66-4.48 3-10 3z" />
  </svg>
);

const meta: Meta<typeof IconNavPill> = {
  title: 'Shared/IconNavPill',
  component: IconNavPill,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    scrollable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconNavPill>;

export const Default: Story = {
  args: {
    items: [
      { id: 'popular', label: 'Popular', icons: [<TShirtIcon key="1" />, <HoodieIcon key="2" />, <HatIcon key="3" />] },
      { id: 'new', label: 'New', icons: [<TShirtIcon key="1" />] },
      { id: 'sale', label: 'Sale' },
    ],
    activeId: 'popular',
    variant: 'filled',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    items: [
      { id: 'popular', label: 'Popular', icons: [<TShirtIcon key="1" />, <HoodieIcon key="2" />] },
      { id: 'trending', label: 'Trending', icons: [<HoodieIcon key="1" />] },
      { id: 'featured', label: 'Featured' },
    ],
    activeId: 'popular',
    variant: 'outline',
    size: 'md',
  },
};

export const Scrollable: Story = {
  args: {
    items: [
      { id: 'popular', label: 'Popular', icons: [<TShirtIcon key="1" />, <HoodieIcon key="2" />, <HatIcon key="3" />] },
      { id: 'new', label: 'New Arrivals', icons: [<TShirtIcon key="1" />] },
      { id: 'sale', label: 'On Sale' },
      { id: 'featured', label: 'Featured', icons: [<HatIcon key="1" />] },
      { id: 'trending', label: 'Trending' },
    ],
    activeId: 'popular',
    variant: 'filled',
    size: 'md',
    scrollable: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    items: [
      { id: 'popular', label: 'Popular', icons: [<TShirtIcon key="1" />, <HoodieIcon key="2" />] },
      { id: 'new', label: 'New' },
    ],
    activeId: 'popular',
    variant: 'filled',
    size: 'sm',
  },
};

export const ExtraSmall: Story = {
  args: {
    items: [
      { id: 'popular', label: 'Popular', icons: [<TShirtIcon key="1" />, <HoodieIcon key="2" />] },
      { id: 'new', label: 'New', icons: [<TShirtIcon key="1" />] },
      { id: 'sale', label: 'Sale' },
    ],
    activeId: 'popular',
    variant: 'filled',
    size: 'xs',
    scrollable: true,
  },
};

export const Large: Story = {
  args: {
    items: [
      { id: 'popular', label: 'Popular', icons: [<TShirtIcon key="1" />, <HoodieIcon key="2" />, <HatIcon key="3" />] },
      { id: 'new', label: 'New' },
    ],
    activeId: 'popular',
    variant: 'filled',
    size: 'lg',
  },
};
