import type { Meta, StoryObj } from '@storybook/react';
import GlassmorphismNavbar from './GlassmorphismNavbar';
import PrimaryRoundedIcon from './PrimaryRoundedIcon';
import PhoneIcon from './icons/PhoneIcon';

const navItems = [
  { label: 'Custom T-Shirts', href: '/custom-t-shirt-printing-philadelphia' },
  { label: 'Sweats & Hoodies', href: '/custom-hoodies' },
  { label: 'Hats, Polo & More', href: '/custom-polo-shirts' },
  { label: 'Services', href: '/services' },
];

const navItemsWithActive = [
  { label: 'Custom T-Shirts', href: '/custom-t-shirt-printing-philadelphia', isActive: true },
  { label: 'Sweats & Hoodies', href: '/custom-hoodies' },
  { label: 'Hats, Polo & More', href: '/custom-polo-shirts' },
  { label: 'Services', href: '/services' },
];

const meta = {
  title: 'Shared/GlassmorphismNavbar',
  component: GlassmorphismNavbar,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#f5f5f5' },
        { name: 'gradient', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlassmorphismNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    variant: 'light',
    navItems,
    ctaButton: (
      <PrimaryRoundedIcon icon={<PhoneIcon />}>
        Order Now
      </PrimaryRoundedIcon>
    ),
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gradient-to-r from-blue-400 to-purple-500 min-h-[200px]">
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    navItems,
    ctaButton: (
      <PrimaryRoundedIcon icon={<PhoneIcon />}>
        Order Now
      </PrimaryRoundedIcon>
    ),
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-900 min-h-[200px]">
        <Story />
      </div>
    ),
  ],
};

export const WithActiveItem: Story = {
  args: {
    variant: 'light',
    navItems: navItemsWithActive,
    ctaButton: (
      <PrimaryRoundedIcon icon={<PhoneIcon />}>
        Order Now
      </PrimaryRoundedIcon>
    ),
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gradient-to-r from-blue-400 to-purple-500 min-h-[200px]">
        <Story />
      </div>
    ),
  ],
};

export const MobileView: Story = {
  args: {
    variant: 'light',
    navItems,
    showCart: true,
    showSearch: true,
    onCartClick: () => alert('Cart clicked!'),
    onSearch: (query) => alert(`Searching for: ${query}`),
    ctaButton: (
      <PrimaryRoundedIcon icon={<PhoneIcon />}>
        Order Now
      </PrimaryRoundedIcon>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[400px]">
        <Story />
      </div>
    ),
  ],
};

export const MobileViewDark: Story = {
  args: {
    variant: 'dark',
    navItems,
    showCart: true,
    showSearch: true,
    onCartClick: () => alert('Cart clicked!'),
    onSearch: (query) => alert(`Searching for: ${query}`),
    ctaButton: (
      <PrimaryRoundedIcon icon={<PhoneIcon />}>
        Order Now
      </PrimaryRoundedIcon>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[400px] bg-gray-900">
        <Story />
      </div>
    ),
  ],
};

export const TabletView: Story = {
  args: {
    variant: 'light',
    navItems,
    showCart: true,
    showSearch: true,
    onCartClick: () => alert('Cart clicked!'),
    onSearch: (query) => alert(`Searching for: ${query}`),
    ctaButton: (
      <PrimaryRoundedIcon icon={<PhoneIcon />}>
        Order Now
      </PrimaryRoundedIcon>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[400px]">
        <Story />
      </div>
    ),
  ],
};

export const WithSearchDisabled: Story = {
  args: {
    variant: 'light',
    navItems,
    showCart: true,
    showSearch: false,
    ctaButton: (
      <PrimaryRoundedIcon icon={<PhoneIcon />}>
        Order Now
      </PrimaryRoundedIcon>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[400px]">
        <Story />
      </div>
    ),
  ],
};
