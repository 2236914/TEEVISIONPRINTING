'use client';
import type { Meta, StoryObj } from '@storybook/react';
import RoundedIconButton from './RoundedIconButton';

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);

const meta = {
  title: 'Shared/RoundedIconButton',
  component: RoundedIconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'black', 'white', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof RoundedIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: <CartIcon />,
    variant: 'primary',
    size: 'md',
  },
};

export const Black: Story = {
  args: {
    icon: <CartIcon />,
    variant: 'black',
    size: 'md',
  },
};

export const White: Story = {
  args: {
    icon: <CartIcon />,
    variant: 'white',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    icon: <CartIcon />,
    variant: 'outline',
    size: 'md',
  },
};

export const AllVariants: Story = {
  args: {
    icon: <CartIcon />,
  },
  render: () => (
    <div className="flex items-center gap-4 p-8 bg-gray-100 rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <RoundedIconButton icon={<CartIcon />} variant="primary" />
        <span className="text-xs text-gray-600">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <RoundedIconButton icon={<CartIcon />} variant="black" />
        <span className="text-xs text-gray-600">Black</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <RoundedIconButton icon={<CartIcon />} variant="white" />
        <span className="text-xs text-gray-600">White</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <RoundedIconButton icon={<CartIcon />} variant="outline" />
        <span className="text-xs text-gray-600">Outline</span>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    icon: <CartIcon />,
  },
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <RoundedIconButton icon={<CartIcon />} size="sm" />
        <span className="text-xs text-gray-600">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <RoundedIconButton icon={<CartIcon />} size="md" />
        <span className="text-xs text-gray-600">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <RoundedIconButton icon={<CartIcon />} size="lg" />
        <span className="text-xs text-gray-600">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <RoundedIconButton icon={<CartIcon />} size="xl" />
        <span className="text-xs text-gray-600">xl</span>
      </div>
    </div>
  ),
};

export const HoverDemo: Story = {
  args: {
    icon: <CartIcon />,
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-gray-600 text-center">Hover over buttons to see effects</p>
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <RoundedIconButton icon={<CartIcon />} variant="primary" size="lg" />
          <span className="text-xs text-gray-500">Yellow → Black</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <RoundedIconButton icon={<CartIcon />} variant="black" size="lg" />
          <span className="text-xs text-gray-500">Black → Yellow</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <RoundedIconButton icon={<HeartIcon />} variant="white" size="lg" />
          <span className="text-xs text-gray-500">White → Yellow</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <RoundedIconButton icon={<PlusIcon />} variant="outline" size="lg" />
          <span className="text-xs text-gray-500">Outline → Filled</span>
        </div>
      </div>
    </div>
  ),
};

export const ProductCard: Story = {
  args: {
    icon: <CartIcon />,
  },
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2 p-4 border border-dashed border-gray-300 rounded-lg">
        <RoundedIconButton icon={<CartIcon />} variant="black" size="lg" />
        <div className="text-center">
          <p className="font-bold text-green-600">$13.19 / shirt</p>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-500 text-sm">(5)</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 p-4 border border-dashed border-gray-300 rounded-lg">
        <RoundedIconButton icon={<CartIcon />} variant="primary" size="lg" />
        <div className="text-center">
          <p className="font-bold text-green-600">$13.19 / shirt</p>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-500 text-sm">(5)</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AsLink: Story = {
  args: {
    icon: <PhoneIcon />,
    variant: 'primary',
    size: 'lg',
    href: 'tel:+12675385331',
  },
};
