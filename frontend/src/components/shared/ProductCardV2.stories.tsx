import type { Meta, StoryObj } from '@storybook/react';
import ProductCardV2 from './ProductCardV2';

const meta = {
  title: 'Shared/ProductCardV2',
  component: ProductCardV2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCardV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://picsum.photos/seed/product1/400/500',
    name: 'Gildan Adult Softstyle® T-Shirt (G640)',
    price: '$13.19 / shirt',
    rating: 5,
    reviewCount: 5,
    href: '/products/view/gildan-adult-softstyle-t-shirt-g640',
    onAddToCart: () => console.log('Added to cart'),
  },
  decorators: [
    (Story) => (
      <div className="w-[250px]">
        <Story />
      </div>
    ),
  ],
};

export const WithoutReviewCount: Story = {
  args: {
    image: 'https://picsum.photos/seed/product2/400/500',
    name: 'AS Colour Classic Tee (5026)',
    price: '$13.19 / shirt',
    rating: 4,
    href: '/products/view/as-colour-classic-tee-5026',
  },
  decorators: [
    (Story) => (
      <div className="w-[250px]">
        <Story />
      </div>
    ),
  ],
};

export const LongProductName: Story = {
  args: {
    image: 'https://picsum.photos/seed/product3/400/500',
    name: 'Gildan Hammer™ Adult T-Shirt Premium Quality Extra Soft Material (H000)',
    price: '$15.99 / shirt',
    rating: 5,
    reviewCount: 12,
    href: '/products/view/gildan-hammer-adult-t-shirt',
  },
  decorators: [
    (Story) => (
      <div className="w-[250px]">
        <Story />
      </div>
    ),
  ],
};

export const ProductGrid: Story = {
  args: {
    image: '',
    name: '',
    price: '',
    href: '',
  },
  render: () => (
    <div className="grid grid-cols-3 gap-6 max-w-3xl">
      <ProductCardV2
        image="https://picsum.photos/seed/pg1/400/500"
        name="Gildan Adult Softstyle® T-Shirt (G640)"
        price="$13.19 / shirt"
        rating={5}
        reviewCount={5}
        href="/products/view/gildan-adult-softstyle-t-shirt-g640"
        onAddToCart={() => console.log('Added to cart')}
      />
      <ProductCardV2
        image="https://picsum.photos/seed/pg2/400/500"
        name="AS Colour Classic Tee (5026)"
        price="$13.19 / shirt"
        rating={5}
        reviewCount={3}
        href="/products/view/as-colour-classic-tee-5026"
        onAddToCart={() => console.log('Added to cart')}
      />
      <ProductCardV2
        image="https://picsum.photos/seed/pg3/400/500"
        name="Gildan Hammer™ Adult T-Shirt (H000)"
        price="$13.19 / shirt"
        rating={4}
        reviewCount={8}
        href="/products/view/gildan-hammer-adult-t-shirt"
        onAddToCart={() => console.log('Added to cart')}
      />
    </div>
  ),
};

export const MobileView: Story = {
  args: {
    image: '',
    name: '',
    price: '',
    href: '',
  },
  render: () => (
    <div className="grid grid-cols-2 gap-3 max-w-sm">
      <ProductCardV2
        image="https://picsum.photos/seed/mv1/400/500"
        name="Gildan Adult Softstyle® T-Shirt (G640)"
        price="$13.19 / shirt"
        rating={5}
        reviewCount={5}
        href="/products/view/gildan-adult-softstyle-t-shirt-g640"
      />
      <ProductCardV2
        image="https://picsum.photos/seed/mv2/400/500"
        name="AS Colour Classic Tee (5026)"
        price="$13.19 / shirt"
        rating={5}
        href="/products/view/as-colour-classic-tee-5026"
      />
    </div>
  ),
};
