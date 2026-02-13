import type { Meta, StoryObj } from '@storybook/react';
import Indicator from './Indicator';

const StarIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const meta = {
  title: 'Shared/Indicator',
  component: Indicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Indicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Screen Printing',
    variant: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <StarIcon />,
    label: 'Screen Printing',
    variant: 'primary',
  },
};

export const Outline: Story = {
  args: {
    icon: <StarIcon />,
    label: 'Screen Printing',
    variant: 'outline',
  },
};

export const Subtle: Story = {
  args: {
    icon: <StarIcon />,
    label: 'Screen Printing',
    variant: 'subtle',
  },
};

export const Small: Story = {
  args: {
    icon: <StarIcon />,
    label: 'Screen Printing',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    icon: <StarIcon />,
    label: 'Screen Printing',
    size: 'lg',
  },
};

export const Clickable: Story = {
  args: {
    icon: <StarIcon />,
    label: 'Click Me',
    onClick: () => alert('Clicked!'),
  },
};

export const AsLink: Story = {
  args: {
    icon: <StarIcon />,
    label: 'Go to Services',
    href: '/services',
  },
};
