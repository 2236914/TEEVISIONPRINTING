import type { Meta, StoryObj } from '@storybook/react';
import FeatureCard from './FeatureCard';

const meta = {
  title: 'Shared/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlastisolInk: Story = {
  args: {
    image: '/screen-printing/new-screen-printing/screen-printing-ink.webp',
    title: 'Plastisol Ink',
    description: 'The most widely used ink in the apparel printing industry. Plastisol ink is durable, versatile, and it can be mixed to obtain almost any color.',
  },
  decorators: [
    (Story) => (
      <div className="w-[280px]">
        <Story />
      </div>
    ),
  ],
};

export const UVInk: Story = {
  args: {
    image: '/screen-printing/new-screen-printing/screen-printing-ink.webp',
    title: 'UV Ink',
    description: 'UV Ink is fluorescent, but when activated in the sunlight, it turns a vibrant cyan, magenta, or yellow.',
  },
  decorators: [
    (Story) => (
      <div className="w-[280px]">
        <Story />
      </div>
    ),
  ],
};

export const Grid: Story = {
  args: {
    image: '/screen-printing/new-screen-printing/screen-printing-ink.webp',
    title: 'Feature',
    description: 'Description',
  },
  render: () => (
    <div className="grid grid-cols-4 gap-4 max-w-[1200px]">
      <FeatureCard
        image="/screen-printing/new-screen-printing/screen-printing-ink.webp"
        title="Plastisol Ink"
        description="The most widely used ink in the apparel printing industry."
      />
      <FeatureCard
        image="/screen-printing/new-screen-printing/screen-printing-ink.webp"
        title="UV Ink"
        description="Fluorescent ink that activates in sunlight."
      />
      <FeatureCard
        image="/screen-printing/new-screen-printing/screen-printing-ink.webp"
        title="Puff Print"
        description="Creates a raised, 3D effect on garments."
      />
      <FeatureCard
        image="/screen-printing/new-screen-printing/screen-printing-ink.webp"
        title="Simulated Process"
        description="For photorealistic artwork and screen printing."
      />
    </div>
  ),
};
