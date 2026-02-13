import type { Meta, StoryObj } from '@storybook/react';
import LocationPill from './LocationPill';

const meta = {
  title: 'Shared/LocationPill',
  component: LocationPill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LocationPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Northern Liberties',
  },
};

export const Active: Story = {
  args: {
    label: 'Port Richmond',
    isActive: true,
  },
};

export const AsLink: Story = {
  args: {
    label: 'Old City',
    href: '/locations/old-city',
  },
};

export const PhiladelphiaLocations: Story = {
  args: {
    label: 'Location',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="bg-gray-900 p-8 rounded-lg">
      <div className="flex flex-wrap gap-3">
        <LocationPill label="Northern Liberties" />
        <LocationPill label="Manayunk" />
        <LocationPill label="Old City" />
        <LocationPill label="Port Richmond" isActive />
        <LocationPill label="Center City" />
        <LocationPill label="Fishtown" />
        <LocationPill label="University City" />
        <LocationPill label="South Philly" />
      </div>
    </div>
  ),
};
