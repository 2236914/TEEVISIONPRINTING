import type { Meta, StoryObj } from '@storybook/react';
import FeaturesBar from './FeaturesBar';
import TopBanner from './TopBanner';

const meta = {
  title: 'Shared/FeaturesBar',
  component: FeaturesBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeaturesBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'light',
  },
};

export const PrimaryVariant: Story = {
  args: {
    variant: 'primary',
  },
};

export const NoBorder: Story = {
  args: {
    variant: 'light',
    showBorder: false,
  },
};

export const WithTopBannerDark: Story = {
  args: {},
  render: () => (
    <div>
      <TopBanner variant="dark" />
      <FeaturesBar variant="light" />
    </div>
  ),
};

export const WithTopBannerPrimary: Story = {
  args: {},
  render: () => (
    <div>
      <TopBanner variant="primary" />
      <FeaturesBar variant="light" showBorder={false} />
    </div>
  ),
};

export const AllPrimary: Story = {
  args: {},
  render: () => (
    <div>
      <TopBanner variant="primary" />
      <FeaturesBar variant="primary" />
    </div>
  ),
};

export const AllVariants: Story = {
  args: {},
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-gray-500 mb-2 px-4">Light Variant (Default)</p>
        <FeaturesBar variant="light" />
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2 px-4">Primary Variant</p>
        <FeaturesBar variant="primary" />
      </div>
    </div>
  ),
};
