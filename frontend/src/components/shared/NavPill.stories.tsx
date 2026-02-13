'use client';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import NavPill from './NavPill';

const StarIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const meta = {
  title: 'Shared/NavPill',
  component: NavPill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavPill>;

export default meta;
type Story = StoryObj<typeof meta>;

const NavPillWithState = (args: React.ComponentProps<typeof NavPill>) => {
  const [activeId, setActiveId] = useState(args.activeId);
  return <NavPill {...args} activeId={activeId} onSelect={setActiveId} />;
};

export const Default: Story = {
  args: {
    items: [
      { id: 'screen', label: 'Screen Printing' },
      { id: 'dtg', label: 'DTG' },
      { id: 'embroidery', label: 'Embroidery' },
    ],
    activeId: 'screen',
    onSelect: () => {},
  },
  render: NavPillWithState,
};

export const WithIcons: Story = {
  args: {
    items: [
      { id: 'screen', label: 'Screen Printing', icon: <StarIcon /> },
      { id: 'dtg', label: 'DTG', icon: <StarIcon /> },
      { id: 'embroidery', label: 'Embroidery', icon: <StarIcon /> },
    ],
    activeId: 'screen',
    onSelect: () => {},
  },
  render: NavPillWithState,
};

export const Outline: Story = {
  args: {
    items: [
      { id: 'screen', label: 'Screen Printing' },
      { id: 'dtg', label: 'DTG' },
      { id: 'embroidery', label: 'Embroidery' },
    ],
    activeId: 'screen',
    variant: 'outline',
    onSelect: () => {},
  },
  render: NavPillWithState,
};

export const Small: Story = {
  args: {
    items: [
      { id: 'screen', label: 'Screen' },
      { id: 'dtg', label: 'DTG' },
      { id: 'emb', label: 'Emb' },
    ],
    activeId: 'screen',
    size: 'sm',
    onSelect: () => {},
  },
  render: NavPillWithState,
};

export const ExtraSmall: Story = {
  args: {
    items: [
      { id: 'screen', label: 'Screen', icon: <StarIcon /> },
      { id: 'dtg', label: 'DTG', icon: <StarIcon /> },
      { id: 'emb', label: 'Emb' },
    ],
    activeId: 'screen',
    size: 'xs',
    scrollable: true,
    onSelect: () => {},
  },
  render: NavPillWithState,
};

export const Large: Story = {
  args: {
    items: [
      { id: 'screen', label: 'Screen Printing' },
      { id: 'dtg', label: 'DTG Printing' },
      { id: 'embroidery', label: 'Embroidery' },
    ],
    activeId: 'screen',
    size: 'lg',
    onSelect: () => {},
  },
  render: NavPillWithState,
};

export const Scrollable: Story = {
  args: {
    items: [
      { id: 'screen', label: 'Screen Printing' },
      { id: 'dtg', label: 'DTG Printing' },
      { id: 'embroidery', label: 'Embroidery' },
      { id: 'sublimation', label: 'Sublimation' },
      { id: 'heat', label: 'Heat Transfer' },
    ],
    activeId: 'screen',
    scrollable: true,
    onSelect: () => {},
  },
  render: NavPillWithState,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '350px' }}>
        <Story />
      </div>
    ),
  ],
};
