import type { Meta, StoryObj } from '@storybook/react';
import CTABlock from './CTABlock';

const meta = {
  title: 'Shared/CTABlock',
  component: CTABlock,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CTABlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
  },
};

export const DarkVariant: Story = {
  args: {
    variant: 'dark',
  },
};

export const CustomContent: Story = {
  args: {
    title: 'GET YOUR FREE QUOTE TODAY',
    subtitle: 'Our team is ready to help you create the perfect custom apparel for your business, event, or organization.',
    variant: 'primary',
  },
};

export const SingleButton: Story = {
  args: {
    title: 'NEED HELP?',
    subtitle: 'Our customer support team is available 24/7 to assist you with any questions.',
    buttons: [
      {
        label: 'Contact Support',
        href: '/support',
        variant: 'primary' as const,
      },
    ],
    variant: 'primary',
  },
};

export const DarkWithCustomButtons: Story = {
  args: {
    title: 'START YOUR PROJECT',
    subtitle: 'Join thousands of satisfied customers who trust us with their custom printing needs.',
    buttons: [
      {
        label: 'View Portfolio',
        href: '/portfolio',
        variant: 'secondary' as const,
      },
      {
        label: 'Get Started',
        href: '/get-started',
        variant: 'primary' as const,
      },
    ],
    variant: 'dark',
  },
};

export const AllVariants: Story = {
  args: {},
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-gray-500 mb-2 px-4">Primary Variant (Yellow)</p>
        <CTABlock variant="primary" />
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2 px-4">Dark Variant</p>
        <CTABlock variant="dark" />
      </div>
    </div>
  ),
};
