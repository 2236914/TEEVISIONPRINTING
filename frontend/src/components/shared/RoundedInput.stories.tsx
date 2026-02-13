import type { Meta, StoryObj } from '@storybook/react';
import RoundedInput from './RoundedInput';

const meta = {
  title: 'Shared/RoundedInput',
  component: RoundedInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RoundedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Your Name',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export const WithLabel: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'John Doe',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'john@example.com',
    error: 'Please enter a valid email',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export const Outlined: Story = {
  args: {
    label: 'Company Name',
    placeholder: 'Company Inc.',
    variant: 'outlined',
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export const FormLayout: Story = {
  args: {
    placeholder: 'Input',
  },
  render: () => (
    <div className="w-[350px] space-y-4 p-6 bg-white rounded-[25px] shadow-lg">
      <RoundedInput label="Full Name" placeholder="John Doe" />
      <RoundedInput label="Email Address" type="email" placeholder="john@example.com" />
      <div className="grid grid-cols-2 gap-4">
        <RoundedInput label="Company" placeholder="Company Inc." />
        <RoundedInput label="Phone" type="tel" placeholder="(555) 123-4567" />
      </div>
    </div>
  ),
};
