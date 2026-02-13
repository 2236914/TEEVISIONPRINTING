import type { Meta, StoryObj } from '@storybook/react';
import MixedTitle from './MixedTitle';

const meta = {
  title: 'Shared/MixedTitle',
  component: MixedTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MixedTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    words: [
      { text: 'BEST PRODUCTS', color: 'yellow' },
      'FOR SCREEN PRINTING',
    ],
    size: 'lg',
  },
};

export const ScreenPrinting: Story = {
  args: {
    words: [
      'WHAT IS',
      { text: 'CUSTOM SCREEN PRINTING', color: 'yellow' },
      'AND WHY IT WORKS?',
    ],
    size: 'md',
  },
};

export const SmallSize: Story = {
  args: {
    words: [
      { text: 'SCREEN', color: 'yellow' },
      'PRINTING',
    ],
    size: 'sm',
  },
};

export const ExtraLarge: Story = {
  args: {
    words: [
      { text: 'SCREEN PRINTING', color: 'yellow' },
      'PHILADELPHIA',
    ],
    size: 'xl',
    centered: true,
  },
};

export const Centered: Story = {
  args: {
    words: [
      { text: 'BEST PRODUCTS', color: 'yellow' },
      'FOR SCREEN PRINTING',
    ],
    size: 'lg',
    centered: true,
  },
};
