import type { Meta, StoryObj } from '@storybook/react';
import PrimaryRounded from './PrimaryRounded';

const meta = {
  title: 'Components/PrimaryRounded',
  component: PrimaryRounded,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PrimaryRounded>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'REQUEST FREE QUOTE',
  },
};

export const WithClick: Story = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Primary rounded button clicked!'),
  },
};

export const LongText: Story = {
  args: {
    children: 'TALK TO A PRINT EXPERT',
  },
};
