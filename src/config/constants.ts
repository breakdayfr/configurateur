// Configuration constants for the 3D configurator

export const COLORS = [
  { name: 'Blanc', value: '#FFFFFF' },
  { name: 'Noir', value: '#000000' },
  { name: 'Rouge', value: '#FF0000' },
  { name: 'Bleu', value: '#0000FF' },
  { name: 'Vert', value: '#00FF00' },
  { name: 'Jaune', value: '#FFFF00' },
  { name: 'Orange', value: '#FFA500' },
  { name: 'Violet', value: '#800080' },
] as const;

export const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const;

export const BASE_PRICE = 39.99;

export const LOGO_PRICE = 10.00;

export type ColorName = typeof COLORS[number]['name'];
export type SizeName = typeof SIZES[number];
