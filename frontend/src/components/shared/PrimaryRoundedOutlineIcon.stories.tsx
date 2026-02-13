import type { Meta, StoryObj } from '@storybook/react';
import PrimaryRoundedOutlineIcon from './PrimaryRoundedOutlineIcon';
import PhoneIcon from './icons/PhoneIcon';

const meta = {
  title: 'Shared/PrimaryRoundedOutlineIcon',
  component: PrimaryRoundedOutlineIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PrimaryRoundedOutlineIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'TALK TO A PRINT EXPERT',
    icon: <PhoneIcon />,
  },
};

export const WithClick: Story = {
  args: {
    children: 'Call Now',
    icon: <PhoneIcon />,
    onClick: () => alert('Phone outline button clicked!'),
  },
};

export const LongText: Story = {
  args: {
    children: 'REQUEST A QUOTE',
    icon: <PhoneIcon />,
  },
};
