import type { Meta, StoryObj } from '@storybook/react';
import PrimaryRoundedOutline from './PrimaryRoundedOutline';

const meta = {
  title: 'Components/PrimaryRoundedOutline',
  component: PrimaryRoundedOutline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PrimaryRoundedOutline>;

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
    onClick: () => alert('Primary rounded outline button clicked!'),
  },
};

export const LongText: Story = {
  args: {
    children: 'TALK TO A PRINT EXPERT',
  },
};
