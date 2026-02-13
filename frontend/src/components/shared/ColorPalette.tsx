'use client';

import React from 'react';
import MaisonNeue from '@/utilities/fonts/MaisonNeue/MaisonNeue';

interface ColorSwatch {
  name: string;
  hex: string;
  textColor?: 'light' | 'dark';
}

interface ColorPaletteProps {
  title: string;
  colors: ColorSwatch[];
}

// Primary Colors (Yellow/Gold)
export const PRIMARY_COLORS: ColorSwatch[] = [
  { name: '100', hex: '#ffeeaa', textColor: 'dark' },
  { name: '200', hex: '#ffde55', textColor: 'dark' },
  { name: '300', hex: '#ffcd00', textColor: 'dark' },
  { name: '400', hex: '#c69f00', textColor: 'dark' },
  { name: '500', hex: '#8c7100', textColor: 'light' },
  { name: '10', hex: '#ffcd00', textColor: 'dark' },
];

// Neutral/Gray Colors
export const NEUTRAL_COLORS: ColorSwatch[] = [
  { name: '50', hex: '#fafafa', textColor: 'dark' },
  { name: '100', hex: '#f5f5f5', textColor: 'dark' },
  { name: '200', hex: '#e5e5e5', textColor: 'dark' },
  { name: '300', hex: '#d4d4d4', textColor: 'dark' },
  { name: '400', hex: '#a3a3a3', textColor: 'dark' },
  { name: '500', hex: '#737373', textColor: 'light' },
  { name: '600', hex: '#525252', textColor: 'light' },
  { name: '700', hex: '#404040', textColor: 'light' },
  { name: '800', hex: '#262626', textColor: 'light' },
  { name: '900', hex: '#171717', textColor: 'light' },
];

// Dark Theme Colors
export const DARK_COLORS: ColorSwatch[] = [
  { name: '100', hex: '#4a4a4a', textColor: 'light' },
  { name: '200', hex: '#3a3a3a', textColor: 'light' },
  { name: '300', hex: '#2b2b2b', textColor: 'light' },
  { name: '400', hex: '#2a2a2a', textColor: 'light' },
  { name: '500', hex: '#1a1a1a', textColor: 'light' },
  { name: '600', hex: '#0f0f0f', textColor: 'light' },
];

// Success Colors (Green)
export const SUCCESS_COLORS: ColorSwatch[] = [
  { name: '100', hex: '#dcfce7', textColor: 'dark' },
  { name: '200', hex: '#bbf7d0', textColor: 'dark' },
  { name: '300', hex: '#86efac', textColor: 'dark' },
  { name: '400', hex: '#4ade80', textColor: 'dark' },
  { name: '500', hex: '#22c55e', textColor: 'light' },
  { name: '600', hex: '#16a34a', textColor: 'light' },
];

// Error Colors (Red)
export const ERROR_COLORS: ColorSwatch[] = [
  { name: '100', hex: '#fee2e2', textColor: 'dark' },
  { name: '200', hex: '#fecaca', textColor: 'dark' },
  { name: '300', hex: '#fca5a5', textColor: 'dark' },
  { name: '400', hex: '#f87171', textColor: 'dark' },
  { name: '500', hex: '#ef4444', textColor: 'light' },
  { name: '600', hex: '#dc2626', textColor: 'light' },
];

// Warning Colors (Orange)
export const WARNING_COLORS: ColorSwatch[] = [
  { name: '100', hex: '#ffedd5', textColor: 'dark' },
  { name: '200', hex: '#fed7aa', textColor: 'dark' },
  { name: '300', hex: '#fdba74', textColor: 'dark' },
  { name: '400', hex: '#fb923c', textColor: 'dark' },
  { name: '500', hex: '#f97316', textColor: 'light' },
  { name: '600', hex: '#ea580c', textColor: 'light' },
];

// Info Colors (Blue)
export const INFO_COLORS: ColorSwatch[] = [
  { name: '100', hex: '#dbeafe', textColor: 'dark' },
  { name: '200', hex: '#bfdbfe', textColor: 'dark' },
  { name: '300', hex: '#93c5fd', textColor: 'dark' },
  { name: '400', hex: '#60a5fa', textColor: 'dark' },
  { name: '500', hex: '#3b82f6', textColor: 'light' },
  { name: '600', hex: '#2563eb', textColor: 'light' },
];

const ColorSwatch = ({ color }: { color: ColorSwatch }) => {
  const textColorClass = color.textColor === 'light' ? 'text-white' : 'text-black';
  
  return (
    <div className="flex flex-col">
      <div 
        className="w-full h-20 md:h-24 rounded-lg mb-2 shadow-sm"
        style={{ backgroundColor: color.hex }}
      />
      <p className={`${MaisonNeue} font-bold text-sm text-gray-900`}>
        {color.name}
      </p>
      <p className={`${MaisonNeue} text-xs text-gray-500 font-mono`}>
        {color.hex}
      </p>
    </div>
  );
};

const ColorPalette = ({ title, colors }: ColorPaletteProps) => {
  return (
    <div className="mb-8">
      <h3 className={`${MaisonNeue} font-bold text-lg uppercase tracking-wide text-gray-900 mb-4`}>
        {title}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
        {colors.map((color, index) => (
          <ColorSwatch key={index} color={color} />
        ))}
      </div>
    </div>
  );
};

// Full Color System Component
export const ColorSystem = () => {
  return (
    <div className="space-y-8">
      <ColorPalette title="Primary" colors={PRIMARY_COLORS} />
      <ColorPalette title="Neutral" colors={NEUTRAL_COLORS} />
      <ColorPalette title="Dark" colors={DARK_COLORS} />
      <ColorPalette title="Success" colors={SUCCESS_COLORS} />
      <ColorPalette title="Error" colors={ERROR_COLORS} />
      <ColorPalette title="Warning" colors={WARNING_COLORS} />
      <ColorPalette title="Info" colors={INFO_COLORS} />
    </div>
  );
};

export default ColorPalette;
