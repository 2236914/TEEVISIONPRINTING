import type { Meta, StoryObj } from '@storybook/react';
import FAQAccordion from './FAQAccordion';

const meta = {
  title: 'Shared/FAQAccordion',
  component: FAQAccordion,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FAQAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFAQs = [
  {
    question: 'Placeholder Question Goes Here',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Placeholder Question Goes Here',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'Placeholder Question Goes Here',
    answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const screenPrintingFAQs = [
  {
    question: 'What is the minimum order quantity for screen printing?',
    answer: 'Our minimum order quantity for screen printing is 12 pieces. This allows us to set up the screens efficiently while still providing competitive pricing for smaller orders.',
  },
  {
    question: 'How long does it take to complete a screen printing order?',
    answer: 'Standard turnaround time is 7-14 business days from artwork approval. Rush orders are available for an additional fee and can be completed in as little as 3-5 business days.',
  },
  {
    question: 'What file formats do you accept for artwork?',
    answer: 'We accept vector files (AI, EPS, PDF) for best results. High-resolution raster images (PNG, PSD) at 300 DPI or higher are also acceptable. Our design team can help convert or recreate your artwork if needed.',
  },
  {
    question: 'Do you offer free shipping?',
    answer: 'Yes! We offer free shipping on all orders within the United States. Your order will be delivered right to your doorstep at no additional cost.',
  },
];

export const Default: Story = {
  args: {
    items: sampleFAQs,
  },
};

export const ScreenPrintingFAQs: Story = {
  args: {
    badge: 'COMMON QUESTIONS',
    titleBlack: 'FREQUENTLY ASKED',
    titleYellow: 'QUESTIONS',
    subtitle: 'Got questions? Explore our Frequently Asked Questions to learn more about our services, products, and policies all in one place.',
    items: screenPrintingFAQs,
    defaultOpenIndex: 0,
  },
};

export const CustomTitle: Story = {
  args: {
    badge: 'HELP CENTER',
    titleBlack: 'HAVE',
    titleYellow: 'QUESTIONS?',
    subtitle: 'Find answers to common questions about our products and services.',
    items: screenPrintingFAQs,
  },
};

export const AllClosed: Story = {
  args: {
    items: screenPrintingFAQs,
    defaultOpenIndex: -1,
  },
};
