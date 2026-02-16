'use client';

import { Tool } from '@/types';
import { ExternalLink, Star } from 'lucide-react';
import { getPricingColor } from '@/lib/utils';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group relative bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      {/* New Badge */}
      {tool.isNew && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-semibold bg-green-500 text-white rounded-full">
            NEU
          </span>
        </div>
      )}

      {/* Tool Name */}
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
        {tool.name}
      </h3>

      {/* Category Badge */}
      <div className="mb-3">
        <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-slate-700 text-slate-300 rounded-full">
          {tool.category}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-300 text-sm mb-4 line-clamp-2">{tool.description}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < tool.rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-slate-600'
            }`}
          />
        ))}
        <span className="text-sm text-slate-400 ml-2">({tool.rating}/5)</span>
      </div>

      {/* Pricing and Visit Button */}
      <div className="flex items-center justify-between gap-3">
        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getPricingColor(tool.pricing)}`}>
          {tool.pricing}
        </span>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Besuchen
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
