'use client';

import { useState, useMemo } from 'react';
import { Hero } from '@/components/Hero';
import { SearchBar } from '@/components/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter';
import { FilterBar } from '@/components/FilterBar';
import { ToolGrid } from '@/components/ToolGrid';
import { Newsletter } from '@/components/Newsletter';
import { FAQ } from '@/components/FAQ';
import { tools } from '@/data/tools';
import { Tool, PricingType, Category } from '@/types';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedPricing, setSelectedPricing] = useState<PricingType | 'All'>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'name' | 'newest'>('rating');

  const filteredTools = useMemo(() => {
    let filtered = tools;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }

    // Pricing filter
    if (selectedPricing !== 'All') {
      filtered = filtered.filter((tool) => tool.pricing === selectedPricing);
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'newest') {
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      }
      return 0;
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedPricing, sortBy]);

  const newTools = tools.filter((tool) => tool.isNew).slice(0, 6);
  const topRatedTools = [...tools]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <div className="relative">
      <Hero />
      
      {/* Search Section */}
      <section className="py-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <FilterBar
            selectedPricing={selectedPricing}
            onSelectPricing={setSelectedPricing}
            sortBy={sortBy}
            onSortChange={setSortBy}
            resultCount={filteredTools.length}
          />
        </div>
      </section>

      {/* New Tools Section */}
      {searchQuery === '' && selectedCategory === 'All' && selectedPricing === 'All' && (
        <section className="py-16 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-3xl">✨</div>
              <h2 className="text-3xl font-bold">Neu hinzugefügt</h2>
            </div>
            <ToolGrid tools={newTools} />
          </div>
        </section>
      )}

      {/* Top Rated Section */}
      {searchQuery === '' && selectedCategory === 'All' && selectedPricing === 'All' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-3xl">⭐</div>
              <h2 className="text-3xl font-bold">Top bewertet</h2>
            </div>
            <ToolGrid tools={topRatedTools} />
          </div>
        </section>
      )}

      {/* All Tools Section */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            {searchQuery || selectedCategory !== 'All' || selectedPricing !== 'All'
              ? 'Suchergebnisse'
              : 'Alle Tools'}
          </h2>
          <ToolGrid tools={filteredTools} />
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
