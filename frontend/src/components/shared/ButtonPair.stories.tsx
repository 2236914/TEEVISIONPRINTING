import type { Meta, StoryObj } from '@storybook/react';
import ButtonPair from './ButtonPair';

const PhoneIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
  </svg>
);

const meta = {
  title: 'Shared/ButtonPair',
  component: ButtonPair,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonPair>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactAndQuote: Story = {
  args: {
    secondaryButton: {
      icon: <PhoneIcon />,
      label: 'Contact Us Today',
      variant: 'secondary',
      onClick: () => alert('Contact clicked'),
    },
    primaryButton: {
      icon: <QuoteIcon />,
      label: 'Request Quote',
      variant: 'primary',
      onClick: () => alert('Quote clicked'),
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-primaryT p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const WithLinks: Story = {
  args: {
    secondaryButton: {
      icon: <PhoneIcon />,
      label: 'Call Now',
      variant: 'secondary',
      href: 'tel:+12675385331',
    },
    primaryButton: {
      icon: <QuoteIcon />,
      label: 'Get Quote',
      variant: 'primary',
      href: '/request-a-quote',
    },
  },
};

export const NoIcons: Story = {
  args: {
    secondaryButton: {
      label: 'Learn More',
      variant: 'secondary',
      onClick: () => {},
    },
    primaryButton: {
      label: 'Get Started',
      variant: 'primary',
      onClick: () => {},
    },
  },
};
