'use client';

import { Sparkles, TrendingUp, Zap } from 'lucide-react';

export function Hero() {
  const stats = [
    { label: '38+ Tools', icon: Sparkles },
    { label: '8 Kategorien', icon: TrendingUp },
    { label: 'Wöchentlich aktualisiert', icon: Zap },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 pt-20 pb-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Entdecke die besten
          </span>
          <br />
          <span className="text-white">KI-Tools</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
          Eine kuratierte Sammlung der leistungsstärksten AI-Tools für Text, Bild, Video, Code und mehr.
          Finde das perfekte Tool für deine Bedürfnisse.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-xl backdrop-blur-sm"
              >
                <Icon className="w-5 h-5 text-blue-400" />
                <span className="text-slate-200 font-medium">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
