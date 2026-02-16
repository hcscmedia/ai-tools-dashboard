import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getPricingColor(pricing: string): string {
  switch (pricing) {
    case 'Kostenlos':
      return 'bg-green-500/10 text-green-500 border-green-500/20';
    case 'Freemium':
      return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    case 'Bezahlt':
      return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
    default:
      return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  }
}
