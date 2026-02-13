import type { Meta, StoryObj } from '@storybook/react';
import TrustBar from './TrustBar';

const meta = {
  title: 'Shared/TrustBar',
  component: TrustBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TrustBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomStats: Story = {
  args: {
    stats: [
      { value: '500+', label: 'HAPPY', sublabel: 'CUSTOMERS' },
      { value: '24/7', label: 'CUSTOMER', sublabel: 'SUPPORT' },
      { value: '100%', label: 'SATISFACTION', sublabel: 'GUARANTEED' },
    ],
  },
};

export const FullBannerStack: Story = {
  args: {},
  render: () => (
    <div>
      {/* Top Banner */}
      <div className="w-full bg-[#1a1a1a] py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
          <span className="text-white text-sm">Talk with expert</span>
          <span className="text-white text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            123-456-789
          </span>
        </div>
      </div>
      {/* Features Bar */}
      <div className="w-full bg-white py-6 border-b-4 border-[#FFC107]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {['SCREEN PRINTING ORDER', 'PREMIUM INKS', 'QUICK TURNAROUND', 'FREE DELIVERY'].map((title, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-3 w-12 h-12 bg-gray-200 rounded-full" />
                <p className="font-bold text-xs text-black uppercase">{title}</p>
                <p className="text-xs text-gray-600 uppercase">Subtitle here</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Trust Bar */}
      <TrustBar />
    </div>
  ),
};
