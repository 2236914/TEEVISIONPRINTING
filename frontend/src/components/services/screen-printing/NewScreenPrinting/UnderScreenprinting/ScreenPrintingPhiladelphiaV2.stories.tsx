import type { Meta, StoryObj } from '@storybook/react';
import ScreenPrintingPhiladelphiaV2 from './ScreenPrintingPhiladelphiaV2';

const meta = {
  title: 'Pages/ScreenPrintingPhiladelphiaV2',
  component: ScreenPrintingPhiladelphiaV2,
  parameters: {
    layout: 'fullscreen',
    // Hide controls panel since this is a full page
    controls: { disable: true },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScreenPrintingPhiladelphiaV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
