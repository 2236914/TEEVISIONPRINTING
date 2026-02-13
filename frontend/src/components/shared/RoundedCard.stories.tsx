import type { Meta, StoryObj } from '@storybook/react';
import RoundedCard from './RoundedCard';

const meta = {
  title: 'Shared/RoundedCard',
  component: RoundedCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RoundedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="min-w-[200px]">
        <h3 className="font-bold text-lg mb-2">Card Title</h3>
        <p className="text-gray-600 text-sm">This is some card content with rounded corners.</p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div className="min-w-[200px]">
        <h3 className="font-bold text-lg mb-2">Elevated Card</h3>
        <p className="text-gray-600 text-sm">This card has a shadow for elevation.</p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div className="min-w-[200px]">
        <h3 className="font-bold text-lg mb-2">Outlined Card</h3>
        <p className="text-gray-600 text-sm">This card has a border outline.</p>
      </div>
    ),
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: (
      <div className="min-w-[200px]">
        <h3 className="font-bold text-lg mb-2">Dark Card</h3>
        <p className="text-white/80 text-sm">This card has a dark background.</p>
      </div>
    ),
  },
};

export const AllPaddings: Story = {
  args: {
    children: <span>Content</span>,
  },
  render: () => (
    <div className="flex gap-4">
      <RoundedCard padding="sm" variant="outlined">
        <span>Small</span>
      </RoundedCard>
      <RoundedCard padding="md" variant="outlined">
        <span>Medium</span>
      </RoundedCard>
      <RoundedCard padding="lg" variant="outlined">
        <span>Large</span>
      </RoundedCard>
    </div>
  ),
};
