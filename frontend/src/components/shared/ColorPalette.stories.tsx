import type { Meta, StoryObj } from '@storybook/react';
import ColorPalette, { 
  ColorSystem,
  PRIMARY_COLORS,
  NEUTRAL_COLORS,
  DARK_COLORS,
  SUCCESS_COLORS,
  ERROR_COLORS,
  WARNING_COLORS,
  INFO_COLORS,
} from './ColorPalette';

const meta = {
  title: 'Shared/ColorPalette',
  component: ColorPalette,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Primary',
    colors: PRIMARY_COLORS,
  },
};

export const Neutral: Story = {
  args: {
    title: 'Neutral',
    colors: NEUTRAL_COLORS,
  },
};

export const Dark: Story = {
  args: {
    title: 'Dark',
    colors: DARK_COLORS,
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    colors: SUCCESS_COLORS,
  },
};

export const Error: Story = {
  args: {
    title: 'Error',
    colors: ERROR_COLORS,
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    colors: WARNING_COLORS,
  },
};

export const Info: Story = {
  args: {
    title: 'Info',
    colors: INFO_COLORS,
  },
};

export const FullColorSystem: Story = {
  args: {
    title: '',
    colors: [],
  },
  render: () => <ColorSystem />,
};
