'use client';

import { Mail } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just UI - no backend logic needed
    alert('Vielen Dank für dein Interesse! Newsletter-Funktion kommt bald.');
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-6">
          <Mail className="w-8 h-8 text-blue-400" />
        </div>
        
        <h2 className="text-4xl font-bold mb-4">
          Bleib auf dem Laufenden
        </h2>
        
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Erhalte wöchentliche Updates über neue AI-Tools, Features und Trends direkt in deinen Posteingang.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Deine E-Mail Adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
          >
            Abonnieren
          </button>
        </form>

        <p className="text-sm text-slate-400 mt-4">
          Keine Spam-Mails. Abmeldung jederzeit möglich.
        </p>
      </div>
    </section>
  );
}
