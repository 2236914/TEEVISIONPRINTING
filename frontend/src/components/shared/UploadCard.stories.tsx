import type { Meta, StoryObj } from '@storybook/react';
import UploadCard from './UploadCard';

const meta = {
  title: 'Shared/UploadCard',
  component: UploadCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'yellow',
      values: [
        { name: 'yellow', value: '#FFCD00' },
        { name: 'white', value: '#ffffff' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UploadCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Form submitted:', data);
      alert(`Submitted: ${data.name} - ${data.email}`);
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};

export const CustomButtonText: Story = {
  args: {
    submitButtonText: 'Upload Design',
    onSubmit: (data) => console.log(data),
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};

export const OnYellowBackground: Story = {
  args: {
    onSubmit: (data) => console.log(data),
  },
  decorators: [
    (Story) => (
      <div className="bg-primaryT p-12 min-h-[500px] flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};
