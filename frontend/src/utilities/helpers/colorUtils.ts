export const isColorDark = (hex: string) => {
  // Convert hex to RGB
  const rC = parseInt(hex.slice(1, 3), 16);
  const gC = parseInt(hex.slice(3, 5), 16);
  const bC = parseInt(hex.slice(5, 7), 16);

  // Calculate luminance
  const luminance = 0.2126 * rC + 0.7152 * gC + 0.0722 * bC;
  return luminance < 128;
};
