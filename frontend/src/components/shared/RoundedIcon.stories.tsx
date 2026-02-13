'use client';
import type { Meta, StoryObj } from '@storybook/react';
import RoundedIcon from './RoundedIcon';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const meta = {
  title: 'Shared/RoundedIcon',
  component: RoundedIcon,
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
} satisfies Meta<typeof RoundedIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: <PhoneIcon />,
    variant: 'primary',
    size: 'md',
  },
};

export const Black: Story = {
  args: {
    icon: <PhoneIcon />,
    variant: 'black',
    size: 'md',
  },
};

export const White: Story = {
  args: {
    icon: <PhoneIcon />,
    variant: 'white',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    icon: <PhoneIcon />,
    variant: 'outline',
    size: 'md',
  },
};

export const AllSizes: Story = {
  args: {
    icon: <PhoneIcon />,
    variant: 'primary',
  },
  render: () => (
    <div className="flex items-center gap-4">
      <RoundedIcon icon={<PhoneIcon />} size="sm" />
      <RoundedIcon icon={<PhoneIcon />} size="md" />
      <RoundedIcon icon={<PhoneIcon />} size="lg" />
      <RoundedIcon icon={<PhoneIcon />} size="xl" />
    </div>
  ),
};

export const ContactIcons: Story = {
  args: {
    icon: <PhoneIcon />,
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <RoundedIcon icon={<PhoneIcon />} variant="primary" size="lg" />
        <div>
          <p className="font-bold">Phone</p>
          <p className="text-gray-600">+1 267-538-5331</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <RoundedIcon icon={<EmailIcon />} variant="primary" size="lg" />
        <div>
          <p className="font-bold">Email</p>
          <p className="text-gray-600">info@teevisionprinting.com</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <RoundedIcon icon={<LocationIcon />} variant="primary" size="lg" />
        <div>
          <p className="font-bold">Address</p>
          <p className="text-gray-600">920 E Hunting Park Ave, Philadelphia, Pennsylvania</p>
        </div>
      </div>
    </div>
  ),
};
