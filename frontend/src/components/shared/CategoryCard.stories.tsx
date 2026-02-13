import type { Meta, StoryObj } from '@storybook/react';
import CategoryCard from './CategoryCard';

const meta = {
  title: 'Shared/CategoryCard',
  component: CategoryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CategoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://picsum.photos/seed/tshirt/400/400',
    title: 'T-SHIRTS',
    href: '/products/category/t-shirts',
  },
  decorators: [
    (Story) => (
      <div className="w-[200px]">
        <Story />
      </div>
    ),
  ],
};

export const LongSleeves: Story = {
  args: {
    image: 'https://picsum.photos/seed/longsleeve/400/400',
    title: 'LONGSLEVES',
    href: '/products/category/long-sleeves',
  },
  decorators: [
    (Story) => (
      <div className="w-[200px]">
        <Story />
      </div>
    ),
  ],
};

export const CategoryGrid: Story = {
  args: {
    image: '',
    title: '',
    href: '',
  },
  render: () => (
    <div className="grid grid-cols-4 gap-6 max-w-4xl">
      <CategoryCard
        image="https://picsum.photos/seed/cat1/400/400"
        title="T-SHIRTS"
        href="/products/category/t-shirts"
      />
      <CategoryCard
        image="https://picsum.photos/seed/cat2/400/400"
        title="LONGSLEVES"
        href="/products/category/long-sleeves"
      />
      <CategoryCard
        image="https://picsum.photos/seed/cat3/400/400"
        title="POLOS"
        href="/products/category/polos"
      />
      <CategoryCard
        image="https://picsum.photos/seed/cat4/400/400"
        title="SWEATSHIRT"
        href="/products/category/sweatshirts"
      />
    </div>
  ),
};
