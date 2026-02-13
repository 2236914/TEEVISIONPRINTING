import type { Meta, StoryObj } from '@storybook/react';
import ContactForm from './ContactForm';

const meta = {
  title: 'Shared/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'yellow', value: '#FFCD00' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Form submitted:', data);
      alert(`Message from ${data.fullName}: ${data.message}`);
    },
  },
};

export const CustomButtonText: Story = {
  args: {
    submitButtonText: 'Get Quote',
    onSubmit: (data) => console.log(data),
  },
};

export const OnBackground: Story = {
  args: {
    onSubmit: (data) => console.log(data),
  },
  decorators: [
    (Story) => (
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
};
