import type { Meta, StoryObj } from '@storybook/react';
import AutoScrollMarquee from './AutoScrollMarquee';
import TvpFlagIcon from './icons/TvpFlagIcon';

const TShirtIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 21H8a1 1 0 0 1-1-1V10H5a1 1 0 0 1-.707-1.707l3-3A1 1 0 0 1 8 5h2a2 2 0 0 0 4 0h2a1 1 0 0 1 .707.293l3 3A1 1 0 0 1 19 10h-2v10a1 1 0 0 1-1 1z"/>
  </svg>
);

const HoodieIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 3H15a3 3 0 0 1-6 0H6.5L2 8l3 2v11h14V10l3-2L17.5 3zM12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
  </svg>
);

const HatIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6 2 10c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4 0-4-4.48-8-10-8zm0 18c-5.52 0-10-1.34-10-3 0-.78.68-1.5 1.85-2.1C4.59 15.57 5.5 16 6.5 16h11c1 0 1.91-.43 2.65-1.1C21.32 15.5 22 16.22 22 17c0 1.66-4.48 3-10 3z"/>
  </svg>
);

const BagIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2z"/>
  </svg>
);

const sampleItems = [
  { icon: <TShirtIcon />, label: 'Custom T-Shirts', href: '/custom-t-shirt-printing-philadelphia' },
  { icon: <HoodieIcon />, label: 'Sweats & Hoodies', href: '/custom-hoodies' },
  { icon: <HatIcon />, label: 'Hats & Polos', href: '/custom-polo-shirts' },
  { icon: <BagIcon />, label: 'Totes & More', href: '/products' },
  { icon: <TvpFlagIcon />, label: 'Get A Quote', href: '/request-a-quote' },
];

const meta = {
  title: 'Shared/AutoScrollMarquee',
  component: AutoScrollMarquee,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    speed: {
      control: 'select',
      options: ['slow', 'medium', 'fast'],
    },
    direction: {
      control: 'select',
      options: ['left', 'right'],
    },
    pauseOnHover: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof AutoScrollMarquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: sampleItems,
    speed: 'medium',
    pauseOnHover: true,
    direction: 'left',
  },
};

export const Fast: Story = {
  args: {
    items: sampleItems,
    speed: 'fast',
    pauseOnHover: true,
    direction: 'left',
  },
};

export const Slow: Story = {
  args: {
    items: sampleItems,
    speed: 'slow',
    pauseOnHover: true,
    direction: 'left',
  },
};

export const RightDirection: Story = {
  args: {
    items: sampleItems,
    speed: 'medium',
    pauseOnHover: true,
    direction: 'right',
  },
};

export const NoPauseOnHover: Story = {
  args: {
    items: sampleItems,
    speed: 'medium',
    pauseOnHover: false,
    direction: 'left',
  },
};
