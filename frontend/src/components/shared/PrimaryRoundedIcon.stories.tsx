import type { Meta, StoryObj } from '@storybook/react';
import PrimaryRoundedIcon from './PrimaryRoundedIcon';
import PhoneIcon from './icons/PhoneIcon';

const meta = {
  title: 'Shared/PrimaryRoundedIcon',
  component: PrimaryRoundedIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PrimaryRoundedIcon>;

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
    onClick: () => alert('Phone button clicked!'),
  },
};


