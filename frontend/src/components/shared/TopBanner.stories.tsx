import type { Meta, StoryObj } from '@storybook/react';
import TopBanner from './TopBanner';

const meta = {
  title: 'Shared/TopBanner',
  component: TopBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TopBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    phoneNumber: '123-456-789',
    text: 'Talk with expert',
    variant: 'dark',
  },
};

export const PrimaryVariant: Story = {
  args: {
    phoneNumber: '123-456-789',
    text: 'Talk with expert',
    variant: 'primary',
  },
};

export const CustomPhone: Story = {
  args: {
    phoneNumber: '1-800-555-0123',
    text: 'Call us now',
    variant: 'dark',
  },
};

export const PrimaryCustomPhone: Story = {
  args: {
    phoneNumber: '1-800-555-0123',
    text: 'Call us now',
    variant: 'primary',
  },
};

export const AllVariants: Story = {
  args: {},
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-500 mb-2 px-4">Dark Variant (Default)</p>
        <TopBanner variant="dark" />
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2 px-4">Primary Variant</p>
        <TopBanner variant="primary" />
      </div>
    </div>
  ),
};
