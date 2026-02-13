import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from './PrimaryButton';

const meta = {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Primary Button',
  },
};

export const WithClick: Story = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Primary button clicked!'),
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
  },
};
