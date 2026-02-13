import type { Meta, StoryObj } from '@storybook/react';
import SecondaryButton from './SecondaryButton';

const meta = {
  title: 'Components/SecondaryButton',
  component: SecondaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SecondaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Secondary Button',
  },
};

export const WithClick: Story = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Secondary button clicked!'),
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined Secondary',
    className: 'border-2 border-gray-400',
  },
};
