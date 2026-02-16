'use client';

import { PricingType } from '@/types';
import { ArrowUpDown } from 'lucide-react';

interface FilterBarProps {
  selectedPricing: PricingType | 'All';
  onSelectPricing: (pricing: PricingType | 'All') => void;
  sortBy: 'rating' | 'name' | 'newest';
  onSortChange: (sort: 'rating' | 'name' | 'newest') => void;
  resultCount: number;
}

export function FilterBar({
  selectedPricing,
  onSelectPricing,
  sortBy,
  onSortChange,
  resultCount,
}: FilterBarProps) {
  const pricingOptions: (PricingType | 'All')[] = ['All', 'Kostenlos', 'Freemium', 'Bezahlt'];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Pricing Filter */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm text-slate-400">Preis:</span>
        {pricingOptions.map((pricing) => (
          <button
            key={pricing}
            onClick={() => onSelectPricing(pricing)}
            className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
              selectedPricing === pricing
                ? 'bg-purple-500 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {pricing === 'All' ? 'Alle' : pricing}
          </button>
        ))}
      </div>

      {/* Sort and Results */}
      <div className="flex items-center gap-4">
        <div className="text-sm text-slate-400">
          {resultCount} {resultCount === 1 ? 'Tool' : 'Tools'}
        </div>
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-4 h-4 text-slate-400" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as 'rating' | 'name' | 'newest')}
            className="bg-slate-800 text-slate-300 border border-slate-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="rating">Bewertung</option>
            <option value="name">Name</option>
            <option value="newest">Neueste</option>
          </select>
        </div>
      </div>
    </div>
  );
}
